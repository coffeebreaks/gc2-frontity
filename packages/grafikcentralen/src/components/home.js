import React from "react"
import { connect, Global, css, Head } from "frontity"
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import Page from "./page.js"
import MainMenu from "./nav/mainMenu.js"
import RobotoMedium from "./fonts/Roboto-Medium.ttf"
import RobotoBold from "./fonts/Roboto-Bold.ttf"

const Root = ({ state }) => {
  // connect-src 'self' https://gc.webbdesign.org;
    // base-uri 'self' https://gc.webbdesign.org;
    // style-src 'self' https://gc.webbdesign.org;
    // script-src 'self' https://gc.webbdesign.org;
    const data = state.source.get(state.router.link);
    const Post =({state})=> <>Post</>
    const List =({state})=> <>List</>

  return (
    <>

    <Head >
    <html lang="sv" />
    {/* <meta http-equiv="Content-Security-Policy" 
    content="default-src 'self'  https://gc.webbdesign.org;"
    content="style-src 'self'  https://gc.webbdesign.org;"
    content="script-src 'self'  https://gc.webbdesign.org;"
    > */}
  
    {/* </meta> */}
    
    </Head>
         <Global
          styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700');
        //   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
            body {
                font-family: "Roboto";
                margin: 0;
            }
          `}
        />
    <MainMenu/>
        <Switch>
            <h1> Page</h1>       
            <Post when={data.isPost} />
            <List when={data.isArchive}>This is a list</List>
            <Page when={data.isPage} />
            <div when={data.isError}>404 not found</div>
        </Switch>
    </>
  )
}

export default connect(Root)