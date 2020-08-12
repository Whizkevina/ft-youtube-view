/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

const YoutubeReport = ({ reports }) => {
    return (
        <div>
            <div>Message title: </div>
            <div>View: </div>
            <div>Published: </div>
        
            { (reports.length > 0 ) ? reports.map( (report, index) => {
                return(
                    <div key={index}>
                    <div>{report.Title}</div>
                    <div>{report.ConcurrentViews}</div>
                    <div>{report.PublishedAt}</div>
                </div>
                )
            }) : <p>Loading...</p>}

        </div>

    );
}

export default YoutubeReport;