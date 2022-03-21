import { connect } from "frontity"
import Hero from "./acf/hero";
import Switch from "@frontity/components/switch"
import TrackVisibility from 'react-on-screen';
import { useEffect, useState } from "react";
import LinkBlocks from "./acf/link_blocks";
import Front_form from "./acf/front_form";
import Om_oss from "./acf/om_oss";


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
      
    {/* {x.acf_fc_layout} */}
        {x.acf_fc_layout === "hero"
        ?  
          <TrackVisibility offset={350}>
            <Block text={x.text} animation={true} image={x.image}/>
          </TrackVisibility>
        :
        x.acf_fc_layout === "link_blocks"
        ?
        <LinkBlocks title={x.title} text={x.text} blocks={x.blocks} arrow={x.arrow} />
        :
        x.acf_fc_layout === "front_form"
        ?
          <Front_form text={x.text}/>
        :
        x.acf_fc_layout === "om_oss"
        ? 
        <>
        
        <Om_oss rubrik={x.rubrik} divider={x.divider} logo={x.logo} introtext={x.introtext} profilbild={x.profilbild} argument={x.argument}/>
        </>        

        : ""}

    
    </div>

    )}
   
</>
    )
}
    export default connect(Page)