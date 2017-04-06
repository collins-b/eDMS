const Role = require('../models').roles;

/**
 * rolesController class
 */
class RolesController {

/**
 * create
 * @description creates roles
 * @param {object} req request
 * @param {object} res response
 * @returns {object} return an object
 */
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
      if (req.body.title === '' || req.body.accessLevel === '') {
        return res.status(406).send({ message: 'Yo!Empty entries not required!' });
      }
      return Role
        .create({
          title: req.body.title,
          accessLevel: req.body.accessLevel
        })
        .then(role => res.status(201).send(role))
        .catch(error => res.status(400).send(error));
    });
  }

/**
 * allRoles
 * @description creates documents
 * @param {object} req request
 * @param {object} res response
 * @returns {object} return an object
 */
  static allRoles(req, res) {
    return Role
    .all()
    .then(docs => res.status(200).send(docs))
    .catch(error => res.status(400).send(error));
  }

/**
 * retrieveRole
 * @description gets a single role
 * @param {object} req request
 * @param {object} res response
 * @returns {object} return an object
 */
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
      .catch(error => res.status(400).send({ Error: 'Role id should be a number' }));
  }

/**
 * updateRole
 * @description updates a given role
 * @param {object} req request
 * @param {object} res response
 * @returns {object} return an object
 */
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
    .catch(error => res.status(400).send({ Error: 'Role id should be a number' }));
  }

/**
 * deleteRole
 * @description deletes a given role
 * @param {object} req request
 * @param {object} res response
 * @returns {object} return an object
 */
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
.catch(error => res.status(400).send({ Error: 'Role id should be a number' }));
  }
}

export default RolesController;
