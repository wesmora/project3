import {
    INFECT_CITY,
    HEAL_CITY,
    STARTING_CITY,
    CURRENT_CITY,
    ITEM_PLACED
} from "../action_types/loop_actions";

export function infectCity(num, cityId) {
    return function(dispatch) {

        let data = {
            num:num,
            cityId:cityId
        }

        dispatch({
            type: INFECT_CITY,
            payload:data 
        });
    }
}