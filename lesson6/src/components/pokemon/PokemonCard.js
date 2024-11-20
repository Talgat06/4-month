import React, { useEffect, useState } from 'react';
import classes from "./PokemonCard.module.scss";
import ModalPokemon from "../modalPokemon/Modal";
import Modal from "../modalPokemon/Modal";

const PokemonCard = ({ pokemonUrl }) => {
    const [pokemon, setPokemon] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch(pokemonUrl);
                const data = await response.json();
                setPokemon(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPokemon();
    }, [pokemonUrl]);

    if (!pokemon) return null;

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <div className={classes.pokemonCard}>
            <div className={classes.pokeInfo}>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                <h3>{pokemon.name}</h3>
            </div>
            <button onClick={handleShow}>Подробнее</button>

            {show && (
                <ModalPokemon handleShow={handleShow}>
                    {pokemon.name}
                    <div>Abilities: {pokemon.abilities.map(value=> value.ability.name).join(', ')}</div>
                    <div>Some moves: {pokemon.moves.slice(0,5).map(value=> value.move.name).join(', ')}</div>
                </ModalPokemon>
            )}
        </div>
    );
};

export default PokemonCard;
