export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state')

        if (serializedState === null) {
            return undefined
        }

        return JSON.parse(serializedState)

    } catch (err) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (err) {
        // die
        console.log(err)
    }
}

export const getAuth = () => {
    const serializedState = JSON.parse(localStorage.getItem('state'))
    return serializedState.auth
}