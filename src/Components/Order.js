import React, { useEffect, useState } from 'react';

const Order = () => {
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/orders', {
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    } ,[])
    return (
        <div>
            <h2 className='text-5xl'> Order Page</h2>
        </div>
    );
};

export default Order;