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

// Show (Individual favorite movie)

favoriteRouter.get('/:id', async (req, res) => {
    try {
        const foundFavorites = await favoriteMovie.findById(req.params.id)
        // await foundFavorites.execPopulate('comments')

        res
        .status(200)
        .json(foundFavorites)

    } catch (error) {
        res
        .status(400)
        .json(error)

    }
})

//Destroy

favoriteRouter.delete('/:id', async (req, res) => {
	try {
		const foundFavorites = await favoriteMovie.findByIdAndDelete(req.params.id);

        res
        .status(200)
        .json(foundFavorites);
	} catch (error) {
        res
        .status(400)
        .json(error);
	}
});

// Update

favoriteRouter.put('/:id', async (req, res) => {
	try {
		const foundFavorites = await favoriteMovie.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		});

        res
        .status(200)
        .json(foundFavorites);
	} catch (error) {
        res
        .status(400)
        .json(error);
	}
});


module.exports = favoriteRouter;