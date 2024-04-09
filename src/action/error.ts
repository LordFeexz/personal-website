"use server";

import { getMessageHtml } from "@/constants/messageEmail";
import mailService from "@/libs/nodemailer";

export const sendErrorMessage = async (error: Error) => {
  let html = getMessageHtml();
  html = html.replaceAll(/\[NAME\]/g, "Error");
  html = html.replaceAll(/\[EMAIL\]/g, "From Your Website");
  html = html.replace(/\[MESSAGE\]/, error?.message || "unexpected error");

  await mailService.sendEmail({
    to: process.env.EMAIL as string,
    html,
  });
};
