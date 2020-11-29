export const validate = (value, type) => {
    const patterns = {
        email: {
            type: 'email', 
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
        },
        username : {
            type: 'username',
            pattern: /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9]+(?<![_.])$/
        },
        password: {
            type: 'password',
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        } 
    }

    for (var key in patterns) {
        if (patterns[key].type === type)
            return patterns[key].pattern.test(value);
    }
    return false;
}