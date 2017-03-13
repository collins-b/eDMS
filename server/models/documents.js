module.exports = (sequelize, DataTypes) => {
  const documents = sequelize.define('documents', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    owner: DataTypes.STRING,
    role: DataTypes.STRING,
    docId: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        documents.belongsTo(models.users, {
          foreignKey: 'docId',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return documents;
};
