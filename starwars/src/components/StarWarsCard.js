import React from "react";
import styled from "styled-components";

const StarWarsCard = ({ character }) => {

    const CharacterCard = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: auto;
    justify-content: space-between;
    width: 500px;
    margin: auto;
    border-style: dashed;
    `;

    return (
        <div key={character.id}>
        <CharacterCard>
            <h2>{character.name} - </h2>
            <h3>{character.gender}</h3>
            <p>Birth Year: {character.birth_year}</p>
            <p>Skin Color: {character.skin_color}</p>
        </CharacterCard>
        </div>
    );
};

export default StarWarsCard;