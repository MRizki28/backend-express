const { request } = require('express');
const { Users } = require('../../models/index');
const { Mahasiswa } = require('../../models/index');
const Joi = require('joi');


const getAll = async (request, response) => {
    const users = await Users.findAll();
    return response.status(200).json({
        data: users,
        message: 'success nih'
    });
}

const createData = async (request, response) => {
    const scheme = Joi.object({
        nama_mahasiswa: Joi.string().required()
    });

    const { error } = scheme.validate(request.body);
    if (error) {
        return response.status(400).json({
            message: 'check your validation',
        })
    }

    try {
        const { nama_mahasiswa, nim, alamat } = request.body;

        const newMahasiswa = await Mahasiswa.create({
            nama_mahasiswa,
            nim,
            alamat
        });

        return response.status(200).json({
            data: newMahasiswa,
            message: 'Success create mahasiswa'
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            message: 'internal server error'
        });
    }
}


module.exports = {
    getAll,
    createData
}
