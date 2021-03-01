import { IncomingForm } from 'formidable';
import { user } from '../../Models/Users/User'

class AccountManager{

  UpdateUserInfo(request, response){
    const form = new IncomingForm();
    try{
      form.parse(request, async (error, fields, files)=>{
        if (error){
          return response.status(500).json({msg:'Network Error: Failed to update personal information'})
        }
        const { name, email, nickname, home_address } = fields;
        if (!name && !email && !nickname && !home_address){
          return response.status(400).json({msg:'At least 1 field is required'})
        }
        const userSession = request.user.data;
        const user_email = userSession.email
        const isUserExisting = await user.findOne({email:user_email});
        if (!isUserExisting){
          return response.status(404).json({msg:'Account with this email does not exist'})
        }
        const userDoc = isUserExisting;

        userDoc.name = name ? name : userDoc.name;
        userDoc.email = email ? email : userDoc.email;
        userDoc.nickname   = nickname ? nickname : userDoc.nickname;
        userDoc.homeAddress   = home_address ? home_address : userDoc.homeAddress;

        const updatedDoc = await user.findOneAndUpdate({email:user_email}, userDoc, {new:true})

        return response.status(200).json({msg:'Personal information updated'})

      })
    }catch(error){
      return response.status(500).json({msg:'Network Error: Failed to update personal information'})
    }
  }

}

export { AccountManager }
