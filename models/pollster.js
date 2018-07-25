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
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(val) {
          const lowCase = val.toLowerCase();
          this.setDataValue(
            "name",
            lowCase[0].toUpperCase() + lowCase.slice(1)
          );
        }
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
        set(val) {
          const lowCase = val.toLowerCase();
          this.setDataValue(
            "surname",
            lowCase[0].toUpperCase() + lowCase.slice(1)
          );
        }
      },
      dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: {
          args: true,
          message: "Dni debe ser único"
        }
      },
      img: {
        type: DataTypes.STRING
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
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
