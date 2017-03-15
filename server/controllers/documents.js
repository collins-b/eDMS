const Document = require('../models').documents;

class documentsControllers {
  static create(req, res) {
    Document.findOne({
      where: {
        title: req.body.title
      }
    })
    .then((titleExistence) => {
      if (titleExistence != null) {
        return res.status(409).send({
          message: 'Yo!No duplicates for titles allowed!',
        });
      }
      if (!req.body.title || !req.body.content || !req.body.owner || !req.body.role) {
        return res.status(406).send({ message: 'Yo!Empty entries not required!' });
      } else if (((req.body.title).split(' ').length < 5)) {
        return res.status(406).send({ message: 'Yo!A title should have a minimum of 5 words!' });
      }
      return Document
        .create({
          title: req.body.title,
          content: req.body.content,
          owner: req.body.owner,
          role: req.body.role,
          docId: req.params.docId
        })
        .then(document => res.status(200).send(document))
        .catch(error => res.status(400).send(error));
    });
  }

  static listDocuments(req, res) {
    if (req.query.limit >= 0 && req.query.offset >= 0) {
      Document.findAll({ limit: req.query.limit, offset: req.query.offset })
      .then((doc) => {
        if (!doc) {
          return res.status(404).send({
            message: 'No users!',
          });
        }
        return res.status(200).send(doc);
      })
        .catch(error => res.status(400).send(error));
    } else {
      Document.findAll({
        where: {
          role: 'public',
        },
        order: '"createdAt" DESC'
      })
      .then(docs => res.status(200).send(docs))
      .catch(error => res.status(400).send(error));
    }
  }

  static retrieveDocument(req, res) {
    Document.findById(req.params.id)
      .then((doc) => {
        if (!doc) {
          return res.status(404).send({
            message: 'No instance of document exists!',
          });
        } else if (doc.owner !== req.session.user.userName && doc.role === 'private') {
          return res.status(401).send({
            message: 'You can\'t view a private document!',
          });
        }
        return res.status(200).send(doc);
      })
      .catch(error => res.status(403).send(error));
  }

  static updateDocument(req, res) {
    return Document
    .findById(req.params.id)
    .then((doc) => {
      if (!doc) {
        return res.status(404).send({
          message: 'Sorry,no existence of such a document!',
        });
      } else if (doc.owner !== req.session.user.userName) {
        return res.status(401).send({
          message: 'You are not allowed to edit this document!',
        });
      }
      return doc
        .update({
          title: req.body.title || doc.title,
          content: req.body.content || doc.content,
        })
        .then(() => res.status(200).send(doc))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
  }

  static deleteDocument(req, res) {
    return Document
    .findById(req.params.id)
    .then((doc) => {
      if (!doc) {
        return res.status(400).send({
          message: 'Sorry,no existence of such a document!',
        });
      } else if (doc.owner !== req.session.user.userName && doc.owner !== 'admin') {
        return res.status(401).send({
          message: 'You are not allowed to delete this document!',
        });
      }
      return doc
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
  }

  static findPrivateDocuments(req, res) {
    Document.findAll({
      where: {
        role: 'private',
      },
      order: '"createdAt" DESC'
    })
      .then((doc) => {
        if (!doc) {
          return res.status(404).send({
            message: 'You don\'t have a private document!',
          });
        } else if (doc.owner !== req.session.user.userName && doc.role === 'private') {
          return res.status(401).send({
            message: 'You can\'t view a private document!',
          });
        }
        return res.status(200).send(doc);
      })
      .catch(res.status(400).send({ message: 'Please,login first!' }));
  }

  static listOwnerDocuments(req, res) {
    Document.findAll({
      where: {
        owner: req.session.user.userName,
      },
      order: '"createdAt" DESC'
    })
    .then(docs => res.status(200).send(docs))
    .catch(error => res.status(400).send(error));
  }

  static searchDocument(req, res) {
    Document.findAll({
      where: {
        $or: [
          {
            title: { $iLike: `%${req.body.terms}%` },
          },
          {
            content: { $iLike: `%${req.body.terms}%` },
          },
        ],
        role: 'public',
      },
      order: '"createdAt" DESC'
    })
    .then(docs => res.status(200).send(docs))
    .catch(error => res.status(400).send(error));
  }

  static searchDocumentByTitle(req, res) {
    Document.findAll({
      where: {
        $or: [
          {
            title: { $iLike: `%${req.body.title}%` },
          },
        ],
        role: 'public',
      },
      order: '"createdAt" DESC'
    })
    .then(docs => res.status(200).send(docs))
    .catch(error => res.status(400).send(error));
  }
}

export default documentsControllers;
