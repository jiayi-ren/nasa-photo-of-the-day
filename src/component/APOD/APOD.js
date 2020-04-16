import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import api_key from "../APIkey.js";
import SearchDate from "./SearchDate.js";
import Date from "./Date.js";
import Card from "./Card.js";



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

    const StyledAPOD = styled.div`
        width: 60%;
        margin: 20px auto;
        padding: 30px;
        background: rgba(255,255,255,0.85);
        border-radius: 10px;

        @media screen and (max-width: 1200px){
            width: 70%;
        }

        h2{
            font-family: 'Audiowide', cursive;
            font-size: 2.5rem;
        }

        h3{
            font-family: 'Merriweather', serif;
            font-size: 1.5rem;
            margin-top: 20px;
            transition: all 1s ease-in-out;

            &:hover{
                // font-size:1.8rem;
                color: gray;
            }

            &:before{
                content:🛰️;
            }

            &:after{
                content:🛰️;
            }
        }

    `;

    return (
        <StyledAPOD>
            <h2>Astronomy Picture of the Day</h2>
            <Date className="apodDate" date={apodData.date} newDate={date}/>
            <SearchDate className="apodSearch" setDate={setDate}/>
            <h3 className="apodTitle">{apodData.title}</h3>
            <Card className="apodCard" apodData={apodData}/>
        </StyledAPOD>
    );
};

export default APOD;