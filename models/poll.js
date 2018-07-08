'use strict';
module.exports = (sequelize, DataTypes) => {
  var Poll = sequelize.define(
    'Poll',
    {
      name: {
        type: DataTypes.STRING,
        required: true,
      },
      description: {
        type: DataTypes.TEXT,,
        set(val) {
          this.setDataValue('surname', val[0].toUpperCase() + val.slice(1));
        },
      }
    },
    {}
  );
  Poll.associate = function(models) {
    // associations can be defined here
    Poll.hasMany(model.User);
  };
  return Poll;
};
