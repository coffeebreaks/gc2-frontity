import connect from "@frontity/connect"
import {styled, keyframes} from "frontity"

import React, { useState, useEffect } from 'react';


const Hero =({image, text, libraries, animation})=> {

    

  
    
    const Html = libraries.html2react.Component;

    const Image = styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;

    `
    const Wrapper = styled.div`
        width: 100%;
        height: 600px;
        overflow: hidden;
        display:block;
        position: relative;
    
    }
    `

    const slide = keyframes`
    0% {
        left: 500px
    }
    100% {
        left: 0px;
    }
    `

    const Text = styled.div`
        position: absolute;
        top: 170px;
        animation: ${animation?slide:""};
        animation-duration: 4s;
        color: white;
        h1 {
            background: black;
            padding: 1rem;
            font-size: 3rem;
            width: fit-content;
           
        }
        h2 {
            background: black;
            padding: 1rem;
            width: fit-content;
        }
    `



    
    return (
        <Wrapper>
        <Image src={image.url} widht={image.widht} height={image.height} alt={image.alt}/>
        <Text>
        <Html html={text} />
        </Text>
        </Wrapper>

    )

}

export default connect(Hero)