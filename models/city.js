"use strict";
module.exports = (sequelize, DataTypes) => {
  var City = sequelize.define(
    "City",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      code: DataTypes.STRING,
      department: DataTypes.STRING,
      zip: DataTypes.STRING,
      city: DataTypes.STRING,

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {}
  );
  City.associate = function(models) {
    // associations can be defined here
  };
  return City;
};
