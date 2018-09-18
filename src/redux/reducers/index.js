import { combineReducers } from 'redux';
import gamePlayReducer from "./game_play";

export default combineReducers({
   loop: gamePlayReducer
})