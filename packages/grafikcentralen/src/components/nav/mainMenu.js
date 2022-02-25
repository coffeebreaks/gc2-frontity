import { connect } from "frontity"
import React from "react";
import Link from "@frontity/components/link";
import {styled} from "frontity"

const MainMenu =({state})=> {
    const acf = "acf-settings"
    const data = state.source.get(state.router.link);
    const options = state.source.get("acf-settings");
    const mainMenu = options.acf.huvudmeny;
    const logoWebp = options.acf.logo2.url + ".webp"
    
    const Logo = styled.picture`
    img {
        max-width: 160px;
        height: auto;
    }
    `
    const Menu = styled.div``

    const MainNav = styled.div`
    margin-left: auto;
    flex-flow: row;
    display: flex;
    a {
        color: black;
        text-decoration: none;
        padding: 1rem;
        font-size: 12px;
        font-weight: 600;
        &:hover {
            
           
            color: #5196ff;
            &::after {
                -webkit-transition: .1s ease-in;
                
                content: "";
                display: block;
                width: 100%;
                background: #5196ff;
                height: 2px;
            }
        }
        &::after {
            transition: .1s ease-in-out width;
            content: "";
            display: block;
            background: #5196ff;
            width: 0%;
            height: 2px;
           
        }
        
    }

    @media(max-width: 700px){
        display: none;
    }
    `
    
    const SubNav = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    width: 100%;
    a {
        text-decoration: none;
        color: black;
        font-size: 12px;
        &:hover {
            color: #5196ff;
        }
    }
    `
    const ContactNav = styled.div`
    
    margin-left: 50px;
    @media(max-width: 1100px){ margin-left: 0px;}
    @media(max-width: 900px){ display:none;}
    font-size: 12px;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    a{ 
        padding: 0 2rem;
        @media(max-width: 1100px){ padding: 0px;}
        display: flex;
        text-decoration: none;
        color: black;
        width: max-content;
        align-items:center;
        img {
            max-height:12px;
            width: auto;
            padding: 0 .5rem;
        }
    }
    
    `
    const Lower = styled.div`
    @media(max-width: 700px){ display:none;}
    border-top: 1px solid #D1D1D1;
    padding: 0.5rem;
    display:flex;
    flex-flow: row;
    @media(max-width: 1000px){padding:  10px 20px ;}
    padding-left: 100px;
    `
    const Upper = styled.div`
    padding: .5rem;
    display:flex;
    flex-flow: row;
    padding-left: 100px;
    align-items:center;
    @media(max-width: 1000px){
            padding-left: 20px;
        }
    `

    
    return (
    <Menu>
    
    <Upper>

    <Logo>
        <source srcSet={logoWebp} type="image/webp"/>
        <source srcSet={options.acf.logo2.url} width={options.acf.logo2.width} height={options.acf.logo2.height} type="image/jpeg"/> 
        <img src={options.acf.logo2.url} alt={options.acf.logo2.alt} width={options.acf.logo2.width} height={options.acf.logo2.height}/>
    </Logo>

    <MainNav>
       
        {options.acf.primarynav.map((x,i)=> 
        <Link key={i} link={x.link.url || "#"}>{x.text}</Link > 
        )}
    </MainNav>
    </Upper>
    <Lower>

    <SubNav>
    {options.acf.secondarynav.map((x,i)=> 
        <Link key={i} link={x.link.url || "#"}>{x.text}</Link > 
        )}
    </SubNav>

    <ContactNav>
    {options.acf.contactNav.map((x,i)=>
    
        <Link key={i} link={x.link.url || "#"}>
            <img src={x.icon.url}/>
            {x.text}
        </Link > 
    
    )}
    </ContactNav>

    </Lower>


    </Menu>
    )
}
    export default connect(MainMenu)