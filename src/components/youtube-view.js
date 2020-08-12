import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../App.css";

const youtubeAPI = "https://ftapp.lfcww.org/api/reports/GetYoutubeData";

function YoutubeView() {
  const [youtubeData, setUserData] = useState({});

  useEffect(() => {
    getYoutubeViewWithAxios();
  }, []);

  const getYoutubeViewWithAxios = async () => {
      const response = await axios.get('http://localhost:3000/api/');
      console.log(response);
      setUserData(response.data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Youtube View Data</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">{youtubeData.Title}</h5>
        <h5 className="info-item">{youtubeData.ConcurrentViews}</h5>
        <h5 className="info-item">{youtubeData.PublishedAt}</h5>
        {/* <h5 className="info-item">{userData.company}</h5> */}
      </div>
    </div>
  );
}

export default YoutubeView;