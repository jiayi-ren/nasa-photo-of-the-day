import React from "react";
import styled from "styled-components"

const Date = props =>{

    const StyledDate = styled.h3`

        font-family: 'Merriweather', serif;
        transition: all 0.3s ease-in-out;

        &:hover{
            color: gray;
        }
    `;

    if(props.newDate && props.newDate<=props.date){
        return (
            <StyledDate>{props.newDate}</StyledDate>
        )
    }
    if(props.newDate && props.newDate>props.date){
        return(
            <StyledDate>Oops, Try another date!</StyledDate>
        )
    }

    return (
        <StyledDate>Today: {props.date}</StyledDate>
    );
};

export default Date;