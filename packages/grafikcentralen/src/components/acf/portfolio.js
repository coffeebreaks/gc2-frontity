import connect from "@frontity/connect"
import {styled} from "frontity"
import {useState} from "react"
import Link from "@frontity/components/link";
import TrackVisibility from 'react-on-screen';

const Portfolio = ({libraries, data, isVisible}) => {

const Wrapper = styled.div`
    display: flex ;
    margin: 1rem 0;
    width: 100% ;
&:nth-child(2){
    flex-direction: row-reverse ;
}
`

const SlideImage = styled.img`
    transition: .4s ;
`

const Left = styled.div`
   display: flex ;
   flex-flow: column ;
    justify-content: center ;
    align-items: center ;
    width: 50vw ;
    overflow: hidden ;
    p {
        max-width: 30ch;
    }

`

const Right = styled.div`

    width: 50vw ;
    `

    return (
        <Wrapper>
      
  
            <Left>
           
                <h2>{data.rubrik}</h2>
                <p>{data.text}</p>
                <button>
                    <a href={data.click_href}>
                        {data.click_title}
                    </a>
                </button>
                <div>
                {data.taggar.map((x)=>{
                    <div>{x.tagg}</div>
                })}
                </div>
            </Left>
            <Right> 
            
            <SlideImage  src={data.bild_image_data} />
            </Right>

      
        </Wrapper>
    )
}

export default connect(Portfolio)