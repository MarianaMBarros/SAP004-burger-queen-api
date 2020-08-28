import database from '../src/models'

class orderService {
  static async getAllOrder() {
    try {
      return await database.order.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addOrder(newOrder) {
    try {
      return await database.order.create(newOrder)
    } catch (error) {
      throw error
    }
  }

  static async updateOrder(id, updateOrder) {
    try {
      const orderToUpdate = await database.order.findOne({
        where: { id: Number(id) }
      })

      if (orderToUpdate) {
        await database.order.update(updateOrder, { where: { id: Number(id) } })

        return updateOrder
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getOrder(id) {
    try {
      const theOrder = await database.order.findOne({
        where: { id: Number(id) }
      })

      return theOrder
    } catch (error) {
      throw error
    }
  }

  static async deleteOrder(id) {
    try {
      const orderToDelete = await database.order.findOne({ where: { id: Number(id) } })

      if (orderToDelete) {
        const deletedOrder = await database.order.destroy({
          where: { id: Number(id) }
        })
        return deletedOrder
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default orderService