import { Request, Response } from "express";

export interface NotificationRequestInterface {
  message: string;
}

export interface NotificationResponseInterface {
  status: string;
  recivers: number;
}

export type NotificationRequest = Request<{}, {}, NotificationRequestInterface>;
export type NotificationResponse = Response<NotificationResponseInterface>;
