module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define('roles', {
    title: DataTypes.STRING,
    accessLevel: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models) => {
      }
    }
  });
  return roles;
};
