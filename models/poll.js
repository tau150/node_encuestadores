'use strict';
module.exports = (sequelize, DataTypes) => {
  var Poll = sequelize.define('Poll', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Poll.associate = function(models) {
    // associations can be defined here
  };
  return Poll;
};