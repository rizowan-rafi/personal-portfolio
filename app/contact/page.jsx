"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import React, { useRef } from "react";
const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+8801403498822",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "rizowanrafi71@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Rajshahi, Bangladesh",
    },
];

import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const handleSubmit = (e) => {
      e.preventDefault();

      // Combine first + last name into hidden field
      const firstname = form.current.firstname.value;
      const lastname = form.current.lastname.value;

      let nameInput = form.current.querySelector("input[name='name']");
      if (!nameInput) {
          nameInput = document.createElement("input");
          nameInput.type = "hidden";
          nameInput.name = "name";
          form.current.appendChild(nameInput);
      }
      nameInput.value = `${firstname} ${lastname}`;

      emailjs
          .sendForm(
              process.env.NEXT_PUBLIC_SERVICE_ID,
              process.env.NEXT_PUBLIC_TEMPLATE_ID,
              form.current,
              process.env.NEXT_PUBLIC_PUBLIC_KEY
          )
          .then(
            () => { alert("Message sent!"); form.current.reset();},
              (error) => alert("Failed to send message: " + error.text)
          );
  };
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
            }}
            className="text-white py-6 px-4 xl:px-12"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px] ">
                    <div className="xl:h-[54%] order-2 xl:order-none ">
    
                        <form
                            ref={form}
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl "
                        >
                            <h3 className="text-4xl text-accentDefault ">
                                Let's work together
                            </h3>
                            <p className="text-white/60 ">
                                {" "}
                                Eum doloremque cupiditate exercitationem
                                accusantium enim recusandae eligendi
                                reprehenderit, culpa a esse.
                            </p>
                            <div className="grid grid-cols-1  md:grid-cols-2 gap-6 ">
                                <Input
                                    name="firstname"
                                    required
                                    type={"firstname"}
                                    placeholder="First name"
                                ></Input>
                                <Input
                                    name="lastname"
                                    required
                                    type={"lastname"}
                                    placeholder="Last name"
                                ></Input>
                                <Input
                                    name="email"
                                    required
                                    type={"email"}
                                    placeholder="Email address"
                                ></Input>
                                <Input
                                    name="phone"
                                    type={"phone"}
                                    placeholder="Phone Number"
                                ></Input>
                            </div>
                            <Textarea
                                name="message"
                                required
                                className={"h-[200px] "}
                                placeholder="Type your message"
                            ></Textarea>
                            <Button
                                size="md"
                                className={"max-w-40 py-3 rounded-full"}
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>

                    <div className="flex-1  flex items-center justify-center order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-6"
                                    >
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accentDefault rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">
                                                {item.title}
                                            </p>
                                            <h3 className="text-xl">
                                                {item.description}
                                            </h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
