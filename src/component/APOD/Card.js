import React from "react"
import styled from "styled-components"
import Image from "./Image.js";
import Explanation from "./Explanation.js";
import Copyright from "./Copyright.js";

const Card = props =>{

    const StyledCard = styled.div`
        font-family: 'Merriweather', serif;
    `;
    
    return (
        <StyledCard>
            <Image class="apodImage"image={props.apodData.hdurl}/>
            <Copyright class="apodCopyright" copyright={props.apodData.copyright}/>
            <Explanation class="apodExp" explanation={props.apodData.explanation}/>
        </StyledCard>

    );
};

export default Card;