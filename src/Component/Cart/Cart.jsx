import React from "react";

const Cart = ({ datas }) => {
    return <div>
        { datas.map((data, id) => (
            <div key={id}>{data.name} - {data.summary} - {data.amount}</div>
        )) }
    </div>
}

export default Cart;