import connect from "@frontity/connect"
import {styled, keyframes} from "frontity"

import React, { useState, useEffect } from 'react';


const LinkBlocks =({libraries, isVisible, title, text, blocks })=> {

    const Html = libraries.html2react.Component;

    const Image = styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;

    `
    const Wrapper = styled.div`
        width: 100%;
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
           
        }
        h2 {
            background: black;
            padding: 1rem;
            width: fit-content;
        }
    `



    
    return (
        <Wrapper>
            <h2>{title}</h2>
            <Html html={text}/>
            {blocks.map((x)=>
            <>
            <img src={x.image.url}/>
            <p> {x.text}</p>
            </>
            )}
        </Wrapper>

    )

}

export default connect(LinkBlocks)