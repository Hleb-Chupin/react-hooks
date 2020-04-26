import { SHOW_ALERT, HIDE_ALERT } from "../Types"

const handlers = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    DAFAULT: state => state
}

export const AlertReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DAFAULT

    return handler(state, action)
}