import React from 'react';
import { zodiac } from '../../data';
import './Main.css';
import background from '../../astrological-background-with-zodiac-signs-and-symbol-photo.jpg';
import Zodiac from '../Zodiac/Zodiac.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((signs) => (
        <Zodiac key={signs.id} zodiac={signs} />
      ))}
    </main>
  );
}
