const {Users} = require('../../models/index');

const getAll = async(request, response)=>{
    const users = await Users.findAll();
    return response.status(200).json({
        data: users,
        message: 'success nih'
    });
}

module.exports = {
    getAll
}