import React from 'react';
import './card-list.style.css'
import {Card} from "../card/card.component";

export const CardList = props => (
     <div className='card-list'>
        {props.billionaires.map(billionaire =>
           <Card key={billionaire.id} billionaire={billionaire}/>
         )}
    </div>
);