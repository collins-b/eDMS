const Bcrypt = require('bcrypt-nodejs');

const salt = Bcrypt.genSaltSync(10);

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    firstName: DataTypes.STRING,
    otherNames: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        users.hasMany(models.documents, {
          foreignKey: 'docId',
          as: 'documents',
        });
      },
    },
    instanceMethods: {
      generateHashedPassword() {
        this.password = Bcrypt.hashSync(this.password, salt);
      },
      // validatePassword(password) {
      //   return Bcrypt.compareSync(password, this.password);
      // }
    },
    hooks: {
      beforeCreate(user) {
        user.generateHashedPassword();
      },
      beforeUpdate(user) {
        user.generateHashedPassword();
      }
    }
  });
  return users;
};
