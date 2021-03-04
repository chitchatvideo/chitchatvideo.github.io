if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
  console.log("Let's get this party started")
}
navigator.mediaDevices.getUserMedia({video: true})
{
  video: {
    width: {
      min: 1280,
      ideal: 1920,
      max: 2560,
    },
    height: {
      min: 720,
      ideal: 1080,
      max: 1440
    },
    facingMode: 'user'
  }
}
 {
  video: {
    ...
    facingMode: {
      exact: 'environment'
    }
  }
}
 async function getDevices() {
  const devices = await navigator.mediaDevices.enumerateDevices();
}
 
