import connect from "@frontity/connect"
import {styled, keyframes} from "frontity"
import axios from "axios"
import {useState} from "react"
const Front_form = ({libraries, text}) => {
    
    const [formResp, setFormResp] = useState()
    const [display, showForm] = useState(false)

    const Html = libraries.html2react.Component;

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

    const Wrapper = styled.div`
        margin: 4rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        h2{
            font-size: 24px;
            text-transform: uppercase;
        }

        p {
            max-width: 40ch;
        }
    `

    const Form = styled.form `
       
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    const Input = styled.input`
        width: 100%;
        max-width: 300px;
        font-family: inherit;
        border: none;
        border-bottom: 1px solid #b3b3b3;
        margin: 1rem 0;
        position: relative;
        z-index: 100;
        font-size: 18px;
        padding: .5rem;
        height: 1.2rem;
        background-color: transparent;

        &:focus {
            outline: none;
        }

        &:focus + label, &:valid + label {
            top: -65px;
            transform: scale(0.9);
            transition: .1s;
            left: -9px;
        }
        
        &+label {
            transition: .1s;
            position: relative;
            top: -45px;
            font-size: 14px;
            z-index: 10;
            left: 2px;
            width: 100%;
            text-align: left;
        }
    `

const Textarea = styled.textarea`
    margin:  1rem 0 ;
    font-size: 18px;
    padding: .5rem;
    width: 100%;
    max-width: 300px;
    font-family: inherit;
    border: none;
    border-bottom: 1px solid #b3b3b3;
    resize: none;
    overflow-y: auto;
    z-index: 100;
    background-color: transparent;
    &:focus {
        outline: none;
    }
    &:focus + label, &:valid + label {
        top: -200px;
        left: -9px;
        transform: scale(0.9);
        transition: .1s;
    }
    
    &+label {
        z-index: 10;
        transition: .1s;
        position: relative;
        top: -180px;
        font-size: 14px;
        z-index: 10;
        left: 2px;
        width: 100%;
        text-align: left;
    }
    `

    const Button = styled.button`
    width: 100%;
    background: transparent;
    border: 1px solid #898989;
    padding: 1rem;
    max-width: 300px;

    `

    const Text = styled(Html)`
        
 
           
    `


    return (
        <Wrapper>
        <Text html={text}/>
        <Form onSubmit={sendMail}>
                    <Input type="text" name="name" required />
                    <label for="name"> Ditt namn</label>
                    <Input type="text" name="tel" required />
                    <label for="tel"> Ditt telefonnummer</label>
                    <Input type="company" name="text" required />
                    <label for="company "> Företag/Organisation</label>
                    <Input type="text" name="email" required />
                    <label for="email"> Din e-postadress</label>
                    <Textarea rows="7" name="message" required ></Textarea>
                    <label for="message"> Din fråga</label>
                    <Button type="submit">Kontakta oss</Button> 
                </Form>
        </Wrapper>

    )
}

export default connect(Front_form)