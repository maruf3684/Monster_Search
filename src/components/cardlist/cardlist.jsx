import React from 'react';
import './cardlist.css'
import Card from "../card/card";


const Cardlist = (props) => {
    return (
        <div className="kk">
        <div className="card-list" >
            {props.monsters.map((monsters)=>{return <Card key={monsters.id} monsters={monsters} />})}
        </div>
        </div>
    );
};

export default Cardlist;