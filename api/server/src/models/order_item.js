'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_item = sequelize.define('order_item', {
    product_quantity: DataTypes.INTEGER,
    order_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'order', key: 'id' }
    },
    product_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'product', key: 'id' }
    }
  }, { freezeTableName: true });
  order_item.associate = function (models) {
  };
  return order_item;
};