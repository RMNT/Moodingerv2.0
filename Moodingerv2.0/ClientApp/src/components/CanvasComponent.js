import React, { Component } from 'react';

export default class Canvas extends Component {
    constructor() {
        var divRoot = $("#affdex_elements")[0];
        var width = 640;
        var height = 480;
        var faceMode = affdex.FaceDetectorMode.LARGE_FACES;
    }

    render() {
        return (
            <div>
                <video id="face_video" autoplay></video>
                {/*<canvas id="face_video_canvas" width={640} height={425} />*/}
                <script type="text/javascript" src="https://download.affectiva.com/js/3.2.1/adapter-1.4.0.js"></script>
            </div>
        )
    }
}
