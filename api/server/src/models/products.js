'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2)
  }, {});
  products.associate = function (models) {
    // associations can be defined here
  };
  return products;
};