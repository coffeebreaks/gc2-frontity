import connect from "@frontity/connect"
import {styled, keyframes} from "frontity"

import React, { useState, useEffect } from 'react';


const LinkBlocks =({libraries, isVisible, title, text, blocks, arrow })=> {

    const Html = libraries.html2react.Component;

    const slide = keyframes`
    0% {
        transform: rotate3d(0, 1, 0, 45deg);
    }
    100% {
        opacity: 1;
        transform: rotate3d(0, 1, 0, 0deg) ;
     
    }
    `

    const slideRestore = keyframes`
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    `

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
        text-align: center;
        h2 {
            margin-top: 6rem;
            padding: 1rem;
            text-transform: uppercase;
            font-size: 3rem;
            margin-bottom: 0;
        }

        p {
            margin: 0 auto;
            
            max-width: 30ch;
        }

    `


    

    const MonoImage = styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(1) brightness(0.5) contrast(1);
        object-position: center;
        flex-basis: 100%;
        position: relative;
        transition: .5s;
        &:hover {
            transition: .5s;
            filter: grayscale(0) brightness(0.5) contrast(1);
        }
    `

    const ImageFlex = styled.div`
        display: flex;
        flex-flow: row;
        margin-top: 6rem;

    `

           const Text = styled.div`
           position: absolute;
           bottom: -100px;
           transition: .5s ;
           left: 10px;
           color: white;
          
           h3 {
               text-transform: uppercase;
               text-align: left;
               font-size: 2rem;
           }
           
           p {
               text-align: left;
               margin: 0px;
               color: white;
               line-height: 1.8;
           }
       `

    const ImageBlock = styled.div`
        opacity: 0;
        width: 100%;
        animation: ${isVisible?slide:slideRestore};
        animation-duration: ${isVisible?1:.3}s;
        animation-delay: ${isVisible?props => (props.delay + 0.5) * 0.1:0}s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        position: relative;

        &:hover ${Text} {
            transition: .5s ;
            bottom: 10px;
            h3 {
                color: #5196ff;
            }
        }
        `

    const Arrow = styled.img`
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 99;
    `

    return (
        <Wrapper>
            <h2>{title}</h2>
            <Html html={text}/>
            <ImageFlex>
                {blocks.map((x, i)=>
                <ImageBlock delay={i}>
                    <MonoImage src={x.image.url}/>
                    <Text>
                    <Html html={x.text}/>
                    </Text>
                   <Arrow src={arrow.url}/>
                </ImageBlock>
                )}
            </ImageFlex>
        </Wrapper>

    )

}

export default connect(LinkBlocks)