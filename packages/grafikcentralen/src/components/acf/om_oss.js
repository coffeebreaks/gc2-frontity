import connect from "@frontity/connect"
import {styled, keyframes} from "frontity"

import React, { useState, useEffect } from 'react';

const Om_oss = ({libraries, rubrik, logo, introtext, divider, profilbild, argument }) => {

    const Html = libraries.html2react.Component;

    const Wrapper = styled.div`
        display: flex;
        flex-flow: column;
        border-top: 9px solid #2a2a2a;
        background-color: #1a1b1c;
        color: #ffffff;
        overflow-x: clip;
        @media(max-width: 500px){
           padding: 1rem;
           align-items:center;
        }
    `

    const Divider = styled.img`
        width: 100%;
        margin-bottom: -8px;
        @media(max-width: 500px){
            display: none;
        }

    `

    const Profilbild = styled.img`
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        @media(max-width: 600px){
            width: 60px ;
            height: 60px ;
        }
    `

    const Argument = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 4rem;
        @media(max-width: 500px){
            flex-direction: column;
            justify-content: center;
        }

        p {
            max-width: 25ch;
        }
    `

    const Row = styled.div`
        h2 {
            text-align: center ;
            text-transform: uppercase ;
        }
        p {
            max-width: 729px;
            margin: 0 auto;
            line-height: 1.5;
        }
        margin: 1rem 0;

        `
        const Text = styled.div`
            display: flex;
            flex-flow: column;
         
        `

        const Rubrik = styled.p`
            margin-bottom:1rem;
            text-align:center ;
        `

        const Logo = styled.img`
            max-width: 400px;
            margin: 0 auto;
            height: auto;

            @media(max-width: 500px){
                width: 230px;
                margin: 0 auto ;
            }
        `

        const ProfileBox = styled.div`
            display: flex;
            margin: 0 auto;
            margin-top: 1rem;
            @media(max-width: 500px){
                margin-left: initial;
                flex-flow: row;
                margin: initial;
            }
            flex-flow: column;
            
            align-items: center;
            justify-content: center;
            p {
                max-width: 15ch;
                text-align: center ;
               
            }
        `
  

 



        const InnerWrapper = styled.div`
            max-width: 1300px;
            display: flex ;
            flex-flow: column ;
            justify-content:center ;
            width: 100% ;
            margin: 0 auto;
            padding: 2rem;
            @media(max-width: 500px){
                display: flex;
                padding: 0rem;
                flex-flow: column;
                justify-content: center;
                align-items: center;
            }
        `


    return (
        <>
        {/* <Divider src={divider.url} height={divider.height} width={divider.width} alt={divider.alt}/> */}
        <Wrapper>
            <InnerWrapper>
        <Rubrik>    
        {rubrik}
        </Rubrik>
        <Logo src={logo.url} alt={logo.alt} width={logo.width} height={logo.height}/>
        
        <Row>
    
            <Html html={introtext}/>
            
        </Row>
            <ProfileBox>
            <Profilbild src={profilbild.url} alt={profilbild.alt} width={profilbild.width} height={profilbild.height}/>
            <p> Stefan Jakobsson Grundare Grafikcentralen</p>
            </ProfileBox>

        <Argument>
        {argument.map((x,i)=> 
        <Text>
            <Html key={i} html={x.text}/>
        </Text>
        )}
        </Argument>
        </InnerWrapper>
        </Wrapper>
        </>
    )
}

export default connect(Om_oss)