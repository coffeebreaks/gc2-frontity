import { connect, styled } from "frontity"
import Footer from "./acf/footer"
import Link from "@frontity/components/link";

const Post = ({state, libraries}) => {
    
    const Html = libraries.html2react.Component;
    const link = state.router.link
    const keys = Object.keys(state.source.post)
    
    const post = state.source.post
    const allPosts = "allposts/"
    const thePosts = state.source.data[allPosts]
   
    let thisPost
    
    keys.forEach(x => {
        post[x].link === link?  thisPost = post[x]:""
     })

    const Wrapper = styled.article`
        max-width: 1150px;
        margin: 100px auto;
        padding: 1rem;


        h1 {
            font-size: 4.1rem;
            color: rgb(76, 78, 77);
            letter-spacing: -4px;
            text-transform: uppercase;
            text-align: left;
            @media(max-width: 1000px){
                font-size: 1rem ;
                text-align: center ;
                letter-spacing: initial;
            }
        }

        p {
            
            font-size: 17px;
            font-family: system-ui;
            line-height: 25px;
            color: rgb(76, 78, 77);
           
            text-size-adjust: 100%;
        }
    `

    const Image = styled.img`
        width: 100% ;
        height: auto ;
        max-height: 400px;
        object-fit: cover;
        object-position: center;
    `
    
    const SideImage = styled.img`
        width: 100% ;
        height: auto ;    
        max-height: 200px;
        object-fit: cover;
        object-position: center;

    `
    
    const Ingress = styled.div`
        p {
            font-size: 22.5px !important;
        }
    `

    const Meta = styled.div`
    margin-top: 2rem;
    margin-bottom: .5rem ;
    font-size: 12px ;
    color: #666666;

    a {
        color: inherit;
        text-decoration: none ;

    }
    
    `

    const MainContent = styled.div`
        display: grid ;
        grid-template-columns: 70% 30% ;
        @media(max-width: 900px){
            grid-template-columns: 100% ;
        }
    
    `

    const RecentPosts = styled.div`
    margin: 0 1rem ;
    /* margin-top: 384px; */
    h2 { 
        margin: 0;
        margin-bottom: 1rem;
        background: #ffd600;
        font-style: italic;
        width: fit-content;
        padding: 0.4rem;
    }

    a {
        text-decoration: none ;
    }
    `

    const ParsedContent = styled.div`
        img {
            width: 100% ;
            height: auto ;
         
        }

        .wp-block-image {
            width: 100% ;
            margin: 0px;
        }

        a {
            font-weight: bold ;
           color: #5196ff;;
            text-decoration: none;
        }

        ol,ul {
            font-size: 18px;
            font-family: system-ui;
            line-height: 26px;
            color: rgb(76, 78, 77);
        }

        li {
            position: relative ;
            margin-bottom: 1rem ;
        }

        ul {
        
        }

        li::marker{
      
            color: #5196ff;
            font-size: 1.2rem;
        }
    `

    const KortIngress = styled.h3 `
  
        font-size: 12px ;
        font-weight: 100 ;
        margin-top: 0.1rem;
        margin-bottom: 1rem;
      
     
    `

    const TheContent = styled.div`
        margin-right: 1rem ;
        @media(max-width: 1000px){
            margin-right: 0 ;
        }
    `

    return(
        <>
        <Wrapper>
           
            <h1> {thisPost.title.rendered}</h1>   
   
            <MainContent>
                <TheContent>
            <Ingress><Html html={thisPost.acf.ingress || ""} /></Ingress> 
            <Meta>
            Av: Stefan Jakobsson | <a href="mailto:stefan@grafikcentralen.se">stefan@grafikcentralen.se</a> | {thisPost.date.split("T")[0]}
            </Meta>
                <Image src={thisPost.featured_image_src} width="300" height="300"/>
                <ParsedContent>
                <Html html={thisPost.content.rendered} />
                </ParsedContent>
                </TheContent>

                <RecentPosts>
                   <h2> Läs även:</h2>
               {
               thePosts.items.map(x =>  
                <>
                {x.title.rendered !== thisPost.title.rendered? 
                <div>
                <Link link={x.link}>
                <SideImage src={x.featured_image_src} width="300" height="300"/> 
                <KortIngress>{x.acf.kort_ingress}</KortIngress>
                </Link>
                </div>
               :""}
               </>
               )
               }
                </RecentPosts>

            </MainContent>
        </Wrapper>
            <Footer/>
            </>
    )


}

export default connect(Post)