const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select media stream, pass to video element then play
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(error)
    }
}

// On Load
selectMediaStream();

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;

    // Start Picture and Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});
