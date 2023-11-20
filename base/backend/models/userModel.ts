import { Model, model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

interface IUser {
    name: string;
    email: string;
    password: string;
}

interface IUserMethods {
    signUp(): void;
    signIn(): void;
}

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema: Schema<IUser, UserModel, IUserMethods> = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
});

userSchema.method('signUp', async function (email: string, password: string) {
    if (!email || !password) {
        throw Error('All fields are required');
    }

    if (!validator.isEmail(email)) {
        throw Error('Email is not valid');
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough');
    }

    const isEmailExisting = await User.findOne({ email })

    if (isEmailExisting) {
        throw Error('Email is already in use');
    }

    const saltRounds: number = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({
        email,
        password: hash
    });

    return user;
});

userSchema.method('signIn', async function (email: string, password: string) {
    if (!email || !password) {
        throw Error('Required fields');
    }

    if (!validator.isEmail(email)) {
        throw Error('Please enter a valid email');
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw Error('Invalid login credentials');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error('Invalid login credentials');
    }

    return user;
});

export const User = model<IUser>('User', userSchema);