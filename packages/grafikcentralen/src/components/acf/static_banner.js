import { connect, styled } from "frontity";

const StaticBanner = ({api, libraries, data}) => {


    const Html2React = libraries.html2react.Component;
    const key = "acf-settings/"
    const content = api[key].acf.gc_banner
    const logo = api[key].acf.logo2
    const flexBreak = "900px"
  

    const StaticBannerBlock = styled.div`
        display: flex;
        justify-content: center;
        width: fit-content;
        flex-direction: column;
        @media(max-width: 800px){
            text-align: center;

        }
        h2 {
            margin: 0;
        }
        p {
            max-width: 30ch;
            font-size: 16px;
            @media(max-width: 1730px){
                font-size: 15px;
            }
    }
    `
    const BannerWrapper = styled.div`
        display: flex;
        justify-content: center;
        padding: 50px 0px;
        flex-direction: column;
        max-width: 100%;
        align-items:center;
        margin: 0 auto;
        background-color: rgb(237 237 237);
        color: black;
    
        @media(max-width: ${flexBreak}){
            flex-direction: column;
        }
    
    
    `
    const Outer = styled.div`
        display: flex;
        flex-direction: row;
        flex-basis: 33%;
        margin: 24px;
        @media(max-width: 800px){
            flex-basis: 100%;
            flex-direction: column;
            justify-content: center;
            align-items:center;
            margin: 0px;
        }
  
    `
    const Icon = styled.img`
        width: auto;
        height: 100px;
        padding: 1rem;
        @media(max-width: 800px){
            width: 140px;
            height: auto;
            padding: 0px;
        }
    `
    const ContentWrapper = styled.div`
        display:flex; 
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        @media(max-width: 800px){
            flex-basis: 100%;
            flex-direction: column;
            justify-content: center;
            align-items:center;
          
        }
    `
    const Logo = styled.img`
        width: 400px;
        @media(max-width: 800px){
            width: 80%;
            height: auto;
        }
    `
    const Heading = styled.h2`
        font-size: 19px;
        font-weight: 100;
        @media(max-width: 800px){
          text-align:center;
          max-width: 20ch;
        }
    `
 
    return (
        
        <BannerWrapper>
        <Logo src={logo.url} alt={logo.alt}/>
           
            <Heading>{data.text}</Heading>
            <ContentWrapper>
        {content.map((x)=>
        <Outer>       
        <Icon src={x.icon.url} alt={x.icon.alt}/>
        <StaticBannerBlock> 
        <Html2React html={x.text}/>
        </StaticBannerBlock>
        </Outer>

        )}
        </ContentWrapper>
  
         </BannerWrapper>
    )
}
export default connect(StaticBanner);   