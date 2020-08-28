'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    name: DataTypes.STRING,
    table: DataTypes.STRING,
    amount: DataTypes.DECIMAL(10, 2)
  }, { freezeTableName: true });
  order.associate = function (models) {
    order.hasMany(models.order_item)
  };
  return order;
};