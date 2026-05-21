import { Request, Response } from "express";

export interface SendOtpRequestInterface {
  phone: string;
}

export interface SendOtpResponseInterface {
  success: boolean;
  message: string;
  otp: string | null;
}

export interface VerifyOtpRequestInterface {
  phone: string;
  otp: string;
}

export interface VerifyOtpResponseInterface {
  success: boolean;
  message: string;
}

export interface FindTTLRequestInterface {
  phone: string;
}

export interface FindTTLResponseInterface {
  success: boolean;
  message: string;
  ttl?: number;
}

export type SendOtpRequest = Request<{}, {}, SendOtpRequestInterface>;
export type SendOtpResponse = Response<SendOtpResponseInterface>;

export type VerifyOtpRequest = Request<{}, {}, VerifyOtpRequestInterface>;
export type VerifyOtpResponse = Response<VerifyOtpResponseInterface>;

export type FindTTLRequest = Request<{}, {}, FindTTLRequestInterface>;
export type FindTTLResponse = Response<FindTTLResponseInterface>;
