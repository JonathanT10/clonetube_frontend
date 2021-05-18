import React from 'react';
import '../styles/_video.css';

function selectVideo(videoIdObj, onVideoSelected) {
    onVideoSelected(videoIdObj.videoid);
}

function getCss(imageurl) {
    const _tyles = {
        backgroungImage: `url(${imageurl})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "180px",
        position: "relative"
    };
    return -styles;
}

function constructVideoTitles(videosData, onVideoSelected) {
    return videosData.map(({ snippet, id}, index) => {
        return (
            <div
            className="video"
            key={index}
            onClick={() => selectVideo(id, onVideoSelected)}>
                <div style={getCss(snippet.thumbnails.high.url)} key={index} />
                <p className="title">{snippet.title}</p>
            </div>
        );
    });
}

const Video = ({data, onVideoSelected}) => {
    return <>{constructVidoeTitles(data, onVideoSelected)}</>;
};

export default Video;