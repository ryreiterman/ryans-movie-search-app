const favoriteMovie = require('../models/favoriteMovie');
const express = require('express');
const favoriteRouter = express.Router();

// CREATE FAVORITE

favoriteRouter.post('/', async (req, res) => {
    try {
        const newFavorite = await favoriteMovie.create(req.body);

        res
        .status(200)
        .json(newFavorite)
    } catch(error) {
        res
        .status(400)
        .json(error)
    }
})


// INDEX (GRAB ALL FAVORITES)

favoriteRouter.get('/', async (req, res) => {
    try {
        const foundFavorites = await favoriteMovie.find({})

        res
        .status(200)
        .json(foundFavorites);

    } catch(error) {
        res
        .status(400)
        .json(error);
    }
})







module.exports = favoriteRouter;