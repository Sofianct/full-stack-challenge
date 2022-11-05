import React, { useState, useEffect } from 'react'
import axios from "axios";

export const Gifscontext = React.createContext({})

const GifsContext = ({ children }) => {
    
    const [userGifs, setUserGifs] = useState({})   
    const [trendingGif, setTrendingGif] = useState({})
    const [reactions, setReactions] = useState({})

    const gifUrl = import.meta.env.VITE_GIF_URL
    const gifApiKEY = import.meta.env.VITE_GIF_API_KEY
    const userGifsUrl = import.meta.env.VITE_BASE_URL
    const trendingGifsUrl = import.meta.env.VITE_GIF_TRENDING_URL
    const searchGifUrl = import.meta.env.VITE_GIF_SEARCH_URL

    const getUserGifs = async() => {
        await axios({
            method: 'get',
            url: userGifsUrl
        })
        .then((res) => {
            setUserGifs(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const getRandomGifs = async() => {
        const response = await fetch(gifUrl + gifApiKEY)
        const result = await response.json()
        setUserGifs(result.data.images.original.url);
    }

    const getTrendingGifs = async() => {
        await axios({
            method: 'get',
            url: trendingGifsUrl + gifApiKEY
        })
        .then((res) => {
            setTrendingGif(res.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const getReactions = async() => {
        await axios({
            method: 'get',
            url: searchGifUrl + gifApiKEY + '&q=reactions'
        })
        .then((res) => {
            setReactions(res.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    useEffect(() => {
        getUserGifs()
    }, []);

    useEffect(() => {
        getTrendingGifs()
    }, []);

    useEffect(() => {
        getReactions()
    }, []);
    
    return (
        <Gifscontext.Provider value={{ trendingGif, userGifs, reactions}}>
            {children}
        </Gifscontext.Provider>
  )
}

export default GifsContext