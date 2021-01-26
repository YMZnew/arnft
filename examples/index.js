let sourceVideo;
let targetCanvas;

async function initCamera() {


var aspect = 640/480
  const constraints = {
    audio: false,
    video: {
     // facingMode: "environment",
      facingMode: "user",
      width: 640,
      height: 480
     //  aspectRatio : { ideal : aspect}
      //frameRate: { max: config.video.fps }
    }
  };

  // initialize video source
  const video = document.querySelector("#video");
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  video.srcObject = stream;

  return new Promise(resolve => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
};

function initTargetCanvas() {
  // target canvas should overlap source video
  targetCanvas = document.querySelector("#canvas");
  targetCanvas.width = sourceVideo.width;
  targetCanvas.height = sourceVideo.height;
}
