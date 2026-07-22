import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionSubTitle"
import { Button } from "../../../components/Button"
import { theme } from "../../../styles/Theme"
import { Container } from "../../../components/Container"
import Sun from "../../../assets/images/Sun.svg"
import { Footer } from "../../footer/Footer"
import emailjs from '@emailjs/browser';
import { ElementRef, useRef } from 'react';


export const Contacts = () => {
    const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
if(!form.current) return

    emailjs.sendForm('service_myopm1u', 'template_jeki636', form.current, {
        publicKey: 'oYY6nyiiANwL2CkuU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
     return (
        <StyledContacts id="contacts">
            <Container>
                <ContactsWrapper>
            <SectionTitle margin="0 0 15px">Contsct Me</SectionTitle>
            <Subtitle>let’s make magic together</Subtitle>
            <StyledForm ref={form} onSubmit={sendEmail}>
                <Field required placeholder="Name" type="text" name="user_name"/>
                <Field required placeholder="Email" type="email" name="Email"/>
                <Field  required placeholder="Your text" as={"textarea"} name="message"/>
                <Button type="submit">Send</Button>
            </StyledForm>
            </ContactsWrapper>
            </Container>
            <Footer />
        </StyledContacts>
     )
}

const StyledContacts = styled.section`
    padding: 80px 0 150px;
         position: relative;
         z-index: 1;
         overflow: hidden;
    background-color: ${theme.colors.primaryBg};
        background-color: ${theme.colors.primaryBg};
    background-image: url(${Sun});
    background-repeat: no-repeat;
    background-size: 100vw auto;
    background-position-x: 55vw;
    background-position-y: 18vh;

        textarea {
            resize: none;
            height: 125px;
        }
        @media ${theme.media.mobile}{
            padding: 40px 20px 150px;
            background-size: 122vw auto;
    background-position-x: 35vw;
    background-position-y: 18vh;

        }
`

const StyledForm = styled.form`
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;

    Button {
        margin: 60px 0;
        padding: 25px 135px;
    }
`

const Field = styled.input`
width: 100%;
border-radius: 8px;
border: none;
background-color: #f3d0d011;
padding: 25px 20px;
font-weight: 500;
font-size: 16px;
color: ${theme.colors.font};
  &::placeholder {
    color: ${theme.colors.fontNonActiv};
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.accent};
  }

`

const Subtitle = styled.span`
margin-bottom: 80px;
`

const ContactsWrapper =styled.div`
display: flex;
flex-direction: column;
align-items: center;
`