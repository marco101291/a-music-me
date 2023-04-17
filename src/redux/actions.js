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

export const loadAlbumReviews= () =>{
    return async (dispatch) =>{
        const dbRef= ref(db)
        return await get(child(dbRef, 'albums'))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    let albums = [];
                    snapshot.forEach((childSnapshot)=>{
                        albums.push(childSnapshot.val())
                    })
                    dispatch(loadAlbums(albums))
                } else{
                    console.log('No data available');
                }
            })
    }
}


export const addAlbum = (album) =>{
    return{
        type: 'ADD_ALBUM',
        album
    }
} 

export const loadAlbums= (albums) =>{
    return{
        type: 'LOAD_ALBUMS',
        albums
    }
}