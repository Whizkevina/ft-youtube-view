/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

const YoutubeReport = ({ report }) => {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Youtube View Data</h2>
            </header>
            <div className="user-container">
                    { (report.length > 0 ) ? report.map( (report, index) => {
                        return(
                            <div key={index}>
                            <div className="info-item">
                                <p><strong>Message title:</strong> {report.Title}</p>
                                <p><strong>View:</strong> {report.ConcurrentViews}</p>
                                <p><strong>Published at:</strong> {report.PublishedAt}</p>
                            </div>
                            {/* <h5 className="info-item">View: {report.ConcurrentViews}</h5>
                            <h5 className="info-item">Published at: {report.PublishedAt}</h5> */}
                        </div>
                        )
                    }) : <p>Loading...</p>}
            </div>
        </div>

    );
}

export default YoutubeReport;