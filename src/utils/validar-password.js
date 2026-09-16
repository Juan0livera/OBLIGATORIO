import bcrypt from "bcryptjs";

export const hashear = async (password) => {
    return await bcrypt.hash(password, 10);
}

export const comparePassword = async(password, passwordHash)=> {
    const isValid = await bcrypt.compare(password, passwordHash);
    return isValid;
}