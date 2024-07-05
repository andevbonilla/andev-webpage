"use client"
import React, { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MutatingDots } from 'react-loader-spinner';
import { ModalContact } from './ModalContact';

export const ContactForm = ({ namePlaceholder, emailPlaceholder, messagePlaceholder, actionButton, errorTooMessages, errorNameRequired, errorEmail, errorMessage, sending, success, error }: any) => {

  // errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [allowedMessages, setallowedMessages] = useState(2);
  const [sendingMessage, setSendingMessage] = useState(false);

  const [openModal, setopenModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form: any = useRef(null);

  const evaluateName = (e: any) => {
    const name = e.target.value;
    if (name.length === 0) {
      setNameError(errorNameRequired);
    } else {
      setNameError("")
    }
    if (name.length > 50) {
      setNameError("The name is too long!");
    } else {
      setNameError("")
    }
    setName(name);
  }

  const evaluateEmail = (e: any) => {
    const name = e.target.value;
    if (name.length === 0) {
      setNameError(errorNameRequired);
    } else {
      setNameError("")
    }
    if (name.length > 50) {
      setNameError("The name is too long!");
    } else {
      setNameError("")
    }
    setName(name);
  }

  const evaluateMessage = (e: any) => {
    const message = e.target.value;
    if (message.length === 0) {
      setMessageError(errorMessage);
    } else {
      setMessageError("")
    }
    setName(message);
  }

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setIsLoading(true);

    if (sendingMessage) {
      return;
    }

    if (allowedMessages <= 0) {
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    const messageInfo: any = {
      name: formData.get('name') ? formData.get("name") : '',
      email: formData.get('email') ? formData.get("email") : '',
      message: formData.get('message') ? formData.get("message") : '',
    }

    let IfnameError = false;
    let IfemailError = false;
    let IfmessageError = false;

    if (messageInfo.name?.toString() === "") {
      setNameError(errorNameRequired);
      IfnameError = true;
    } else {
      setNameError("");
      IfnameError = false;
    };


    let EmailRegexValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!EmailRegexValidator.test(messageInfo.email.toString().toLowerCase())) {
      setEmailError(errorEmail);
      IfemailError = true;
    } else {
      setEmailError("");
      IfemailError = false;
    };


    if (messageInfo.message?.toString() === "") {
      setMessageError(errorMessage);
      IfmessageError = true;
    } else {
      setMessageError("");
      IfmessageError = false;
    };

    if (IfnameError || IfemailError || IfmessageError) {
      return;
    }

    setSendingMessage(true);

    setallowedMessages(allowedMessages - 1);

    setTimeout(() => {

      emailjs.sendForm('service_ljreywj', 'template_12scdup', form.current, 'BDIxeZDcmcXTCdO5z')
        .then((result: any) => {
          setSendingMessage(false);
          setName("");
          setEmail("");
          setMessage("");
          setIsLoading(false);
          setopenModal(true);
        }, (error: any) => {
          setSendingMessage(false);
          setIsLoading(false);
          setopenModal(true);
        });


    }, 1000);

  }

  return (

    <>

      <div className={`${isLoading ? "" : "hidden"} flex items-center justify-center w-full`}>
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#fef08a"
          secondaryColor="#fef08a"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""

        />
      </div>

      {
        true &&
        <ModalContact
          type={1}
          message=''
          setopenModal={setopenModal}
        />
      }

      <form ref={form} onSubmit={sendEmail} className={`${isLoading ? "hidden" : ""} w-full sm:px-[10%] lg:px-[20%] 2xl:px-[25%]`}>

        <div>

          <input
            type="text"
            placeholder={namePlaceholder}
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${(nameError !== "") ? "border-2 border-red-500" : ""} w-full mt-8 py-3 px-4 bg-[#001c5f] text-white`}
          />

          {nameError && <p className='text-red-500 text-lg'>{nameError}</p>}

        </div>


        <div>

          <input
            type="email"
            placeholder={emailPlaceholder}
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${(emailError !== "") ? "border-2 border-red-500" : ""} w-full mt-8 py-3 px-4 bg-[#001c5f] text-white`}
          />

          {emailError && <p className='text-red-500 text-lg'>{emailError}</p>}

        </div>

        <div>

          <textarea
            name="message"
            rows={"5" as any}
            placeholder={messagePlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${(messageError !== "") ? "border-2 border-red-500" : ""} w-full mt-8 py-3 px-4 bg-[#001c5f] text-white`}>

          </textarea>

          {messageError && <p className='text-red-500 text-lg'>{messageError}</p>}

        </div>

        <button type='submit' className='mt-8 w-full flex items-center justify-center bg-yellow-200 py-4 px-5 text-lg font-bold text-[#0F193B] hover:bg-yellow-300 transition-all'>{actionButton}</button>

      </form>

    </>

  )
}
