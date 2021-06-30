import {model, Schema} from 'mongoose';
export interface IUserSchema {
    username: string,
    password: string,
}
const UserSchema = new Schema<IUserSchema,any>({
    username: String,
    password: String,
});
const UserModel = model('users', UserSchema);

export default UserModel;