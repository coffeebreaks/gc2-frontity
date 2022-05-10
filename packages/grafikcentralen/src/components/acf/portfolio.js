import connect from "@frontity/connect"
import {styled, keyframes} from "frontity"
import {useState} from "react"
import Link from "@frontity/components/link";

const Portfolio = ({libraries, data}) => {
    return (
        <>
        <br/>
        {console.log("---",data)}
      
        {data.rubrik}
        {data.text}
        {data.bild_image_data}
        {data.click_title}
        {data.click_href}
        {data.taggar.map((x)=>{
            {x.tagg}
        })}

      
        </>
    )
}

export default connect(Portfolio)