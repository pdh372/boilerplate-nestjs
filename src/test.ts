import { hashPassword, comparePassword } from '@helpers';
const main = async () => {
    const a = await hashPassword('Duchuy@123');
    console.log(await comparePassword('Duchuy@123', a));
};

main();
