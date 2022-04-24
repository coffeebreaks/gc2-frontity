import connect from "@frontity/connect"
import {styled, keyframes} from "frontity"
import axios from "axios"
import {useState} from "react"


const Footer = ({libraries, state}) => {

    const [formResp, setFormResp] = useState()
    const [display, showForm] = useState(false)

    const Html2React = libraries.html2react.Component;
    const key = "acf-settings/"
    const content = state.source.data[key].acf.text
    const logos = state.source.data[key].acf.logos
    const menu = state.source.data[key].acf.menu
    const background = state.source.data[key].acf.background

    function sendMail(e){
        e.preventDefault()
     
        let data = new FormData()

        data.set("your-subject", "Förfrågan från Chimneytec.se")
        data.set("your-name", e.target.name.value)
        data.set("your-email", e.target.email.value)
        data.set("your-message", e.target.message.value)
        data.set("your-company", "demo")

        axios.post(
            `https://gc.webbdesign.org/wp-json/contact-form-7/v1/contact-forms/287/feedback`,
            data,
            {
                headers: {
                    "content-type": "multipart/form-data",
                },
            }
            ) 
            .then(response => {
                setFormResp(response.data.message)
                response.data.status === "mail_sent"? showForm(false): showForm(true)
                console.log(response.data.status)
            }
                )
           
    }



    const Background = styled.div `
    display: flex;
    flex-flow: row;
    min-height: 300px;
    background: url('${props => props.img}');
    background-position: center;
    background-size: cover;
    background-attachment: fixed ;
    width: 100%;
    @media(max-width: 1300px) {
        flex-direction: column-reverse ;
    }
    `

    const Left = styled.div`
            background: #000000eb;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: auto;
        @media(max-width: 1300px) {
            width: 100%;
    }
    `

    const Right = styled.div`
    background: #000000bd;
    padding: 2rem;
        color: white;
        display: flex;
        flex-flow: column;
        width: 70%;
        height: 100%;
        @media(max-width: 1300px) {
           width: initial ;

    }
        
        p {
            max-width: 57ch;
        }

        hr {
            border: 1px solid #5196FF;
            width: -webkit-fill-available;
        }

        h1 {
            text-transform: uppercase;
            font-size: 92px;
            letter-spacing: -11px;
            @media(max-width: 1100px){
                font-size: 20px ;
              
                letter-spacing: inherit;
            }
            
        }

        h2 {
            color:  #5196FF;
        }

        ul {
            li {
            list-style: none;
            font-size: 14px ;
            margin-bottom: 5px ;
            font-weight: 100 ;
            color: white;
            strong{
                font-weight: 600 ;
            }
            }
        }
    `

    const Wrapper = styled.div`
         @media(max-width: 1300px) {
           width: 100% ;
           padding: 1rem ;
    }
        form {
            display: flex ;
            flex-flow: column ;
            label {
                    font-size: 10px ;
                    transform: translateY(33px) translateX(5px);
                }
            button {
                max-width: fit-content;
                padding: 1rem 3rem;
                text-transform: uppercase;
                margin-top: 1rem;
                border: 1px solid #5196ff;
                background: black;
                color: white;
                font-weight: 700;
                font-size: 12px;
            }    
        
        }
        `
 
    const Input = styled.input`
    @media(max-width: 1300px) {
         
           min-width: initial ;
    }
        background-color: #6c6c6c6b;
        background-blend-mode: screen;
        color: white;
        padding: 1.3rem;
        margin: 1rem 0;
        border: none;
        min-width: 300px;
   
        `
        
       
    const Textarea = styled.textarea`
    @media(max-width: 1300px) {
          
           min-width: initial ;
    }
      background-color: #6c6c6c6b;
        background-blend-mode: screen;
        color: white;
        padding: 1.3rem;
        margin: 1rem 0;
        border: none;
        min-width: 300px;
        resize: vertical;
  
        `
    const Form = styled.form`

@media(max-width: 1300px) {
           width: 100%;
           min-width: initial ;
    }


    `
    const Button = styled.button``

    const Banner = styled.div`
        background-color: #1A1A1A ;
        height: 100px ;
    `

    return (
        <>
   <Background img={background.url}>
    
        <Left>
            
        <Wrapper>
        <Html2React html="Kontakta oss"/>
        <Form onSubmit={sendMail}>
                    <label for="name"> Ditt namn</label>
                    <Input type="text" name="name" required />
                    <label for="tel"> Ditt telefonnummer</label>
                    <Input type="text" name="tel" required />
                    <label for="company "> Företag/Organisation</label>
                    <Input type="company" name="text" required />
                    <label for="email"> Din e-postadress</label>
                    <Input type="text" name="email" required />
                    <label for="message"> Din fråga</label>
                    <Textarea rows="7" name="message" required ></Textarea>
                    <Button type="submit">Kontakta oss</Button> 
                </Form>
        </Wrapper>
        </Left>

        <Right>
            <Html2React html={content}/>
        </Right>

    </Background>
    <Banner>

asd
    </Banner>
    </>
    )
    }

export default connect(Footer)    