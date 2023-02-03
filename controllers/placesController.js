const Place = require('../models/placeModel');
const mongoose = require('mongoose');

const getAllPlaces = async (req, res) => {
    const places = await Place.find({});
    
    if(!places){
        res.status(400).json({msg: 'Unable to get'});
    }

    res.status(200).json(places);
}

const createPlace = async (req, res) => {
    const {placeName, location, description, tags, image} = req.body;

    try{
        const place = await Place.create({placeName, location, description, tags, image});
        res.status(200).json(place);
    }catch (error){
        res.status(400).json({error: error.message});
    }

}

const deletePlace = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'That place does not exist!'});
    }

    const place = await Place.findByIdAndRemove({_id: id});
        
    if(!place){
        res.status(400).json({error: 'That place does not exist!'});
    }

    res.status(200).json(place);
}

const updatePlace = async (req, res) => {

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'That place does not exist!'});
    }

    const place = await Place.findOneAndUpdate({_id: id},{...req.body});

    if(!place){
        return res.status(404).json({error: 'That place does not exist!'});
    }

    res.status(200).json(place);
}

module.exports = {getAllPlaces, createPlace, deletePlace, updatePlace};