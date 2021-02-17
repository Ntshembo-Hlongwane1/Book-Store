import { IncomingForm } from 'formidable'
import { hash, genSalt, compare } from 'bcrypt';
import { user } from '../../Models/Users/User'


class AuthController{

  Signup(request, response){
    try {
      const form = new IncomingForm();
      form.parse(request, async (error, fields, files)=>{
        if (error){
          return response.status(500).json({msg:"Network Error: Failed to signup user"})
        }
        const { email, name, nickname, password } = fields;
        if (!email || !name || !nickname || !password){
          return response.status(400).json({msg:'All fields are required'})
        }

        if (password.length < 8){
          return response.status(400).json({msg:'Password has to be at least 8 characters long'})
        }

        const isEmailExisting = await user.findOne({email:email})
        if (isEmailExisting){
          return response.status(400).json({msg:'Account with this email already exist'})
        }

        const salt = await genSalt(15);
        const hashedPassword = await hash(password, salt)

        const newUser = new user({
          email,
          name,
          nickname,
          password:hashedPassword
        })

        const savedUser = await newUser.save();

        return response.status(201).json({msg:'Account Successfuly created'})

      })
    } catch (error) {
      return response.status(500).json({msg:"Network Error: Failed to signup user"})
    }
  }
}

export { AuthController }
