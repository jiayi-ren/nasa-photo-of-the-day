import React, {useState, useEffect} from "react";
import axios from "axios";
import api_key from "../APIkey.js";
import Date from "./Date.js";
import Image from "./Image.js";
import Explanation from "./Explanation.js";
import Copyright from "./Copyright.js";
import SearchDate from "./SearchDate.js";

const APOD = props =>{

    const apod_url = "http://api.nasa.gov/planetary/apod"

    /////////////////// Single Component////////////////
    // const [date, setDate] = useState("")
    // const [imgURL, setImgURL] = useState("")
    // const [copyright, setCopyright] = useState('')
    // const [explanation, setExplanation] = useState("")

    // useEffect(()=>{
    //     axios.get(`${apod_url}?api_key=${api_key}`)
    //         .then(res =>{
    //             setDate(res.data.date)
    //             setExplanation(res.data.explanation)
    //             setImgURL(res.data.hdurl)
    //             setCopyright(res.data.copyright)
    //         })
    //         .catch(err =>{
    //             console.log(err)
    //         })
    // }, [])

    // return (
    //     <div>
    //         <h2>Astronomy Picture of the Day</h2>
    //         <h3>{date}</h3>
    //         <img src={imgURL} ></img>
    //         <p>Copyright: {copyright}</p>
    //         <p>{explanation}</p>
    //     </div>
    // );
    //////////////////////////////////////////////////
    const [apodData, setApodData] = useState("")
    const [date, setDate] = useState("")

    const getAPODbyDate = () =>{
        return function(){
            const newDate = date
            return newDate
        }
    }

    useEffect( ()=>{
        axios.get(`${apod_url}?api_key=${api_key}`)
            .then(res =>{
                setApodData(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    },[])

    useEffect(() =>{
        axios.get(`${apod_url}?api_key=${api_key}&date=${date}`)
            .then(res =>{
                setApodData(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    },[date])

    return (
        <div>
            <h2>Astronomy Picture of the Day</h2>
            <SearchDate setDate={setDate}/>
            <Date date={apodData.date} newDate={date}/>
            <h3>{apodData.title}</h3>
            <Image image={apodData.url}/>
            <Copyright copyright={apodData.copyright}/>
            <Explanation explanation={apodData.explanation}/>
        </div>
    );
};

export default APOD;