import React, {useEffect, useState} from "react";
import {Container, PostForm} from '../components'
import service from "../appwrite/conf";
import { useNavigate, useParams } from "react-router-dom";


function EditPost () {
    const [post, setPost] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            service.getPost([]).then((post) => {
                setPost(post)
            })
        }
        else{
            navigate('/')
        }
    }, [slug, navigate])


    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null

}

export default EditPost