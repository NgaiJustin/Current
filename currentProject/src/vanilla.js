function vanilla() {
        console.log("looking for window")
        if (window.location.href === "http://192.168.1.2:3000" || window.location.href === "http://localhost:3000/videochat") { 
            VideoChatScript()
        }
        else {
            console.log("Not runing vanilla.js")
        }
}

function VideoChatScript(){
    console.log('Running vanilla.js VideoChatScript')
    //Get the grid
    const videoGrid = document.getElementById('video-grid')
    //Create video elementt
    const myVideo = document.createElement('video')
    myVideo.muted = true

    //Get stream
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      }).then(stream => {
        addVideoStream(myVideo, stream)
      })

    //Add the stream to the video object and append it to html
    function addVideoStream(video, stream) {
        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
          video.play()
        })
        videoGrid.append(video)
      }

}

window.onload = vanilla