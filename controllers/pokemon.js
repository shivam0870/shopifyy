import { dummyPokemonArray } from "../data/pokemonData.js"
import { Adopted } from "../models/adopted.js";

export const allPokemon = async (req, res) => {
    
    const adoptedPokemon = await Adopted.find({ });

    const availablePokemon = dummyPokemonArray.filter((element) => !adoptedPokemon.find(obj => obj.name === element.name ));

    res.status(200)
        .json({
            success: true,
            pokemon: availablePokemon,
        })
}

export const adopt = async (req, res, next) => {
    try {
        const { name, breed, age, healthStatus } = req.body;

        await Adopted.create({
            name, breed, age, healthStatus, user: req.user,
        });

        res.status(201).json({
            success: true,
            message: "The Pokemon has been Adopted Successfully",
        });
    } catch (error) {
        
    }
};

export const getMyPokemon = async (req, res, next) => {
    try {
        const userid = req.user._id;

        const adoptedPokemon = await Adopted.find({ user: userid });
        res.status(200).json({
            success: true,
            adoptedPokemon,
        });
    } catch (error) {
       
    }
};

export const feed = async (req, res, next) => {
    
    try {
        const adoptedPokemon = await Adopted.findById(req.params.id);


        adoptedPokemon.healthStatus + 10 > 100 ? adoptedPokemon.healthStatus = 100 : adoptedPokemon.healthStatus += 10;
        adoptedPokemon.createdAt = Date.now();
        await adoptedPokemon.save();

        res.status(200).json({
            success: true,
            message: "The Pokemon has been Feeded Successfully",
        });
    } catch (error) {
        
    }
};
