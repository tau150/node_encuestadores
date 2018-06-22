"use strict";

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    "User",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        require: true,
        type: DataTypes.STRING
      },
      surname: {
        require: true,
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        require: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        require: true,
        type: DataTypes.STRING
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
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Role, {
      foreignKey: "role_id"
    });
  };
  return User;
};
