import connect from "@frontity/connect"
import {styled, keyframes} from "frontity"
import axios from "axios"
import {useState} from "react"


const Footer = ({libraries, state}) => {
    const Html2React = libraries.html2react.Component;
    const key = "acf-settings/"
    const content = state.source.data[key].acf.text
    const logos = state.source.data[key].acf.logos
    const menu = state.source.data[key].acf.menu
    const background = state.source.data[key].acf.background

    const Background = styled.div `
    display: flex;
    flex-flow: row;
    min-height: 300px;
    background: url('${props => props.img}');
    background-position: center;
    background-size: cover;
    width: 100%;
    `

    const Left = styled.div`
        background: #000000bd;
        color: white;
        dispaly: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 100%;
    `

    const Right = styled.div`
    background: #000000bd;
    padding: 2rem;
        color: white;
        dispaly: flex;
        justify-content: center;
        align-items: center;    
        width: 70%;
        height: 100%;
    `

    return (
   <Background img={background.url}>
    
        <Left>
            Form
        </Left>

        <Right>
            <Html2React html={content}/>
        </Right>

    </Background>
    )
    }

export default connect(Footer)    