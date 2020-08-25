'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    name: DataTypes.STRING,
    table: DataTypes.STRING,
    amount: DataTypes.DECIMAL
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};