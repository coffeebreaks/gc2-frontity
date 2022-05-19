import connect from "@frontity/connect"
import {styled, keyframes} from "frontity"
import {useState} from "react"
import TrackVisibility from 'react-on-screen';
const Clients = ({libraries, introtext, clients, isVisible}) => {

    const Html = libraries.html2react.Component;

    const Wrapper = styled.div`
        display: flex ;
        flex-flow: column ;
        justify-content: center ;
    `

    const Intro = styled.div`
        margin: 0 auto;
        text-align: center;
        h2 {
            text-transform: uppercase ;
            font-size: 4rem;
            @media(max-width: 500px){
                font-size: 2rem ;
            }
        }

        p {
            max-width: 40ch;
            margin: 0 auto;
        }
    `

    const ClientWrapper = styled.div`
        display: flex; 
        flex-flow: row;
        flex-wrap: wrap ;
        justify-content: space-evenly ;
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 3rem;
        @media(max-width: 500px){
            align-items: center ;
        }
     
    `

    const Rotate = keyframes`
        0% {
            transform: rotate3d(1, 0, 0, 90deg) ;
        }

        100% {
            transform: rotate3d(1, 0, 0, 0deg) ;
        }
    `

    const AnimationWrapper = styled.div`
        transform: rotate3d(1, 0, 0, 90deg);
        transform-origin: top left;
        min-height: 150px; 
        animation-name: ${props => props.isVisible?Rotate:""} ;
        animation-duration: 1s ;
        animation-iteration-count: 1 ;
        animation-fill-mode: forwards;
        @media(max-width:500px){
           width: 100%;
           min-height: 50px; 
        }
        
    `

    const Content = styled.div`
        width: 33% ;
        margin: 1rem 0;
        @media(max-width:500px){
            width: 100% ;
            margin: 0 1rem;
            text-align: center ;
        }
        
        h3 {
            text-transform: uppercase ;
            font-size: 2rem ;
        }

    `

    const Cta = styled.button`
        background: transparent;
        margin: 0 auto;
        padding: 1rem;
        font-size: 14px ;
        font-weight: 100 ;
        font-family: 'Spartan';
        text-transform: uppercase ;
        display: flex ;
        align-items: center ;
        justify-content: center ;
        min-width: 300px ;
        box-shadow: none;
        border: 1px solid black;
        line-height: 1em;
        outline: none;
        padding-top: 18px;
        @media(max-width: 500px){
            margin-top: 2rem;
        }
    `



return (
    <Wrapper>
        <Intro>
            <Html html={introtext}/>
        </Intro>
        <ClientWrapper>
            {
                clients.map((x,i)=>
                    <Content key={i}>
                        <TrackVisibility partialVisibility >
                            <AnimationWrapper isVisible={isVisible}>
                                <Html html={x.content} />
                            </AnimationWrapper>
                        </TrackVisibility>
                    </Content>
                )
            }
        
        </ClientWrapper>
        <Cta>Portfolio</Cta>
    </Wrapper>
)

}

export default connect(Clients)