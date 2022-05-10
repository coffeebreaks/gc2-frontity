import connect from "@frontity/connect"
import {styled, keyframes} from "frontity"
import axios from "axios"
import {useState} from "react"


const Footer = ({libraries, state}) => {

    const [formResp, setFormResp] = useState()
    const [display, showForm] = useState(false)

    const Html2React = libraries.html2react.Component;
    const key = "acf-settings/"
    const content = state.source.data[key].acf.text
    const logos = state.source.data[key].acf.logos
    const pageLogo = state.source.data[key].acf.logo
    const subFooter = state.source.data[key].acf.subfooter
    const menu = state.source.data[key].acf.menu
    const background = state.source.data[key].acf.background


    const Wrapper = styled.footer`
    background-color: black ;
    color: white;
    min-height: 400px ;
    position: relative;
    overflow: hidden ;
    margin-top: 2rem ;
    `

    const drop = keyframes`
    0% {
        height: 0px ;
    }

    70%{
        opacity: 1;
    }

    100% {
        opacity: 0 ;
        height: 500px;
   
    }
    `

    const Stripes = styled.div`
        position: absolute ;
        width: 50px ;
        display: flex ;
        justify-content: space-around ;
        margin-left: 100px ;
        height: 0px ;
        @media(max-width: 1000px) {
            width: 26px;
     transform: rotate(270deg); 
    margin-left: -2px;
    margin-top: 31px;
    margin-left: -13px;

        }
    `

    const CenterContent = styled.div`
         margin: 0 auto;
        text-align: left;
        max-width: 58ch;
        font-size: 1rem;
        line-height: 1.4;
        /* font-weight: 100; */
        color: #9f9f9f;
        @media(max-width: 1000px) {
            width: 80% ;
            height: auto;
        }
    
    `

    const Stripe = styled.div`
        animation-name: ${drop} ;
        animation-duration: ${props => props.speed} ;
        animation-delay: ${props => props.delay};
        animation-iteration-count: infinite ;
        background: linear-gradient(0deg, #000000 23.44%, ${props => props.color} 94.04%);
        margin: 0 2px  ;
        width: 8px ;
        /* height: 400px ; */
      
     
    `

    const PageLogo = styled.img`
        height: 49px;
        display: inherit;
        margin: 4rem auto;
        @media(max-width: 1000px) {
            width: 80% ;
            height: auto;
        }
    `

    const Subheader = styled.div`
        max-width: 1300px ;
        margin: 0 auto ;
        margin-top: 3rem ;
        border-top: 1px solid white;
        display: flex ;
        justify-content: space-between ;
        font-size: 12px ;
        align-items: center ;
        @media(max-width: 1000px) {
            flex-direction: column ;
        }
        a {
            color: inherit;
            text-decoration: none ;
        }
    `

    return (
    <Wrapper>
  
        <Stripes>
            <Stripe color="#07D91C" speed="4s" delay="1s"/>
            <Stripe color="#FFD600" speed="5s" delay="0s"/>
            <Stripe color="#E30000" speed="3s" delay="2s"/>
            <Stripe color="#37C8F5" speed="3s" delay="1.3s"/>
        </Stripes>

        <CenterContent>
            <PageLogo src={pageLogo.url}/>
           <Html2React html={content}/>
        </CenterContent>
       
        <Subheader>
            {subFooter.map( (x)=> <Html2React html={x.content}/> )}
        </Subheader>


    </Wrapper>
    )
    }

export default connect(Footer)    