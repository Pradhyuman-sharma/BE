import { createToken } from "../authMiddleware/jwt";
import SleepForm from "../models/sleepForm.model";
import User from "../models/user.model";
import bcrypt from "bcrypt";

export const registerService = async(user:any)=>{
       // ** destructure the information from user;
       const { uniqueName, password } = user;
  
       // ** Check the email all ready exist  in database or not ;  
       const isNameAlreadyExist = await User.findOne({
         uniqueName: uniqueName,
       });
 
       if (isNameAlreadyExist) {
    
         throw Error("User already exist please choose a unique name");
       }
   
       // ** if not create a new user ;
       // now create the user;
      
       const hashedPass = bcrypt.hashSync(password, 10);
       const newUser = await User.create({
         uniqueName,
         password:hashedPass,
       });

       //also creating a sleep form empty record for user after registration and later updating it with values
       //Please note:- I am doing this to avoid repetation of creating record while accessing any sleep form api. I can also do like when
       //we access any api then we can create the record if exist then update but if we access api in any order I need to add create condition
       // in each of them which is fine to but here after registering we can aviod repeatation
       
       await SleepForm.create({  //created record rest fields are null will be updated on values.
        userId:newUser._id
       })

       return newUser;
}

export const loginService  = async(user:any)=>{
    const { uniqueName, password } = user;
  
    const isUserExist = await User.findOne({
      uniqueName: uniqueName,
    });

    // ** if there is not any user we will send user not found;
    if (!isUserExist) {
      throw Error("User not found")
    }

    // ** if the (user) exist  in database we will check the password is valid or not ;
    // **  compare the password in db and the password sended in the request body

    const isPasswordMatched = bcrypt.compareSync(password,isUserExist?.password);

    // ** if not matched send response that wrong password;

    if (!isPasswordMatched) {
      throw Error("Incorrect Password")
    }

    // ** if the email and password is valid create a token
    const token = createToken(isUserExist);
    return token;

}