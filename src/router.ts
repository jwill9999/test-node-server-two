import { Router } from 'express';
import homeRoute from '../routes/index';
import  usersRoutes from '../routes/users';

// Create a new Router instance
const router = Router();

// Mount the routers
router.use('/', homeRoute);
router.use('/users', usersRoutes);

export default router;