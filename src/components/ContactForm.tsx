"use client"
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MutatingDots } from 'react-loader-spinner';

export const ContactForm = ({ lenguage }: any) => {

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [allowedMessages, setallowedMessages] = useState(2);
  const [sendingMessage, setSendingMessage] = useState(false);

  const [isLoading, setIsLoading] = useState(false)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [texts, setTexts] = useState({
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    actionButton: "Send",
  })

  useEffect(() => {

    if (lenguage === "en") {
      setTexts({
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        messagePlaceholder: "Message",
        actionButton: "Send",
      })
    } else if (lenguage === "es") {
      setTexts({
        namePlaceholder: "Nombre",
        emailPlaceholder: "Correo",
        messagePlaceholder: "Mensaje",
        actionButton: "Enviar",
      })
    } else if (lenguage === "fr") {
      setTexts({
        namePlaceholder: "Nom",
        emailPlaceholder: "Courriel",
        messagePlaceholder: "Message",
        actionButton: "Envoyer",
      })
    } else if (lenguage === "hi") {
      setTexts({
        namePlaceholder: "नाम",
        emailPlaceholder: "मेल",
        messagePlaceholder: "संदेश",
        actionButton: "भेजना",
      })
    } else if (lenguage === "ch") {
      setTexts({
        namePlaceholder: "名称",
        emailPlaceholder: "电子邮件",
        messagePlaceholder: "留言",
        actionButton: "发送",
      })
    } else if (lenguage === "ja") {
      setTexts({
        namePlaceholder: "名称",
        emailPlaceholder: "電子メール",
        messagePlaceholder: "メッセージ",
        actionButton: "送信",
      })
    } else {
      setTexts({
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        messagePlaceholder: "Message",
        actionButton: "Send",
      })
    }

  }, [])


  const form: any = useRef(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setIsLoading(true);

    if (sendingMessage) {
      return;
    }

    if (allowedMessages <= 0) {
      toast.error("You have sent too much messages");
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
      setNameError("The Name is required.");
      IfnameError = true;
    } else {
      setNameError("");
      IfnameError = false;
    };


    let EmailRegexValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!EmailRegexValidator.test(messageInfo.email.toString().toLowerCase())) {
      setEmailError('The email is invalid');
      IfemailError = true;
    } else {
      setEmailError("");
      IfemailError = false;
    };


    if (messageInfo.message?.toString() === "") {
      setMessageError("The Message must have at least 10 chracters.");
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

      const newPromise = new Promise((resolve: any, reject: any) => {
        emailjs.sendForm('service_ljreywj', 'template_12scdup', form.current, 'BDIxeZDcmcXTCdO5z')
          .then((result: any) => {
            setSendingMessage(false);
            setName("");
            setEmail("");
            setMessage("");
            setIsLoading(false);
            resolve();
          }, (error: any) => {
            setSendingMessage(false);
            setIsLoading(false);
            reject();
          });
      })
      toast.promise(
        newPromise,
        {
          pending: 'Sending...',
          success: 'Thank you the message has been sent👌',
          error: 'Sorry, there was an error, please try again later. 🤯'
        }
      )

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

      <form ref={form} onSubmit={sendEmail} className={`${isLoading ? "hidden" : ""} w-full sm:px-[10%] lg:px-[20%] 2xl:px-[25%]`}>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="light"
        />


        <div>

          <input
            type="text"
            placeholder={texts.namePlaceholder}
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
            placeholder={texts.emailPlaceholder}
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
            placeholder={texts.messagePlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${(messageError !== "") ? "border-2 border-red-500" : ""} w-full mt-8 py-3 px-4 bg-[#001c5f] text-white`}>

          </textarea>

          {messageError && <p className='text-red-500 text-lg'>{messageError}</p>}

        </div>

        <button type='submit' className='mt-8 w-full flex items-center justify-center bg-yellow-200 py-4 px-5 text-lg font-bold text-[#0F193B] hover:bg-yellow-300 transition-all'>{texts.actionButton}</button>

      </form>

    </>

  )
}
