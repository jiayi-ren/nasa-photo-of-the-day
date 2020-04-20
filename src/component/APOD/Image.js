import React from "react"
import styled from "styled-components"

const Image = props =>{

    const StyledImg = styled.img`
        width: 100%;
    `;

    return (
        <StyledImg src={props.image}></StyledImg>
    );
};

export default Image;