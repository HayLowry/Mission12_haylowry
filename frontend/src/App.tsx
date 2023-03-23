import React from 'react';
import logo from './logo.svg';
import './App.css';
import teamsJson from './teams.json';

const teamsList = teamsJson["teams"]

class Team extends React.Component {
  render() {
    const oneTeam = this.props;
    return(
      <div>
        <h2>{oneTeam}</h2>
        <p>Mascot: {oneTeam.name}</p>
        <p>Location: {oneTeam.city}, {oneTeam.state}</p>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      <Team {...teamsList} />
    </div>
  )
}

function Header() {
  return (<h1>NCAA Baskeball Teams</h1>);
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
