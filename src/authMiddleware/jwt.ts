import { sign, verify } from "jsonwebtoken";
import { type Request, type Response, type NextFunction } from "express";


export const createToken = (data:any) => {
  const accessToken = sign(
    { _id: data?._id, uniqueName: data?.uniqueName },
    process.env.TOKEN_SECERET as string,
    {
      expiresIn: "1d",
    }
  );

  return accessToken;
};

export const validateToken = (req:Request, res:Response, next:NextFunction) => {
  const accessToken = req.headers["access-token"] as string;
  

  if (!accessToken)
    return res.status(400).json({ error: "User not Authenticated!" });

  try {
    const validToken = verify(accessToken, process.env.TOKEN_SECERET as string);
    if ( typeof validToken === "object" ) {
        req.userId = validToken._id;
      return next();
    }else{
        return res.status(400).json({ error: "User not Authenticated!" });
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
 
