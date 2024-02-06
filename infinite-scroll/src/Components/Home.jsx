import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

const Home = () => {
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);


    // useEffect(() => {
    //     const getCardData = async() => {
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
    //         const data = await res.json();
    //         console.log(data)
    //         setPost((prev) => [...prev, data])
    //     }
    //     getCardData()
    // },[page])

    const handleInfinityScroll = async() => {
        console.log("scrollHeight" + document.documentElement.scrollHeight)
        try{
            if(
            window.innerHeight + document.documentElement.scrollTop + 1 >= 
            document.documentElement.scrollHeight
            ) {
                setLoading(true);
                setPage((prev) => prev+1)
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`).then((response) => {
          setPost(response.data);
          setLoading(false);
        // console.log(response.data)
        });
      }, [page]);

      useEffect(() => {
        window.addEventListener("scroll", handleInfinityScroll);
        return () => window.removeEventListener("scroll", handleInfinityScroll);
      },[])
    
  return (
    <div>
        <Card movieInfo={post}/>
        {loading && <Loading/>}
    </div>
  )
}

export default Home