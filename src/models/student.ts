import mongoose, { Document, Schema } from 'mongoose';

// Student interface
export interface IStudent extends Document {
  name: string;
  subject: string;
  marks: number;
  user: Schema.Types.ObjectId; // Reference to the User who created the student
}

// Student schema
const StudentSchema: Schema<IStudent> = new Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Student = mongoose.model<IStudent>('Student', StudentSchema);
export default Student;
