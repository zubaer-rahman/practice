import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const FetchApi = () => {
    const [posts, setPosts] =  useState([]);
    const api = 'https://jsonplaceholder.typicode.com/posts/';

    const fetchApiPost = async (url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            setPosts(data);
        } catch(err){
            console.log(err);
        }
    }

    useEffect(()=> {
        fetchApiPost(api);
    }, [])
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "650px"
        }}>
            {
                posts.map((item, i)=> <h4>{item.title}</h4>)
            }
        </div>
    );
};

export default FetchApi;