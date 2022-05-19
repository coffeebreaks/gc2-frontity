import {styled, connect} from "frontity"

const StyledList = ({api, libraries}) => {

    const Html2React = libraries.html2react.Component;
    const list = api.list_item
    

    const ListWrapper = styled.div`
    background: white;
    width: 100%;
    color: black;
  
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1166px;
    align-items: end;
    @media(min-width: 1500px){
        max-width: 1683px;
    }
    margin: 0 auto;

   
    `

    const Icon = styled.img`
    width: 100px;
    height: auto;
 
    `

    const TextWrapper = styled.div`
    // border: 1px solid black;
    margin: 1rem;
    padding: 1rem;
    width: 40%;
    
    @media(max-width: 800px){
        width: 100%;
        text-align: center;
        margin: 0px;
    }
   

   

    `

    return (
        <ListWrapper>
       {list.map((x)=>
       <TextWrapper>
       <Icon src={x.icon.url} alt={x.icon.alt}/>
       <Html2React html={x.text}/>
       </TextWrapper>
       )}
        </ListWrapper>
    )
}
export default connect(StyledList)