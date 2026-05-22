import { Request, Response } from "express";

export interface JsonRequestInterface {
  name: string;
  email: string;
  phone: string;
}

export interface JsonParamsRequestInterface {
  id: string;
}

export interface JsonResponseInterface {
  success: boolean;
  message: string;
  savedAs: string;
}

export interface HashRequestInterface {
  name: string;
  email: string;
  phone: string;
}

export interface HashParamsRequestInterface {
  id: string;
}

export interface HashResponseInterface {
  success: boolean;
  message: string;
  savedAs: string;
}

export type JSONRequest = Request<
  JsonParamsRequestInterface,
  {},
  JsonRequestInterface
>;
export type JSONResponse = Response<JsonResponseInterface>;

export type HASHRequest = Request<
  HashParamsRequestInterface,
  {},
  HashRequestInterface
>;
export type HASHResponse = Response<HashResponseInterface>;
