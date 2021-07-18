'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    caption: DataTypes.TEXT
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.User, {foreignKey: "userId"})
    Photo.belongsTo(models.Album, {foreignKey: "albumId"})
    Photo.hasMany(models.Comment, {foreignKey: "photoId"})
  };
  return Photo;
};