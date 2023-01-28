const express = require('express');
const router = express.Router();

const { addSandwich, getSandwiches, editSandwich, deleteSandwich } = require('../controllers/sandwich');

router.post('/', addSandwich)
router.get('/', getSandwiches)
router.put('/:id', editSandwich)
router.patch('/delete/:id', deleteSandwich)

module.exports= router