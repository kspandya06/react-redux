import * as types from '../actions/actionTypes';
import initialState from './intialState';


export default function ajaxSattusReducer(state = initialState.ajaxCallsInProgress, action)
    if 
        (action.type == types.BEGIN_AJAX_CALL){
        return state +1;
    }else if
        (actionTypeEndsInSuccess(action.type)){
            return state -1;
        }
    
    return state;