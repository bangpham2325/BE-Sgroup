import {model, Schema} from 'mongoose';
interface ISecctionSchema{
    user:{
        _id:String,
        username : String,
    }
    lock: {
        type: Boolean
    }
}
const SessionSchema = new Schema<ISecctionSchema>({
    user: {
        _id: String,
        username: String
    },
    lock: {
        type: Boolean
    }
});

const SessionModel = model('sessions', SessionSchema);

export default SessionModel;