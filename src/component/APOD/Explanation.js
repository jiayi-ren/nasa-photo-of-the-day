import React from "react"
import styled from "styled-components"

const Explanation = props =>{

    const StyledExplanation = styled.p`
        
    `;

    return (
        <StyledExplanation>{props.explanation}</StyledExplanation>
    );
};

export default Explanation;