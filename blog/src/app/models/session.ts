import { Schema, model } from "mongoose";

const SessionSchema = new Schema({
  user: {
    _id: String,
    username: String,
  },
  lock: {
    type: Boolean,
  },
  expire_at: { type: Date, default: Date.now, expires: 300 },
});

const SessionModel = model("sessions", SessionSchema);

export default SessionModel;