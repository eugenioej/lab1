import React from 'react';
import { heroes } from './data/heroes';

export const Tercer = () => {
    const hero = heroes.find((hero) => hero.id === 2);

    return (
        <p>{hero ? hero.name : "Hero not found"}</p>
    );
};