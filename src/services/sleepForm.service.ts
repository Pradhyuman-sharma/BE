import SleepForm from "../models/sleepForm.model";

export const updateFormService = async(data:any,userId:string)=>{
  //Updating or inserting new field or changes
  const value = data.updateValue;
  const updateSleepFormData = await SleepForm.findOneAndUpdate({userId: userId},
  value
   ,{new:true,runValidators: true,});

  if (!updateSleepFormData) {
    throw Error("Not able to find the record");
  }

  return updateSleepFormData;
}

export const getFormDataService = async(userId:string)=>{
  const data = await SleepForm.findOne({userId: userId});
  if (!data) {
    throw Error("Not able to find the record");
  }

  return data;
}
