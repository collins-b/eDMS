const Role = require('../models').roles;

class rolesController {
  static create(req, res) {
    Role.findOne({
      where: {
        title: req.body.title
      }
    })
    .then((titleExistence) => {
      if (titleExistence != null) {
        return res.status(409).send({
          message: 'Yo!No duplicates for role title allowed!',
        });
      }
      if (!req.body.title || !req.body.accessLevel) {
        return res.status(406).send({ message: 'Yo!Empty entries not required!' });
      }
      return Role
        .create({
          title: req.body.title,
          accessLevel: req.body.accessLevel
        })
        .then(role => res.status(200).send(role))
        .catch(error => res.status(400).send(error));
    });
  }

  static allRoles(req, res) {
    return Role
    .all()
    .then(docs => res.status(200).send(docs))
    .catch(error => res.status(400).send(error));
  }

  static retrieveRole(req, res) {
    Role.findById(req.params.id)
      .then((role) => {
        if (!role) {
          return res.status(404).send({
            message: 'No instance of such role exists!',
          });
        }
        return res.status(200).send(role);
      })
      .catch(error => res.status(400).send(error));
  }

  static updateRole(req, res) {
    return Role
    .findById(req.params.id)
    .then((role) => {
      if (!role) {
        return res.status(404).send({
          message: 'Sorry,no existence of such a role!',
        });
      }
      return role
        .update({
          title: req.body.title || role.title,
          accessLevel: req.body.accessLevel || role.accessLevel,
        })
        .then(() => res.status(200).send(role))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
  }

  static deleteRole(req, res) {
    return Role
    .findById(req.params.id)
    .then((role) => {
      if (!role) {
        return res.status(404).send({
          message: 'Sorry,no existence of such a role!',
        });
      }
      return role
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
.catch(error => res.status(400).send(error));
  }
}

export default rolesController;
