"use strict";

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      require: true,
      type: DataTypes.STRING,
      set(val) {
        const lowCase = val.toLowerCase();
        this.setDataValue("name", lowCase[0].toUpperCase() + lowCase.slice(1));
      }
    },
    surname: {
      require: true,
      type: DataTypes.STRING,
      set(val) {
        const lowCase = val.toLowerCase();
        this.setDataValue(
          "surname",
          lowCase[0].toUpperCase() + lowCase.slice(1)
        );
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      set(val) {
        this.setDataValue("email", val.trim());
      },
      validate: {
        isEmail: true
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      set(val) {
        this.setDataValue("password", val.trim());
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: "Roles"
        },
        key: "id"
      }
    },
    img: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Role, {
      foreignKey: "role_id"
    });
  };
  return User;
};
