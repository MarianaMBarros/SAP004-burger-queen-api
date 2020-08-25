'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2)
  }, {});
  product.associate = function (models) {
    product.hasMany(models.order_item)
  };
  return product;
};