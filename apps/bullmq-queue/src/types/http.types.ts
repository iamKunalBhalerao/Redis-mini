import { Request, Response } from "express";

export interface SendEmailRequestInterface {
  to: string;
  subject?: string;
}

export interface SendEmailResponseInterface {
  success: boolean;
  message: string;
  job: {
    id: string | undefined;
    to: string;
    subject: string;
  }
}

export type SendEmailRequest = Request<{}, {}, SendEmailRequestInterface>;
export type SendEmailResponse = Response<SendEmailResponseInterface>;
