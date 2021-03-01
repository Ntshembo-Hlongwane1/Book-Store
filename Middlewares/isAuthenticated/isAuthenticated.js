import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();
//cookie_secret

export const isAuthenticated = (request, response, next) =>{
  const token  = request.headers['x-auth-token'];
  jwt.verify(token, process.env.cookie_secret, (error, decoded)=>{
    if (error){
      return response.status(400).json({msg:'Login or SingUp to update personal information'})
    }
    request.user = decoded;
    next()
  })
}
