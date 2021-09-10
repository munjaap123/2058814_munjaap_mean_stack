let userModel = require("../model/user.model");

let signUp = async(request, response)=> {
        let user = request.body;
        let userInfo = await userModel.findOne({email:user.email});
        let result = await userModel.insertMany(user);
}

let signIn = async (request,response) => {

}

module.exports={signIn,signUp}