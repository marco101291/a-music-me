import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { genres } from "../../data/genres";


const AddAlbum = (props) => {

    const [tagsArr, setTagsArr] = useState([]);

    const onHandleChange = (val) => {
        setTagsArr(val)
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const author = event.target.elements.author.value;
        const year = event.target.elements.year.value;
        const review = event.target.elements.review.value;
        const imageUrl = event.target.elements.imageUrl.value;
        const tags = tagsArr;

        const album = {
            id: Number(new Date()),
            title: title,
            author: author,
            year: year,
            review: review,
            imageUrl: imageUrl,
            tags: tags
        }

        if(album){
            props.addAlbumReview(album);
            props.history('/')
        }
        

    }

    return (
        <Form className="m-4" onSubmit={onHandleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Album Title</Form.Label>
                <Form.Control type="text" placeholder="Title" name="title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Author" name="author"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" placeholder="Year" name="year" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Review</Form.Label>
                <Form.Control type="text" placeholder="Please insert at least 100 characters" name="review" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image url</Form.Label>
                <Form.Control type="text" placeholder="Image url" name="imageUrl" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Tags</Form.Label>
                <br />
                <ToggleButtonGroup type="checkbox" value={tagsArr} onChange={onHandleChange} className="d-flex flex mb-3">
                    {
                        genres.map((data, index) => (
                            <ToggleButton id={index} value={data} className="m-2 p-2 rounded-4">
                                {data}
                            </ToggleButton>
                        )
                        )
                    }
                </ToggleButtonGroup>
                <br />
                <Form.Text className="text-muted">
                    Please select the genres associated to this album
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
    )

}

export default AddAlbum;