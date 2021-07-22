import React from "react";
import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <img
            alt='monster'
            src={`https://robohash.org/${props.billionaire.id}1?set=set2&size=180x180`}
        />
        <h1> {props.billionaire.name} </h1>
    </div>
)