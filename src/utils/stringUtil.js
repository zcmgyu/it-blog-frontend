export const addThreeDots = (input, length) => {
    if (input === null) {
        return ''
    }
    return (input.length > length ? input.trim().substr(0, length) + '...' : input.trim())   
}

export const generateAvatarLetter = (name) => {
    let avatarLetter;
    if (name.indexOf(" ") < 0) {
      avatarLetter = name.slice(0, 2);
    } else {
      avatarLetter =
        name.slice(0, name.indexOf(" ")).charAt(0) +
        name.slice(name.lastIndexOf(" ") + 1).charAt(0);
    }

    return avatarLetter = avatarLetter.toUpperCase();
}
