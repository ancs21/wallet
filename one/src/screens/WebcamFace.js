import React from 'react';
import Webcam from 'react-webcam';

class WebcamFace extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  
  }
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc)
  };

  render() {
    const videoConstraints = {
      width: 200,
      height: 200,
      facingMode: 'user',
    };
    return (
      
      <div style={{width: '200px', padding: '20px auto', }}>
        <Webcam
            audio={false}
            height={200}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={200}
            videoConstraints={videoConstraints}
          />
          <button onClick={this.capture}>Capture photo</button>
      </div>
    )
  }
}

export default WebcamFace;