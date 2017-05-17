//file to tracking ajax calls

import * as types from './actionTypes';

export function beginAjaxCall(){
    return {type: types.BEGIN_AJAX_CALL};
}