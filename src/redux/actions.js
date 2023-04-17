import { db } from "../database/config";
import { ref, set, get, child, remove, push, update } from 'firebase/database';

export const addAlbumReview = (album) => {
    return async (dispatch) => {
        return await set(ref(db, `albums/${album.id}`), album)
            .then(()=>{
                dispatch(addAlbum(album));
            }).catch((error)=>{
                console.log(error)
            })
    }
}


export const addAlbum = (album) =>{
    return{
        type: 'ADD_ALBUM',
        album
    }
} 