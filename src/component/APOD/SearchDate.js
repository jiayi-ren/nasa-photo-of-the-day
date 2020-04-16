import React, {useState} from "react"

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

    return (
        <div>
            <form onSubmit={submitSearch}>Select a date<br></br>
            <input 
                type="date"
                onChange={changeHandler}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
};

export default SearchDate;