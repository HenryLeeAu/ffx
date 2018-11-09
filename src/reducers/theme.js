import { GET_THEME } from 'actions/types'

export default function themeReducer(state = { color: 'default' }, action) {
  switch (action.type) {
    case GET_THEME:
      return {
        ...state,
        color: action.payload.color,
      };

    default:
      return state;
  }
}
