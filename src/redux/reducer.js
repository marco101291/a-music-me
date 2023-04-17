import _albums from '../data/albums';
import { combineReducers } from 'redux';

const albums = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ALBUM': return [...state, action.album];
        case 'DELETE_ALBUM': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'LOAD_ALBUMS': return action.albums
        default: return state;
    }

}


// const playlists = (state = _playlists, action) => {


//     switch (action.type) {
//         case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
//         case 'ADD_POST': return [...state, action.post];
//         case 'LOAD_POSTS': return action.posts;
//         default: return state
//         // .sort(function (x, y) {
//         //     return y.id - x.id
//         // });
//     }



// }


const rootReducer = combineReducers({ albums });

export default rootReducer;