import { connect } from "frontity"
import Hero from "./acf/hero";
import Switch from "@frontity/components/switch"
import TrackVisibility from 'react-on-screen';
import { useEffect, useState } from "react";
import LinkBlocks from "./acf/link_blocks";
import Front_form from "./acf/front_form";
import Om_oss from "./acf/om_oss";
import Clients from "./acf/clients";
import pageIntro from "./acf/pageIntro";
import PageIntro from "./acf/pageIntro";
import InfoBox from "./acf/infoBox";
import Styled_list from "./acf/styled_list";
import StaticBanner from "./acf/static_banner";
import BlogFront from "./acf/blog_front"
import Footer from "./acf/footer"




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

  let block
  return (
    <>
     {blocks.map((x,i)=> 
    <div key={i}>
      
   
      <Switch>
        
        {block = x.acf_fc_layout}
        
        <TrackVisibility when={block === "hero"} offset={350}>
          <Block text={x.text} animation={true} image={x.image}/>
        </TrackVisibility>

        <LinkBlocks when={block === "link_blocks"} title={x.title} text={x.text} blocks={x.blocks} arrow={x.arrow} />
        <Front_form when={block === "front_form"}text={x.text}/>
        <Om_oss when={block === "om_oss"} rubrik={x.rubrik} divider={x.divider} logo={x.logo} introtext={x.introtext} profilbild={x.profilbild} argument={x.argument}/>
        <Clients when={block === "clients"} introtext={x.introtext} clients={x.clients}/>
        <PageIntro when={block === "page_intro"} api={x} />
        <InfoBox when={block === "infobox"} api={x} />
        <Styled_list when={block === "styled_list"} api={x} />
        <StaticBanner when={block === "static_banner"} api={state.source.data} data={x} />
        <Front_form when={block === "kontaktformular"} text={x.text}/>
        <BlogFront when={block === "blog_front"} header={x.header} startpost={x.startpost} />

      </Switch>
      
    
    </div>

    )}
   
  <Footer />
</>
    )
}
    export default connect(Page)
      
      
