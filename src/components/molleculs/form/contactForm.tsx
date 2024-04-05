"use client";

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
        <div className="w-full font-sora text-xl space-y-2">
          <input
            value={data.name}
            name="name"
            onChange={onChangeHandler}
            placeholder="name"
            className="w-full rounded-lg bg-neutral-50 p-2 outline outline-neutral-300 focus:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700"
          />
        </div>
        <div className="w-full text-xl font-sora space-y-2">
          <input
            value={data.email}
            name="email"
            onChange={onChangeHandler}
            placeholder="email"
            className="w-full rounded-lg bg-neutral-50 p-2 outline outline-neutral-300 focus:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700"
          />
        </div>
      </div>
      <textarea
        color="blue"
        name="message"
        value={data.message}
        onChange={onChangeHandler}
        placeholder="message"
        className="w-full rounded-lg bg-neutral-50 p-2 outline outline-neutral-300 focus:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700"
      />
      <button
        disabled={disabledCond}
        type="submit"
        color="blue"
        className={`rounded-lg bg-neutral-700 px-4 py-2 text-white shadow-md hover:bg-neutral-800 hover:shadow-lg border ${
          !disabledCond ? "bg-cyan-200" : "bg-gray-700"
        }`}
      >
        send
      </button>
    </>
  );
}
