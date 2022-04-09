import React from 'react';
import './Style.css'

function Player() {
  return (
    <div>
          <form>
        <label>
          <h1>Player</h1>
          <br/> <input type="text" name="Login" /><br/> 
        </label>
        <br/> <input type="submit" value="Submit" />
      </form>
      <img src="/images/Lebron.jpeg" alt=""/>
<p>Statistics</p>
<p>Points: 30</p>
<p>Rebounds: 5 </p>
<p>Steals: 5</p>
    </div>

  )
}

export default Player;