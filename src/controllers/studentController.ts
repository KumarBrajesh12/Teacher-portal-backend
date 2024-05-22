import { Request, Response } from 'express';
import Student from '../models/student';

export const getStudents = async (req:any, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const students = await Student.find({ user: userId });
    res.json(students);
  } catch (error: any) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const createStudent = async (req: any, res: Response) => {
  const { name, subject, marks } = req.body;
  const userId = req.user?.id;

  try {
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const existingStudent = await Student.findOne({ name, subject, user: userId });

    if (existingStudent) {
      existingStudent.marks += marks;
      const updatedStudent = await existingStudent.save();
      res.json(updatedStudent);
    } else {
      const newStudent = new Student({ name, subject, marks, user: userId });
      const createdStudent = await newStudent.save();
      res.status(201).json(createdStudent);
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, subject, marks } = req.body;

  try {
    const student = await Student.findByIdAndUpdate(id, { name, subject, marks }, { new: true });

    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const student = await Student.findByIdAndDelete(id);

    if (student) {
      res.json({ message: 'Student removed' });
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
