import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";


const Contact = () => {
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

      if (status === "sending") return;

      setStatus("sending");
      setMessage("Sending...");
      
    const formData = new FormData(event.target);
    formData.append("access_key", "780862ff-176d-4cb4-a5fe-aa81d9c9a674");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Message Sent Successfully ✅");
        event.target.reset();
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <motion.div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'

      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
    >
      <motion.h4 className="font-ovo text-center mb-2 text-lg"
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}      
      >Connect with me</motion.h4>
      <motion.h2 className="text-center text-5xl font-ovo"
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}      

      >Get in touch</motion.h2>

      <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.7}}      

      >
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      <AnimatePresence mode="wait">
      {status === "success" ? (
      <motion.div
      key="success"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-2xl mx-auto bg-green-50 border border-green-200 text-green-800 rounded-xl shadow-md p-8 text-center"
      >
      <h3 className="text-2xl font-semibold mb-2">Message Sent Successfully ✅</h3>
      <p className="text-lg mb-6">
        Thank you for reaching out! I’ll get back to you as soon as possible.
      </p>
      <button
        onClick={() => {
          setStatus("idle");
          setMessage("");
        }}
        className="py-2 px-6 bg-green-700 text-white rounded-full hover:bg-green-800 transition"
      >
        Send Another Message
      </button>
      </motion.div>
      ) : (
      <motion.form
      key="form"
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{opacity: 1}}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
      className="max-w-2xl mx-auto"
      >
      <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
        <motion.input
        initial={{x: -50, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{delay: 1.1, duration: 0.6}}
          type="text"
          placeholder="Enter your name"
          required
          className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          name="name"
        />
        <motion.input
        initial={{x: 50, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{delay: 1.1, duration: 0.6}}        
          type="email"
          placeholder="Enter your email"
          required
          className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          name="email"
        />
      </div>

      <motion.textarea
        initial={{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 1.1, duration: 0.6}}
        rows="6"
        placeholder="Enter your message"
        required
        className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
        name="message"
      ></motion.textarea>

      <motion.button
      whileHover={{scale: 1.15}}
      transition={{duration: 0.3}}
        type="submit"
        disabled={status === "sending"}
        className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-gray-700/90 text-white rounded-full mx-auto hover:bg-gray-700 duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
      >
        {status === "sending" ? "Sending..." : "Submit now"}
        <Image src={assets.right_arrow_white} alt="" className="w-4" />
      </motion.button>

      {status === "error" && (
        <motion.p
          key="error"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-red-600 text-center"
        >
          {message}
        </motion.p>
          )}
        </motion.form>
       )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
