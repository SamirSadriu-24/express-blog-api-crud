import express from 'express'
import { getPost, getSinglePost, createNewPost, modificaPost, deletePost } from '../controllers/postsController.js';

const router = express.Router();

router.get('/', getPost)

router.get('/:id', getSinglePost)

router.post('/', createNewPost)

router.patch('/:id', modificaPost)

router.delete('/:id', deletePost)

export default router;