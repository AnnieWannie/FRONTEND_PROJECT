import React from 'react';
import { useState } from "react";
import './Style.css'


function Player() {
  return(
    <div>
      <TeamMount />
      <PlayerMount/>
    </div>

  );
}



function UserInputTeam() {
  const [teamChoice, setTeamChoice] = useState("");
  var teamChange = (event) => {
  setTeamChoice(event.target.value);
  };
  return (
  <div>
   <form>
   <label for="teamName">Team Selection</label>{' '}<input id="teamName" type="text" onChange={teamChange} />
   <input type="submit" value="Submit"></input>
   </form>
   <TeamMount/>
   {/* <PlayerMount/> */}
  </div>
  );
 }





class TeamMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team:[]
    };
  }
  
  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        'X-RapidAPI-Key': '714175ce39mshc175e3a1c1dd1f3p161e71jsndd6a5ded4afe'
      }
    };
    
    fetch('https://free-nba.p.rapidapi.com/teams?page=0', options)
      .then(response => response.json())
      .then(response => {
        this.setState({
        team: response.data
      })
    })
    
      .catch(err => console.error(err));
  }

  render() {
    const {team} = this.state;
    let teamHolder;
      return (
        <h4>
          Team Information <br></br>
        {teamHolder = team.map(teams => (
              <ul>
                <li key={teams.id}>
                  Team Name: {teams.full_name} Conference: {teams.conference} | 
                </li><br></br>
              </ul>
          ))}
        </h4>
      );
    }
}

class PlayerMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player:[]
    };
  }
  
  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        'X-RapidAPI-Key': '714175ce39mshc175e3a1c1dd1f3p161e71jsndd6a5ded4afe'
      }
    };
    
    fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
      .then(response => response.json())
      .then(response => {
        this.setState({
        player: response.data
      })
    })
    
      .catch(err => console.error(err));
  }

  render() {
    const {player} = this.state;
    let playerHolder;
      return (
        <h4>
        {playerHolder = player.map(players => (
              <ul>
                <li key={players.id}>
                  First Name: {players.first_name} Last Name: {players.last_name} Position:{players.position} Height: {players.height_feet}ft {players.height_inches}in 
                </li>
              </ul>
          ))}
        </h4>
      );
    }
}

export default Player;