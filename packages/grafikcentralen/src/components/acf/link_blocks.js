import connect from "@frontity/connect"
import {styled, keyframes} from "frontity"
import TrackVisibility from 'react-on-screen';

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
        @media(max-width:600px){
            padding: 1rem;
        }
        overflow: hidden;
        display:block;
        position: relative;
        text-align: center;
        h2 {
            margin-top: 8rem;
            padding: 1rem;
            text-transform: uppercase;
            font-size: 3rem;
            margin-bottom: 0;
            @media(max-width: 600px){
                margin-top: 1rem;
                font-size: 2rem ;
            }
        }

        p {
            max-width: 30ch;
            @media(max-width: 600px){
                font-size: 12px ;
                margin-bottom: 1rem ;
            }
        }

    `

    const MonoImage = styled.img`
        @media(max-width: 500px){
            height: fit-content;
        }
        width: 100%;
        height: 450px;
        object-fit: cover;
        filter: grayscale(1) brightness(0.5) contrast(1);
        object-position: center;
        flex-basis: 100%;
        position: relative;
        transition: .5s;
        @media(max-width: 500px){
            filter: grayscale(0) brightness(0.5) contrast(1);
        }
        &:hover {
            transition: .5s;
            filter: grayscale(0) brightness(0.5) contrast(1);
        }
    `

    const ImageFlex = styled.div`
        display: flex;
        position: relative;
        flex-flow: row;
        margin-top: 6rem;
        justify-content: space-evenly;
        @media(max-width: 600px){
            flex-flow: column;
            margin-top: 0px;
        }
    `

           const Text = styled.div`
           position: absolute;
           bottom: -100px;
           transition: .5s ;
           left: 10px;
           color: white;
           @media(max-width: 600px){
            bottom: 10px;
            
           }
          
           h3 {
               text-transform: uppercase;
               text-align: left;
               font-size: 2rem;
                @media(max-width: 600px){
                    font-size: 20px;
                    text-align: center;
                }
            }
           
           p {
               opacity: 0;
               text-align: left;
               margin: 0px;
               color: white;
               line-height: 1.8;
               @media(max-width: 600px){
                   opacity: 1;
                   font-size: 12px;
               }

           }
       `

    const ImageBlock = styled.div`
        opacity: 0;
        width: 100%;
        height:429px;
        @media(max-width: 500px){
            height: fit-content;
            
        }
        animation: ${props => props.isVisible?slide:slideRestore};
        animation-duration: ${isVisible?.5:.5}s;
        animation-delay: ${isVisible?props => (props.delay ) * 0.4:0}s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        position: relative;

        &:hover ${Text} {
            transition: .5s ;
            bottom: 10px;
            h3 {
                color: #5196ff;
            }
            p {
                opacity: 1;
            }
        }

        
    `

    const Arrow = styled.img`
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 99;
        @media(max-width: 600px){
           display: none ;
        }
    `

    const SingleBlock = styled(TrackVisibility)`
        min-height: 310px;
        min-width: 220px;
        background: gray;
        overflow: hidden;
        @media(max-width: 500px){
            min-height: initial ;
            background: white;
        }
    `

    const DotsFade = keyframes`
        0% {
            opacity: 0;
        }

        40% {
            opacity: .5;
        }

        60% {
            opacity: 0;
        }
    `

    const Dot = styled.div`
        height: 40px;
        width: 40px;
        background: white;
        border-radius: 50%;
        position: relative;
        opacity: 0;
        margin: 1rem;
        top: 50%;
        animation: ${DotsFade};
        animation-delay: ${props => (props.delay/3)}s;
        animation-duration:  ${props => (props.speed/3)}s;
        animation-iteration-count: infinite;
        animation-fill-mode: forward;
    `

    const DotFlex = styled.div`
    position: absolute;
    @media(min-width: 600px){
        display: none;
    }
    width: 100%;
    top: 100px;
    margin: 0 auto;
        display: flex;
        flex-flow: row;
        width: 100%;
        justify-content: center;
        align-items: center;
   
        `
    
    const LoadingDots = ()=> {
        return (
            <DotFlex>
                <Dot speed="3" delay="1"/>
                <Dot speed="3" delay="2"/>
                <Dot speed="3" delay="3"/>
            </DotFlex>
        )
    }

    const Introtext = styled.div`
        p {
        text-align: center;

        margin: 0 auto;
        }
        `
    

    return (
        <Wrapper>
            <h2>{title}</h2>
            <Introtext>
            <Html html={text}/>
            </Introtext>
            <ImageFlex>
                {blocks.map((x, i)=>
                <div key={i} style={{position: "relative", marginBottom: "1rem"}} >
                <LoadingDots/>
                <SingleBlock partialVisibility>
                <ImageBlock delay={i} isVisible={isVisible}>
                    <MonoImage src={x.image.url} alt={x.image.alt}/>
                    <Text>
                        <Html html={x.text}/>
                    </Text>
                   <Arrow src={arrow.url} alt={arrow.alt}/>
                </ImageBlock>
                </SingleBlock>
                </div>
                )}
            </ImageFlex>
        </Wrapper>

    )

}

export default connect(LinkBlocks)