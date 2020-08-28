import { Router } from 'express'
import orderController from '../controllers/orderController'

const router = Router()
router.get('/', orderController.getAllOrder)
router.post('/', orderController.addOrder)
router.get('/:id', orderController.getOrder)
router.put('/:id', orderController.updatedOrder)
router.delete('/:id', orderController.deleteOrder)
export default router