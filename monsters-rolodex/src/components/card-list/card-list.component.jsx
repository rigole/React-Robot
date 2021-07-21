import React from 'react';
import './card-list.style.css'

export const CardList = props => (
     <div className='card-list'>
        {props.billionaires.map(billionaire =>
            <h1 key={billionaire.id  }> {billionaire.name} </h1>
         )}
    </div>
);