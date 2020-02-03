import React from 'react';


const authContext = React.createContext({
    stocks: [],
    stocksValues: [],
    cart: [],
    cartValues: [],
});

export default authContext;