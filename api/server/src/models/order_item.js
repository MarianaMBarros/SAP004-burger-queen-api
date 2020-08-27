'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_item = sequelize.define('order_item', {
    product_quantity: DataTypes.INTEGER,
    order_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: 'order', key: 'id' }
    },
    product_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: 'product', key: 'id' }
    }
  }, {});
  order_item.associate = function (models) {
  };
  return order_item;
};