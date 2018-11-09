import { combineReducers } from 'redux';
import theme from 'reducers/theme';

const reducers = combineReducers({
  themeReducer: theme,
});

export default reducers;
