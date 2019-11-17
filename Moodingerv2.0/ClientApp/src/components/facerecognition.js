import React, { Component } from 'react';
import Brand from './Brand';
import '../styles.css';
import affdex from '../affdex.js';

export default class FaceRecognition extends Component {

    constructor() {
        super();
        this.state = {
            divRoot: this.refs.video,
            width: 640,
            height: 480,
            faceMode: affdex.FaceDetectorMode.LARGE_FACES,
            detector: new affdex.CameraDetector(this.divRoot, this.width, this.height, this.faceMode),
        }

        this.state.detector.detectAllEmotions();
        this.state.detector.detectAllExpressions();
        this.state.detector.detectAllEmojis();
        this.state.detector.detectAllAppearance();

        //Add a callback to notify when detector is stopped
        this.state.detector.addEventListener("onStopSuccess", function () {
            this.log('#logs', "The detector reports stopped");
        });

        //Add a callback to receive the results from processing an image.
        //The faces object contains the list of the faces detected in an image.
        //Faces object contains probabilities for all the different expressions, emotions and appearance metrics
        this.state.detector.addEventListener("onImageResultsSuccess", function (faces, image, timestamp) {
            if (faces.length > 0) {
                this.log('#results', "Appearance: " + JSON.stringify(faces[0].appearance));
                this.log('#results', "Emotions: " + JSON.stringify(faces[0].emotions, function (key, val) {
                    return val.toFixed ? Number(val.toFixed(0)) : val;
                }));
                this.log('#results', "Expressions: " + JSON.stringify(faces[0].expressions, function (key, val) {
                    return val.toFixed ? Number(val.toFixed(0)) : val;
                }));
                this.log('#results', "Emoji: " + faces[0].emojis.dominantEmoji);
                if (this.refs.canvas != null)
                    this.drawFeaturePoints(image, faces[0].featurePoints);
            }
        });
    }

    componentDidMount() {
        this.onStart();
    }

    //Draw the detected facial feature points on the image
    drawFeaturePoints(img, featurePoints) {
        var contxt = this.refs.canvas.getContext('2d');

        var hRatio = contxt.canvas.width / img.width;
        var vRatio = contxt.canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);

        contxt.strokeStyle = "#FFFFFF";
        for (var id in featurePoints) {
            contxt.beginPath();
            contxt.arc(featurePoints[id].x,
                featurePoints[id].y, 2, 0, 2 * Math.PI);
            contxt.stroke();

        }
    }

    log(node_name, msg) {
        console.log(node_name + ": " + msg);
    }


    onStart = () => {
        if (this.state.detector && !this.state.detector.isRunning) {
            this.state.detector.start();
            this.log('#logs', "Started");
        }

    }
    onStop() {
        this.log('#logs', "Clicked the stop button");
        if (this.state.detector && this.state.detector.isRunning) {
            this.state.detector.removeEventListener();
            this.state.stop();
        }
    };
    onReset() {
        this.log('#logs', "Clicked the reset button");
        if (this.state.detector && this.state.detector.isRunning) {
            this.state.detector.reset();
        }
    };

    render() {
        return (
            <div>

                <div id="facerec">
                    <Brand />
                    <h2>Face Recognition</h2>
                </div>
                <div id="affdex_elements">
                    <video id="face_video" autoPlay refs="video"></video>
                    <canvas id="face_video_canvas" width={640} height={425} refs="canvas"/>
                    <script type="text/javascript" src="https://download.affectiva.com/js/3.2.1/adapter-1.4.0.js" async />
                </div>

            </div>
        )
    }
}