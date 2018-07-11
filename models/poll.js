"use strict";
module.exports = (sequelize, DataTypes) => {
  var Poll = sequelize.define("Poll", {
    name: {
      type: DataTypes.STRING,
      required: true,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      set(val) {
        this.setDataValue("description", val[0].toUpperCase() + val.slice(1));
      }
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  });
  Poll.associate = function(models) {
    // associations can be defined here
  };
  return Poll;
};
