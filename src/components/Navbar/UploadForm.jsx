import React, {useState} from 'react'
import { Image, Navbar, Modal, Button, Text, Input, Row, Checkbox, Grid, Spacer } from "@nextui-org/react";
import TopMenu from './Navbar';
import axios from 'axios';

const UploadForm = () => {
    const [gifToUpload, setGifToUpload] = useState({title: '', url: '', tag:''})

    const submitHandler = (e) => {
        e.preventDefault();
    };
    const baseUrl = import.meta.env.VITE_BASE_URL

    const uploadGif = () => { 
        axios.post(baseUrl, gifToUpload)
        .then( (response) => {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error.message);
        });
    }
        

    return (
        <>
        <TopMenu />
            <div className='form-container'>
                <form className='form' onSubmit={submitHandler}>
                    <Text weight='semibold' color='whitesmoke' size="$3xl" css={{ textAlign: 'center'}}>Upload a gif</Text>
                    <Spacer y={1} />
                    <Input label="Title" placeholder="A dog with a wig"
                        onChange={(e) =>
                            setGifToUpload({ ...gifToUpload, title: e.target.value })
                        }
                        value={gifToUpload.title}
                        required
                    />
                    <Input type='url' css={{ marginTop: '1rem' }} label="Link" placeholder="https://media.giphy..."
                        onChange={(e) =>
                            setGifToUpload({ ...gifToUpload, url: e.target.value })
                        }
                        value={gifToUpload.url}
                        required
                    />
                    <Input css={{ marginTop: '1rem' }} label="Tags" placeholder="Kpop, Dogs, Money"
                        onChange={(e) =>
                            setGifToUpload({ ...gifToUpload, tag: e.target.value })
                        }
                        value={gifToUpload.tag}
                        required
                    />
                    <Button
                        color="success"
                        auto
                        flat
                        mt={2}
                        css={{ marginTop: '2rem' }}
                        onClick={uploadGif}
                    >
                        Upload!
                    </Button>
                </form>
            </div>
        </>
            
        
  )
}

export default UploadForm