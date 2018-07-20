"use strict";
module.exports = (sequelize, DataTypes) => {
  var CityPollster = sequelize.define(
    "CityPollster",

    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },

      city_id: {
        type: DataTypes.INTEGER
      },
      pollster_id: {
        type: DataTypes.INTEGER
      }
    },
    {}
  );
  CityPollster.associate = function(models) {
    // associations can be defined here
  };
  return CityPollster;
};
