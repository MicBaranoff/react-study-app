export const requiredFiled = (value) => {
    if (value) return undefined;
    return 'Filed is Required';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

export const minLengthCreator = (minLength) => (value) => {
    if (value && value.length < minLength) return `Min length is ${minLength} symbols`;
    return undefined;
}

export const emailValidation = (value) => {
    const result = value.toString()
        .toLowerCase()
        .match(
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        )
    if (!result) {return `Email is not valid`}
}
