
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from "../components/NavBar/NavBar";
import Albums from '../components/Albums/Album/Albums';
import Playlists from '../components/Playlists/Playlists'
import AddAlbum from './AddAlbum/AddAlbum';
import { useState, useEffect } from 'react';


const Main = (props) => {
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        props.loadAlbumReviews().then(()=>{
            setLoading(false);
        })
    }, [])


    return (
        <>
            <NavBar />
            <Routes>
                <Route exact path="/" element={
                    <Home />
                } />
                <Route exact path="/Albums" element={
                    <Albums />
                } />
                <Route exact path="/Playlists" element={
                    <Playlists />
                } />
                <Route exact path="/AddAlbum" element={
                    <AddAlbum {...props}/>
                } />
                {/* <Route exact path="/AddPlaylist" element={
                    <AddPlaylist />
                } /> */}
            </Routes>


            {/* <CarouselImg /> */}

        </>
    )
}

export default Main;