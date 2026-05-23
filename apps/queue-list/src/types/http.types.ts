import { Request, Response } from "express";

interface QueueJobInterface {
  to: string;
  subject?: string;
  body?: string;
}

export interface QueueJobRequestInterface {
  to: string;
  subject?: string;
  body?: string;
}

export interface QueueJobResponseInterface {
  processed: boolean;
  message: string;
  job: QueueJobInterface;
}

export type QueueJobRequest = Request<{}, {}, QueueJobRequestInterface>;
export type QueueJobResponse = Response<QueueJobResponseInterface>;
