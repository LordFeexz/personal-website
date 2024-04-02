"use client";

import { Button } from "@/components/atoms/button/material-tailwind";
import { Input, Textarea } from "@/components/atoms/form/material-tailwind";
import { useState, useEffect, type ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";
import { useFormStatus } from "react-dom";
import { swalError, swalSuccess } from "@/libs/swal";

export interface ContactFormProps {
  email: string;
  name: string;
  message: string;
}

export default function ContactForm() {
  const { pending } = useFormStatus();
  const params = useSearchParams();
  const searchParams = new URLSearchParams(params!);
  const success = searchParams.get("success");
  const error = searchParams.get("error");
  const [data, setData] = useState<ContactFormProps>({
    email: "",
    name: "",
    message: "",
  });

  useEffect(() => {
    if (success) {
      swalSuccess(success);
      return;
    }

    if (error) {
      swalError(error);
      searchParams.delete("error");
      window.history.replaceState(
        {},
        "",
        window.location.pathname + "?" + searchParams.toString()
      );
      return;
    }
  }, [error, params, success]);

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const disabledCond = pending || !data.email || !data.name || !data.message;

  return (
    <>
      <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0">
        <label className="w-full font-sora text-xl">
          name
          <Input
            variant="outlined"
            value={data.name}
            name="name"
            onChange={onChangeHandler}
            placeholder="name"
            color="blue"
            className="cursor-pointer active:cursor-text !bg-gray-100"
          />
        </label>
        <label className="w-full text-xl font-sora">
          email
          <Input
            color="blue"
            variant="outlined"
            value={data.email}
            name="email"
            onChange={onChangeHandler}
            placeholder="email"
            className="cursor-pointer active:cursor-text !bg-gray-100"
          />
        </label>
      </div>
      <Textarea
        color="blue"
        name="message"
        value={data.message}
        onChange={onChangeHandler}
        variant="outlined"
        placeholder="message"
        className="cursor-pointer active:cursor-text !bg-gray-100"
      />
      <Button
        disabled={disabledCond}
        type="submit"
        color="blue"
        className={`rounded-lg bg-neutral-700 px-4 py-2 text-white shadow-md hover:bg-neutral-800 hover:shadow-lg border ${
          !disabledCond ? "bg-cyan-200" : "bg-gray-700"
        }`}
      >
        send
      </Button>
    </>
  );
}
