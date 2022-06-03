const todoModel = require('../Model/todoModel').getTodoModel;
exports.getTodos = async (req, res) => {
    try {
        const data = await todoModel.find()
        res.status(200).send({ data, status: true, message: "get todo successfully" });
    }
    catch (err) {
        res.status(400).send({ status: false, err })
    }
};

exports.createTodos = async (req, res) => {
    try {
        const todo = req.body?.todo;
        const data = await todoModel.create({ todo });
        res.status(200).send({ data, status: true, message: "created todo successfully" });
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ status: false, err })
    }
};