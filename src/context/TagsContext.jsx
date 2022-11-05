import React, { useState, useEffect } from 'react'
import axios from "axios";

export const Tagscontext = React.createContext({})

const TagsContext = ({ children }) => {
    const [kpopTag, setKpopTag ] = useState({})
    const [dogsTag, setDogsTag ] = useState({})
    const [moneyTag, setMoneyTag] = useState({})
    
    const gifApiKEY = import.meta.env.VITE_GIF_API_KEY
    const searchGifUrl = import.meta.env.VITE_GIF_SEARCH_URL

    const getKpop = async() => {
        await axios({
            method: 'get',
            url: searchGifUrl + gifApiKEY + '&q=kpop'
        })
        .then((res) => {
            setKpopTag(res.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const getDogs = async() => {
        await axios({
            method: 'get',
            url: searchGifUrl + gifApiKEY + '&q=dogs'
        })
        .then((res) => {
            setDogsTag(res.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const getMoney = async() => {
        await axios({
            method: 'get',
            url: searchGifUrl + gifApiKEY + '&q=money'
        })
        .then((res) => {
            setMoneyTag(res.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getKpop()
    }, []);

    useEffect(() => {
        getDogs()
    }, []);

    useEffect(() => {
        getMoney()
    }, []);

    return (
        <Tagscontext.Provider value={{ kpopTag, dogsTag, moneyTag }}>
            {children}
        </Tagscontext.Provider>
    )
}

export default TagsContext