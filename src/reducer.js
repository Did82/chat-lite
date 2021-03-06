const reducer = (state, action) => {
    switch (action.type) {
        case 'JOINED':
            return {
                ...state,
                joined: action.payload,
                roomId: action.payload.roomId,
                userName: action.payload.userName
            }
        default:
            return state;
    }
}

export default reducer;
