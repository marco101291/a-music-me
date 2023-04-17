import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { _albums } from '../../../data/albums';




const AlbumCard = () => {

    const [albums, setAlbums] = useState(_albums);

   

    useEffect(()=>{
        setAlbums(_albums)
    }, [])



    return (
        <>
        <h1 style={{marginBottom: 20, textAlign: 'center'}}>Reviews</h1>
            <Row xs={2} md={4} lg={4} className="mx-auto" style={{justifyContent: 'center'}}>
                {albums.map((album, index) => (
                    <Card style={{ width: '18rem' }} key={index}>
                        <Card.Img variant="top" src={album.img} style={{width: '100%'}}/>
                        <Card.Body>
                            <Card.Title>{album.title}</Card.Title>
                            <Card.Text>
                                {album.author}
                            </Card.Text>
                            <Button variant="primary">See review</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </>
    )
}

export default AlbumCard;