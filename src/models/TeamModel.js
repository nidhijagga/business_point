import mongoose from 'mongoose';

const { Schema } = mongoose;

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
  img: {
    type: String,
    required: true,
  }
});

const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);

export default Team;
