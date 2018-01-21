export const addThreeDots = (input, length) => {
    if (input === null) {
        return ''
    }
    return (input.length > length ? input.trim().substr(0, length) + '...' : input.trim())   
}