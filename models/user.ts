import { Schema, model, models } from 'mongoose';

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    text: String
});

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: String,
    lastName: String,
    age: Number,
    notes: [noteSchema]
});

const User = models.User || model('User', userSchema);

export default User;
