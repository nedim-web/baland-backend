const express = require('express');
const router = express.Router();
const {getAllPlaces, createPlace, deletePlace, updatePlace} = require('../controllers/placesController');

router.get('/', getAllPlaces)
    .post('/', createPlace)
    .delete('/:id', deletePlace)
    .patch('/:id', updatePlace)

module.exports = router;