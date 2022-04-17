import { connect, styled } from "frontity"


const Post = ({state, libraries}) => {
    
    const Html = libraries.html2react.Component;
    const link = state.router.link
    const keys = Object.keys(state.source.post)
    const post = state.source.post
    let thisPost
    
    keys.forEach(x => {
        post[x].link === link?  thisPost = post[x]:""
     })

    const Wrapper = styled.article`
        max-width: fit-content;
        margin: 100px auto;

        p {
            max-width: 77ch;
            font-size: 18px;
            font-family: system-ui;
            line-height: 26px;
            color: rgb(84 88 95);
            text-align: justify;
            text-size-adjust: 100%;
        }
    `


    return(
        <Wrapper>
            <h1> {thisPost.title.rendered}</h1>    
            <Html html={thisPost.content.rendered} />
        </Wrapper>
    )


}

export default connect(Post)