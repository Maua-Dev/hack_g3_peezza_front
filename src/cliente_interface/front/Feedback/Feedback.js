import React from 'react';
import './Feedback.css';
import { Top } from './Top/Top';
import { MidFeed } from './Mid/MidFeed';
import { BottomFeed } from './Bottom/BottomFeed';


export default function Feedback() {
    return(
      <div className='Feedback'>
        <Top></Top>
        <MidFeed></MidFeed>
        <BottomFeed></BottomFeed>
      </div>
    );
}