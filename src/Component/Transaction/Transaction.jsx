import React from 'react';

const Transaction = ({ datas, grandTotal }) => {
    return <div>
        { datas.map((data, id) => (
            <div key={id}>{data.name} - {data.summary} - {data.amount}</div>
        )) }
        <div>{ grandTotal }</div>
    </div>
}

export default Transaction;