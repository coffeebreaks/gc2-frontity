import connect from "@frontity/connect"
import {styled, keyframes} from "frontity"

import React, { useState, useEffect } from 'react';


const Hero =({image, text, libraries, animation, isVisible })=> {

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
        @media(max-width: 500px){
            height: 285px;
        }
        overflow: hidden;
        display:block;
        position: relative;
    
    
    `

    const slide = keyframes`
    0% {
        opacity: 0;
        left: -500px
    }
    100% {
        opacity: 1;
        left: 0px;
    }
    `

    const Text = styled.div`
    
    opacity: 0;
        position: absolute;
        top: 170px;
        @media(max-width: 500px){
            top: 30px;
        }
        animation: ${isVisible?slide:""};
        animation-duration: 2s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        color: white;
        h1 {
            background: black;
            padding: 1rem;
            font-size: 3rem;
            width: fit-content;
            @media(max-width: 500px){
                font-size: 15px;
                max-width: 280px;
            }
           
        }
        h2 {
            background: black;
            padding: 1rem;
            width: fit-content;
            @media(max-width: 500px){
                font-size: 12px;
                max-width: 150px;
            }
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