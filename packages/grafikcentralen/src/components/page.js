import { connect } from "frontity"
import Hero from "./acf/hero";
import Switch from "@frontity/components/switch"
import TrackVisibility from 'react-on-screen';
import { useEffect, useState } from "react";


const Block = ({ isVisible , text, image }) => {
  const style = {
      background: isVisible  ? 'red' : 'blue',
      height: "500px"
  };
  return (
    <Hero text={text} image={image} isVisible ={isVisible }/>
  );
}

const Page =({state})=> {
  const data = state.source.get(state.router.link);
  const blocks = state.source.page[data.id].acf.innehall

    return (
<>
     
    

     {blocks.map((x,i)=> 
    <div key={i}>
    
        {x.acf_fc_layout === "hero"?  
        <TrackVisibility offset={350}>
          <Block text={x.text} animation={true} image={x.image}/>
        </TrackVisibility>
  : ""}
    
    </div>

    )}
   
</>
    )
}
    export default connect(Page)