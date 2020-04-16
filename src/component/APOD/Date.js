import React from "react";

const Date = props =>{

    if(props.newDate && props.newDate<props.date){
        console.log(props.newDate>props.date)
        return (
            <h3>On {props.newDate}</h3>
        )
    }
    if(props.newDate && props.newDate>props.date){
        return(
            <h3>Oops, Try another date!</h3>
        )
    }

    return (
        <h3>Today: {props.date}</h3>
    );
};

export default Date;