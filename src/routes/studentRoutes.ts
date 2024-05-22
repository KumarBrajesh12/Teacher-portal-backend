// src/routes/studentRoutes.ts
import express from 'express';
import { getStudents, createStudent, updateStudent, deleteStudent } from '../controllers/studentController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/')
  .get(protect, getStudents)
  .post(protect, createStudent);

router.route('/:id')
  .put(protect, updateStudent)
  .delete(protect, deleteStudent);

export default router;
