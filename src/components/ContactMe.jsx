import React, { useState } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const ContactMe = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobNo, setMobNo] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Lalit Upadhyay",
            message: message,
            contact_number: mobNo,
            subject: subject,
        };

        emailjs
            .send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            )
            .then(
                () => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Your message has been sent successfully.',
                        confirmButtonText: 'OK',
                    });
                    setName("");
                    setEmail("");
                    setMobNo("");
                    setMessage("");
                    setSubject("");
                },
                (error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed!',
                        text: 'There was an issue sending your message. Please try again.',
                        confirmButtonText: 'OK',
                    });
                }
            );
    }

    return (
        <section id="contact-section">

            <motion.h2 initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration: 0.8, ease: "easeOut" }} className="text-3xl text-center underline decoration-2 underline-offset-8 my-8">CONTACT ME</motion.h2>

            <motion.div className="px-2 sm:w-[60vw] sm:mx-auto" initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration: 0.8, ease: "easeOut" }} >

                <form onSubmit={submitHandler}>
                    <div className="flex flex-col my-4">
                        <label className="my-2">Your name</label>
                        <input className="p-2 bg-transparent outline-none border border-purple-300/50 rounded-md placeholder:text-purple-300" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.currentTarget.value)} />
                    </div>
                    <div className="flex flex-col my-4">
                        <label className="my-2">Email</label>
                        <input className="p-2 bg-transparent outline-none border border-purple-300/50 rounded-md placeholder:text-purple-300" type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                    </div>
                    <div className="flex flex-col my-4">
                        <label className="my-2">Contact number</label>
                        <input className="p-2 bg-transparent outline-none border border-purple-300/50 rounded-md placeholder:text-purple-300" type="text" placeholder="Enter your contact number" value={mobNo} onChange={(e) => setMobNo(e.currentTarget.value)} />
                    </div>
                    <div className="flex flex-col my-4">
                        <label className="my-2">Subject</label>
                        <input className="p-2 bg-transparent outline-none border border-purple-300/50 rounded-md placeholder:text-purple-300" type="text" placeholder="Enter your subject" value={subject} onChange={(e) => setSubject(e.currentTarget.value)} />
                    </div>
                    <div className="flex flex-col my-4">
                        <label className="my-2">Your message</label>
                        <textarea className="p-2 bg-transparent outline-none border border-purple-300/50 rounded-md placeholder:text-purple-300" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
                    </div>
                    <div className="flex items-center justify-center my-8">
                        <button className="bg-purple-300/50 px-4 py-2 rounded-md">Submit</button>
                    </div>
                </form>
            </motion.div>

            <div className="bg-[var(--clr-1)] w-full py-2 text-xs text-center text-purple-300/50 sm:mt-4">&copy; Copyright 2024 Lalit Upadhyay</div>

        </section>


    )
}

export default ContactMe;
