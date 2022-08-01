import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/orders', {
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            // if token not valied or wrong sent to login page
            if(res.status === 401 || res.status === 403){
                navigate('/login');
            }
            console.log(res);
            // multiline by default not return so need to return
            return res.json()
        })
        .then(data => {
            console.log(data);
            setOrders(data);
        })
    } ,[])
    return (
        <div>
            <h2 className='text-5xl'> Order Page : {orders.length} </h2>
        </div>
    );
};

export default Order;