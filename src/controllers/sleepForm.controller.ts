import   { NextFunction, Request, Response }  from "express";
import { getFormDataService, updateFormService} from "../services/sleepForm.service";

export const updateFormController = async (req:Request, res:Response,next:NextFunction) => {
  try {
    const userId = req.userId;
    const result = await updateFormService(req.body,userId);
  
    res.status(200).json({
      status: 201,
      success: true,
      message: "Updated sleep changes question responses Successfully",
      result:result
    });
  } catch (error: any) {
    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
};

export const getFormDataController = async (req:Request, res:Response,next:NextFunction) => {
  try {
    const userId = req.userId;
    const result = await getFormDataService(userId);
  
    res.status(200).json({
      status: 201,
      success: true,
      message: "Data feteched successfully",
      result:result
    });
  } catch (error: any) {
    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
};
