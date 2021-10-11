import React from 'react';
import './style/index';

export interface ICard {
    title: string;
    body: string;
}
const Card: React.FC<ICard> = ({ title, body }: ICard) => {
    return (
        <div className='card'>
            <div className='card-title'>{title}</div>
            <div className='card-body'>{body}</div>
        </div>
    );
};

export default Card;
