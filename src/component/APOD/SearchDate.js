import React, {useState} from "react"
import styled from "styled-components"

const SearchDate = ({setDate}) =>{

    const [submitDate, setSubmitDate] = useState("")

    const changeHandler = event => {
        const EnteredDate = event.target.value
        setSubmitDate(EnteredDate)
    }

    const submitSearch = event => {
        event.preventDefault()
        setDate(submitDate)
    }

    if(!setDate){
        return null
    }

    const StyledSearch = styled.div`
        margin: auto 200px;
        padding: 10px 0; 
        border:  5px dashed grey;
        border-radius: 20px;
    `;

    return (
        <StyledSearch>
            <form onSubmit={submitSearch}>Have more fun, pick another date<br></br>
            <input 
                type="date"
                onChange={changeHandler}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </StyledSearch>
    )
};

export default SearchDate;