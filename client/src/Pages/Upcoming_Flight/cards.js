import * as React from 'react';
import './cards.css';
import Axios from 'axios';
import {useState} from 'react';

function UpcomingFlights() {
    return (
        <div>
        <h1 class="test"><center>Upcoming Flights</center></h1>  
        <main class="page-content">
    <div class="card">
      <div class="content">
        <h2 class="title">BIA - BOM</h2>
        <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
        <button class="btn">Book Now</button>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2 class="title">DEL - DPS</h2>
        <p class="copy">Plan your next beach trip with these fabulous destinations</p>
        <button class="btn">Book Now</button>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2 class="title">BKK - BIA</h2>
        <p class="copy">It's the desert you've always dreamed of</p>
        <button class="btn">Book Now</button>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2 class="title">DPS - DEL</h2>
        <p class="copy">Seriously, straight up, just blast off into outer space today</p>
        <button class="btn">Book Now</button>
      </div>
    </div>
    <div class="card">
        <div class="content">
          <h2 class="title">BIA - BKK</h2>
          <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
          <button class="btn">Book Now</button>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <h2 class="title">BOM - BIA</h2>
          <p class="copy">Plan your next beach trip with these fabulous destinations</p>
          <button class="btn">Book Now</button>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <h2 class="title">BIA - DEL</h2>
          <p class="copy">It's the desert you've always dreamed of</p>
          <button class="btn">Book Now</button>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <h2 class="title">BKK - MAA</h2>
          <p class="copy">Seriously, straight up, just blast off into outer space today</p>
          <button class="btn">Book Now</button>
        </div>
      </div>
      </main>
  </div>
    );
    }

    export default UpcomingFlights;