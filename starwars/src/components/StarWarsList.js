import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import StarWarsCard from "./StarWarsCard";

export default function StarWarsList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        axios.get("https://swapi.co/api/people/")
            .then(response => {
                const characterArray = response.data.results
                console.log("This is the response " + characterArray);
                const characterKeys = Object.values(characterArray)
                console.log(Object.values(characterKeys))
                setCharacters(characterKeys)
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div className="character">
            {characters.map(character => {
                return <StarWarsCard character={character} key={character.id} />
            })}
        </div>
    )
}