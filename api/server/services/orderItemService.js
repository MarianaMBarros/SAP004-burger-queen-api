import database from '../src/models'

class orderItemService {
  static async getAllOrderItem() {
    try {
      return await database.order_item.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addOrderItem(newOrderItem) {
    try {
      return await database.order_item.create(newOrderItem)
    } catch (error) {
      throw error
    }
  }

  static async updateOrderItem(id, updateOrderItem) {
    try {
      const orderItemToUpdate = await database.order_item.findOne({
        where: { id: Number(id) }
      })

      if (orderItemToUpdate) {
        await database.order_item.update(updateOrderItem, { where: { id: Number(id) } })

        return updateOrderItem
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getOrderItem(id) {
    try {
      const theOrderItem = await database.order_item.findOne({
        where: { id: Number(id) }
      })

      return theOrderItem
    } catch (error) {
      throw error
    }
  }

  static async deleteOrderItem(id) {
    try {
      const orderItemToDelete = await database.order_item.findOne({ where: { id: Number(id) } })

      if (orderItemToDelete) {
        const deletedOrderItem = await database.order_item.destroy({
          where: { id: Number(id) }
        })
        return deletedOrderItem
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default orderItemService