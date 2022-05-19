import connect from "@frontity/connect"
import {styled, keyframes} from "frontity"
import {useState} from "react"
import Link from "@frontity/components/link";
import TrackVisibility from 'react-on-screen';
const BlogFront = ({libraries, startpost, header,  isVisible, state}) => {

    const [showCount, setCount] = useState(3)
    const Html = libraries.html2react.Component;
    const key = "allposts/"
    const acf = "acf-settings/"

    const posts = state.source.data[key].items
    const startPost = state.source.data[key].items.filter((x)=> x.id === startpost.ID)
    const forfattare = state.source.data[acf].acf.forfattare.filter( (x)=> x.post === startPost[0].author)
    const timeIcon = state.source.data[acf].acf.time_icon
   
    


    const Wrapper = styled.div`
        display: flex; 
        flex-direction: column ;
        justify-content: center;
        max-width: 1290px ;
        align-items: center ;
        margin: 0 auto;

    `

    const Header = styled.div`
        margin-top: 4rem;
        text-align: center;

        h2 {
            text-transform: uppercase ;
            font-size: 4rem ;
            @media(max-width: 500px){
                font-size: 2rem ;
            }
        }
    `

    const FeaturedArticle = styled.article`
            margin: 2rem;
            box-shadow: 0px 0px 15px 3px #0000002b;
            padding: 2rem;
            @media(max-width: 800px){
                padding: 0;
                margin: 1rem;
            }
            display: flex ;
            
    `



    const FeaturedContent = styled.div`
        display: flex;
        flex-direction: column ;
        padding: 2rem ;
        @media(max-width:800px){
            padding: 1rem;
        }
        h2 {
            font-size: 18px;
            @media(max-width: 600px){
                font-size: 14px;
            }
        }
        p {
            @media(max-width: 600px){
                font-size: 0.7rem;
            }
        }
     
    `    

    const FeaturedImage = styled.img`
        min-width: 800px;
      
        @media(max-width: 1330px){
            min-width: 300px;
        }
        @media(max-width: 800px){
            min-width: 100%;
            height: 200px;
        }
       
        width: 100%;
        height: 550px ;
        object-fit: cover ;
    `

const author = state.source.data[acf].acf.forfattare.filter( (x)=> x.post === String(startPost[0].author) )



const Profilepic = styled.img`
    object-fit: cover;
    height: 40px;
    width: 40px;
    filter: grayscale(1);
    border-radius: 50%;
`

const Author = styled.address`
    display: flex ;
    flex-direction: row ;
    align-items: center ;
    font-size: 12px;
    margin-bottom: 2rem ;
    p {
     
    }
  
`

const AuthorName = styled.p `
    font-style: initial;
    margin-left: 1rem;
    color: #29516D;
    @media(max-width: 600px){
        font-size:10px !important ;
        padding: 0 ;
    }
    `

const Time = styled.time`
    margin-left: auto;
    font-size: 12px ;
    font-style: initial ;
    display: flex ;
    justify-content: center ;
    align-items: center ;
    p {
        @media(max-width: 600px){
            font-size: 8px !important ;
        }
    } 

    img {
        margin-right: 10px ;
        margin-bottom: 3px;
    }
`

const Mobile = styled.div`
    display: none;
    @media(max-width: 800px){
        display: block;
    }
`

const Desktop = styled.div`
    display: block;
    @media(max-width: 800px){
        display: none;
    }
`

const RecentPosts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    @media(max-width: 800px){
        grid-template-columns: 1fr ;
    }
`

const Post = styled.article`
     margin: 2rem;
     display: flex ;
     flex-direction: column ;
            box-shadow: 0px 0px 15px 3px #0000002b;
            padding: 2rem;
            @media(max-width: 800px){
                padding: 0;
                margin: 1rem;
            }
            display: flex ;
`

const PostImage = styled.img`
    object-fit: cover ;
    height: 150px ;
    width: 100% ;
`

const Readmore = styled(Link)`
        color: #306bc7;
        font-weight: 500 ;
        text-decoration: none;
        border-bottom: 1px solid #306bc7  ;
        width: max-content;
        margin-top: auto;
         
`

const LinkCard = styled(Link)`
    color: inherit;
    text-decoration: inherit;
    @media(max-width: 1000px){
        padding: 1rem;
    }
`

const Button = styled.button `
    padding: 1rem;
    background: white;
    outline: none;
    border: 1px solid black;
`


function getAuthor(postAuthor){
    return state.source.data[acf].acf.forfattare.filter( (x)=> x.post === String(postAuthor) )[0]
}

return (
    <Wrapper>
    <Header>    
    <Html html={header}/>
    </Header>
    <FeaturedArticle>
                <Desktop>
                    <FeaturedImage src={startPost[0].featured_image_src} alt="Bild för blogg inlägget" />
                </Desktop>
        <FeaturedContent>
     
            <Author>
                <Profilepic src={author[0].bild.url} alt="Profile pic" width={author[0].width} height={author[0].height} />
                <AuthorName rel="author">{author[0].namn}</AuthorName>
                <Time pubdate datetime={startPost[0].date}> 
                    <img src={timeIcon.url} alt={timeIcon.alt} width={timeIcon.width} height={timeIcon.height}/>
                    <p>{startPost[0].date.split("T")[0]}</p>
                </Time>
            </Author>
            <Mobile>
                <FeaturedImage src={startPost[0].featured_image_src}  alt="Bild för blogg inlägget" />
            </Mobile>
            <h2>{startPost[0].title.rendered}</h2>
            <Html html={startPost[0].excerpt.rendered} /> 
            <Readmore href={startPost[0].link}> Läs hela artikeln</Readmore>
        
        </FeaturedContent>


        </FeaturedArticle>
        
        <RecentPosts>
        {
            //All posts
        posts.map((x,i)=> 
        <div key={i}>
                {i < showCount?
        <Post>
              
                <LinkCard link={x.link}>
                <Author>
                <Profilepic src={getAuthor(x.author).bild.url}alt="Profile pic" width={getAuthor(x.author).width} height={getAuthor(x.author).height} />
                <AuthorName rel="author">{getAuthor(x.author).namn}</AuthorName>
                <Time pubdate datetime={x.modified}> 
                    <img src={timeIcon.url} alt={timeIcon.alt} width={timeIcon.width} height={timeIcon.height}/>
                    <p>{x.modified.split("T")[0]}</p>
                </Time>
                </Author>
                <p>{x.title.rendered}</p>
                <PostImage src={x.featured_image_src} alt="Bild för inlägget" />
                <Html html={x.excerpt.rendered} />
                <Readmore link={x.link}> • Läs hela artikeln</Readmore>
                </LinkCard>


            </Post>
                :""}
                </div>
            )
        }
        </RecentPosts>
        <Button onClick={()=> setCount(99)}> Visa fler nyheter</Button> 


    </Wrapper>

)

}

export default connect(BlogFront)
