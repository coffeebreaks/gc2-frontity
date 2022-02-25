import { connect } from "frontity"
import Hero from "./acf/hero";
import Switch from "@frontity/components/switch"
import { useEffect, useState } from "react";

const Page =({state})=> {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
// inside component:



    const data = state.source.get(state.router.link);
    const blocks = state.source.page[data.id].acf.innehall
    console.log(blocks)
    return (

    <>
    
    {blocks.map((x,i)=> 
    <div key={i}>
        <p>{scrollPosition} </p>
        {x.acf_fc_layout === "hero"? <Hero text={x.text} animation={true} image={x.image}/>: ""}
    
    </div>

    )}
   
  
    </>
    )
}
    export default connect(Page)