export default (state = { username: "Dave", phone: "09XXXXX" }, action) => {
    switch (action.type) {
        case '': return state
        default:return state
    }
}