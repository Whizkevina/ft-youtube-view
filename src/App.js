import React, { Component } from 'react';
import YoutubeReport from './components/youtube-report';
import YoutubeView from './components/youtube-view';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/')
    .then(res => res.json())
    .then(json => json.reports)
    .then(reports => this.setState({'reports': reports}))
  }

  render() {
    return (
      <div className="App">
      {/* <YoutubeReport reports={ this.state.reports }/>   */}
      <YoutubeView/>
      </div>
    );
  }
  
}

export default App;
