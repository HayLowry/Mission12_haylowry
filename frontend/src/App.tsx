import React from 'react';
import './App.css';
import teamsJson from './teams.json';

const teamsList = teamsJson["teams"]

class Team extends React.Component {
  render() {
    const displayTeams = [];
    for (let i = 0; i < teamsList.length; i++) {
      displayTeams.push(<h2>{teamsList[i].school}</h2>)
      displayTeams.push(<p>Mascott: {teamsList[i].name}</p>)
      displayTeams.push(<p>Location: {teamsList[i].city}, {teamsList[i].state}</p>)
      displayTeams.push(<br></br>)
    }

    return <div>{displayTeams}</div>;
  }
}

function TeamList() {
  return (
    <div>
      <Team/>
    </div>
  );
  
}

function Header() {
  return (
    <div>
      <h1>NCAA Baskeball Teams</h1>
      <h4>Teams are listed below</h4>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body>
        <TeamList/>
      </body>
    </div>
  );
}

export default App;
