"use strict";
module.exports = (sequelize, DataTypes) => {
  var CityPollster = sequelize.define(
    "CityPollster",

    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },

      city_id: DataTypes.INTEGER
    },
    {}
  );
  CityPollster.associate = function(models) {
    // associations can be defined here
  };
  return CityPollster;
};
