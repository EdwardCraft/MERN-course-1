//Routes of the diferents tasks
const express = require('express');
const router = express.Router();

//Almacenamos el modelo en Task
const Task = require('../models/task')

router.get('/', async (req, res) => {
    //await: tarea va a tomar tiempo y lo guadaremos
    const task = await Task.find();
    console.log(task);
    res.json(task);
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    console.log(task);
    //Vamos a esperar a que termime de guardar
    await task.save();
    res.json({ status: 'Task Saved.' });
});

router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    await Task.findByIdAndUpdate(req.params.id, newTask);

    res.json({ status: 'Task Updated' });

});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({ status: 'Task Deleted' });
});



module.exports = router;