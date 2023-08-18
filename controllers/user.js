const { response } = require('express');
const getUsers = async (req, res = response) => {
    const params = req.query;
    res.status(201).json({
        msg: 'get API - controller',
        params
    });
};

const postUsers = async (req, res = response) => {
    console.log(req.body);
    res.status(201).json({
        msg: 'post API - controller',
        body: req.body
    });
}

const putUsers = async (req, res = response) => {
    const id = req.params.id;
    res.status(201).json({
        msg: 'put API - controller',
        id
    });
}

const deleteUsers = async (req, res = response) => {
    res.status(201).json({
        msg: 'delete API - controller'
    });
}


module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
}