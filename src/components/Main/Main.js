import React from 'react';
import { zodiac } from '../../data';
import './Main.css';
import background from '../../very-zodiac-like.jpg';

export default function Main() {
  return <main style={{ backgroundImage: `url(${background})` }}></main>;
}
