import { NextFunction, Request, Response } from "express";
import { ILoginDto, LoginDto } from "../dto/login.dto";
const REGEX_VALIDATE_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const REGEX_VALIDATE_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
export function validateLogin(req: Request, res: Response, next: NextFunction) {
  let user: ILoginDto = LoginDto(req);
  if (!validateWithRegex(REGEX_VALIDATE_EMAIL,user.email.trim())) {
    return res.render("error.pug", {
      error: `Email not in right format`,
    });
  }
  if (!validateWithRegex(REGEX_VALIDATE_PASSWORD,user.password.trim())) {
    return res.render("error.pug", {
      error: `Password not in right format. Password must contain minimum eight characters, at least one letter and one number`,
    });
  }
  next();
}
function validateWithRegex(regex: RegExp, value: string){
  return regex.test(value)
}

