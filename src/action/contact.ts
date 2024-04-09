"use server";

import { redirect } from "next/navigation";
import mailService from "@/libs/nodemailer";
import { getMessageHtml } from "@/constants/messageEmail";

export const sendContactAction = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !message || !email) redirect(`/contact?error=Invalid Input`);

  let html = getMessageHtml();
  html = html.replaceAll(/\[NAME\]/g, name as string);
  html = html.replaceAll(/\[EMAIL\]/g, email as string);
  html = html.replace(/\[MESSAGE\]/, message as string);

  await mailService.sendEmail({
    to: process.env.EMAIL as string,
    html,
  });
  redirect("/contact?success=success send message");
};
