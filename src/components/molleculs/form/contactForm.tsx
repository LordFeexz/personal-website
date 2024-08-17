"use client";

import {
  useState,
  useEffect,
  type ChangeEvent,
  Suspense,
  memo,
  useCallback,
} from "react";
import { useSearchParams } from "next/navigation";
import { useFormStatus } from "react-dom";
import { swalError, swalSuccess } from "@/libs/swal";
import { cn } from "@/libs/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export interface ContactFormProps {
  email: string;
  name: string;
  message: string;
}

function ContactForm() {
  const { pending } = useFormStatus();
  const params = useSearchParams();
  const searchParams = new URLSearchParams(params.toString());
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

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const disabledCond = pending || !data.email || !data.name || !data.message;

  return (
    <Suspense>
      <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0">
        <LabelInputContainer className="w-full font-sora text-xl space-y-2">
          <Label htmlFor="name">name</Label>
          <Input
            value={data.name}
            id="name"
            name="name"
            onChange={onChangeHandler}
            placeholder="name"
            className="w-full rounded-lg bg-neutral-50 p-2 outline outline-neutral-300 focus:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700"
          />
        </LabelInputContainer>
        <LabelInputContainer className="w-full text-xl font-sora space-y-2">
          <Label htmlFor="email">email</Label>
          <Input
            id="email"
            value={data.email}
            name="email"
            onChange={onChangeHandler}
            placeholder="email"
            className="w-full rounded-lg bg-neutral-50 p-2 outline outline-neutral-300 focus:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700"
          />
        </LabelInputContainer>
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
    </Suspense>
  );
}

const LabelInputContainer = memo(
  ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  }
);

export default memo(ContactForm);
