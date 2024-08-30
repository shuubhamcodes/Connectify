import {ID} from 'appwrite';
import { account } from './config';
import { INewUser } from '@/types';

export async function createUserAccount(user: INewUser){
try {
    const newAccount = await account.create(
        ID.unique(),
        user.email,
        user.password,

    )
} catch (error) {
    console.log(error);
    return error;
}
}