import React from 'react';
import '../styles/mainDash.css';
import Cards from './cards/Cards';
import Table from "../components/table.js";

const MainDash = (props) => {
    return (
        <div className="mainDash">
            <h1>Dashboard</h1>
        <Cards/>
       <h2>Recent Order</h2> 
       <Table/>
        </div>
    );
};

export default MainDash;