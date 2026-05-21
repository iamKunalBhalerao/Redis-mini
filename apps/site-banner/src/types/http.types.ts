import { Request, Response } from "express";

export interface SetKeyRequestInterface {
  value: string;
}

export interface SetKeyResponseInterface {
  ok: boolean;
  result: string;
  message: string;
}

export type SetKeyRequest = Request<{}, {}, SetKeyRequestInterface>;
export type SetKeyResponse = Response<SetKeyResponseInterface>;
