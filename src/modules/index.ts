import { combineReducers } from 'redux';
import toggle from './toggle';

const rootReducer = combineReducers({
    toggle
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;