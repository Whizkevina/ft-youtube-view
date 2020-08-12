import React, { Component } from 'react';
import axios from 'axios';
import YoutubeReport from './components/youtube-report';
import YoutubeView from './components/youtube-view';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/api/')
      .then(res => {
        this.setState({
          report: res.data,
        });
      })
      .catch(err => {
        console.log('Error from Youtube report');
      });
    }
  render() {
    return (
      <div className="App">
      <YoutubeReport report={ this.state.report }/>  
      {/* <YoutubeView/> */}
      </div>
    );
  }
  
}

export default App;
