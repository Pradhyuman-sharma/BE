import   { NextFunction, Request, Response }  from "express";
import { loginService, registerService } from "../services/auth.service";

export const registerController = async (req:Request, res:Response,next:NextFunction) => {
    try {
      const newUser = await registerService(req.body);
    
      // Send the newUser as  response;
      res.status(200).json({
        status: 201,
        success: true,
        message: " User created Successfully",
        user: newUser.uniqueName,
      });
    } catch (error: any) {
      // console the error to debug
      console.log(error);
      // Send the error message to the client
      res.status(400).json({
        status: 400,
        message: error.message.toString(),
      });
    }
  };

  export const loginController = async (req:Request, res:Response) => {
    try {
    const token = await loginService(req.body);
      // send the response
      res.status(200).json({
        status: 200,
        success: true,
        message: "login success",
        token: token,
      });
    } catch (error: any) {
      // Send the error message to the client
      res.status(400).json({
        status: 400,
        message: error.message.toString(),
      });
    }
  };