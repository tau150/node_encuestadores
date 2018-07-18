"use strict";

module.exports = (sequelize, DataTypes) => {
  var Pollster = sequelize.define(
    "Pollster",
    {
      jobPosition: DataTypes.STRING,
      poll_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "Polls"
          },
          key: "id"
        }
      }
    },
    {}
  );
  Pollster.associate = function(models) {
    // associations can be defined here
    Pollster.belongsTo(models.Poll, {
      foreignKey: "poll_id"
    });

    Pollster.belongsToMany(models.City, {
      as: "cities",
      through: "citypollsters",
      foreignKey: "pollster_id"
    });
  };
  return Pollster;
};
