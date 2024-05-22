import { Request, Response } from 'express';
import User, { IUser } from '../models/user';
import { generateToken } from '../utils/token';

export const registerUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ username, password }) as IUser;
    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        token: generateToken(user?._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error:any) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const authUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username }) as IUser;

    if (user && (await user.comparePassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error:any) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
