import {styled, connect} from "frontity"


const PageIntro = ({api, libraries}) => {

    const Html2React = libraries.html2react.Component;
    
    const Wrapper = styled.div`
    background: white;
    color: black;
    height: ${api.full_height? "100vh": "100%" };
    display: flex;
    flex-direction: column;
    text-align: center;
   
    width: 100%;
   
    font-size: 25px;
    @media(max-width: 800px){
        font-size: 17px; 
     
    }
    justify-content: center;
    align-items: center;
    p {
        max-width: 50ch;
        @media(max-width: 800px){
            text-align:left;
            margin-top: 0px;
            padding: 1rem;
    }
    }
    h1 {
        @media(max-width: 800px){
        font-size: 19px; 
     
    }
    max-width: 20ch;
    }
    .accent {
        color: #5196ff;
    }
    `

    return (
        <Wrapper>
        <Html2React html={api.innehall}/>
        </Wrapper>
    )
}
export default connect(PageIntro)