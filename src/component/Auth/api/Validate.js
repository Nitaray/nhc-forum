export const validate = (value, type) => {
    const patterns = {
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    }

    if (type === 'email')
        return patterns.email.test(value);
    else if (type === 'password')
        return patterns.password.test(value);
    return false;
}