import { Router, Request, Response } from 'express';
const router = Router();

// Create a route / that returns a JSON object with a message property
router.get('/', (req: Request, res: Response) => {
    res.send('Users  route! service two');
  });

export default router;
