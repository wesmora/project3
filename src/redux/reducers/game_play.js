import {
    INFECT_CITY
   } from "../action_types/loop_actions";
   // import default from 'redux-form/lib/defaultShouldValidate'; may not use yet
   
   const INITIAL_STATE = {
    infection_level: 0
   };
   
   export default function gamePlayReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      // setting user to authenticated
      case INFECT_CITY:
        return {
          ...state,
          infection_level: action.payload
        };
      default:
        return state;
    }
   }