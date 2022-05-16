import connect from "@frontity/connect"
import {styled} from "frontity"
import {useState} from "react"
import Link from "@frontity/components/link";


const Portfolio = ({libraries, data}) => {

const Wrapper = styled.div`

    display: grid ;
    grid-template-columns: 1fr 1fr ;
    width: 100% ;
 
`

const SlideImage = styled.div`
    background: url('${props => props.img}');
    height: 100vh  ;
    width: 50vw ;
    min-height: 100vh ;
    background-repeat: no-repeat ;
    background-size: cover ;
    background-attachment: fixed ;
    background-position:  center ;
    
    @media(max-width: 1000px){
        background-position: calc(100% + 20vw ) ;
    }
    @media(max-width: 1500px){
        background-position: calc(100% + 3vw ) ;
    }
    @media(max-width: 1265px){
        background-position: calc(100% + 8vw ) ;
    }
    @media(max-width: 1160px){
        background-position: calc(100% + 11vw ) ;
    }
    

`

const Left = styled.div`
   display: flex ;
    justify-content: center ;
    align-items: center ;
   height: 100vh  ;
    width: 50vw ;
    overflow: hidden ;
    min-height: 100vh ;`

const Right = styled.div`
 
    height: 100vh  ;
    width: 50vw ;
    min-height: 100vh ;`

    return (
        <Wrapper>
        
      
        <Left>
            {data.rubrik}
            {data.text}
        
            {data.click_title}
            {data.click_href}
            {data.taggar.map((x)=>{
                {x.tagg}
            })}
        </Left>
        <Right> 
        <SlideImage img={data.bild_image_data} />
        </Right>

      
        </Wrapper>
    )
}

export default connect(Portfolio)