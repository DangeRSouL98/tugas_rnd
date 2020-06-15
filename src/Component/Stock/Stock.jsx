import React from 'react';

const Stock = ( {stock, incrementStock, decrementStock} ) => {
    return (
        <div>
            <div onClick = { decrementStock }>-</div>
            { stock }
            <div onClick = { incrementStock }>+</div>
        </div>
    );
};

export default Stock;