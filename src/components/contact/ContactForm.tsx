"use client";

import { Alice, PT_Sans } from "next/font/google";
import React from "react";
import { useForm } from "react-hook-form";

const alice = Alice({
  weight: "400",
  subsets: ["latin"],
});

const pt_sans = PT_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function ContactForm() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div className="p-6 mx-auto text-md leading-loose w-full h-full flex flex-col items-center justify-start min-h-[100vh]">
      <h1 className={`${alice.className} text-[#800000] text-3xl md:text-4xl text-center p-6 mt-16`}>
        Get in touch
      </h1>

      <form
        target="_blank"
        onSubmit={onSubmit}
        method="POST"
        action={`${process.env.FORM}`}
        className={`${pt_sans.className} flex flex-col gap-2 mx-auto`}
      >
        <input
          className="w-[250px] sm:w-[600px] bg-white text-[#333333] placeholder-[#D4AF37] border-1 border-[#800000] p-3"
          type="text"
          placeholder="Name"
          {...register("name", {
            required: true,
            maxLength: 100,
          })}
        />

        {errors.name && (
          <div className="w-[250px] sm:w-[600px]">
            <p className="text-[#800000] mt-1 text-left">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max length is 100 char."}
            </p>
          </div>
        )}

        <input
          className="w-[250px] sm:w-[600px] bg-white text-[#333333] placeholder-[#D4AF37] p-3 mt-5 border-1 border-[#800000]"
          type="text"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <div className="w-[250px] sm:w-[600px]">
            <p className="text-[#800000] mt-1 text-left">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          </div>
        )}

        <textarea
          className="w-[250px] sm:w-[600px] bg-white text-[#333333] placeholder-[#D4AF37] border-1 border-[#800000] p-3 mt-5"
          placeholder="Message"
          {...register("message", {
            required: true,
            maxLength: 2000,
          })}
        />
        {errors.message && (
          <div className="w-[250px] sm:w-[600px]">
            <p className="text-[#800000] mt-1 text-left">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          </div>
        )}

        <div className="w-[250px] sm:w-[600px] flex justify-center items-center mt-2">
          <button
            className={`${alice.className} cursor-pointer text-white text-md sm:text-lg text-center w-[250px] md:w-[600px] p-2 bg-[#800000]`}
            type="submit"
          >
            SEND ME A MESSAGE
          </button>
        </div>
      </form>
    </div>
  )
}
