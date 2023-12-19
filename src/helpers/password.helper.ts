import * as bcrypt from 'bcrypt';

export const hashPassword = async (plainText: string, saltRound = 10) => {
    try {
        return await bcrypt.hash(plainText, saltRound);
    } catch (error) {
        console.error(`hashPassword:: ${error.message}`);
        return '';
    }
};

export const comparePassword = async (plainText: string, encrypted: string) => {
    try {
        return await bcrypt.compare(plainText, encrypted);
    } catch (error) {
        console.error(`comparePassword:: ${error.message}`);
        return false;
    }
};
