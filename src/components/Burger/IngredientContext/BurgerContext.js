import React from 'react';

const BurgerContext = React.createContext(
    {
        ingredients:null,
        price:0
    }
);

export default BurgerContext;