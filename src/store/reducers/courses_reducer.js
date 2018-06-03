import { LOAD_COURSES } from '../actions/actionTypes';

export default function(state = [], action) {

    switch (action.type) {

        case LOAD_COURSES:
         
            state = [];
            return [ ...state, ...action.payload ];
            
    }

    return state;
}