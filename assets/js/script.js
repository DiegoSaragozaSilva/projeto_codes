document.addEventListener("keypress", function(key){
	if(key.keyCode === 13){
		toggleFullScreen();
		console.log("VAI SE FODER GABRIEL SEU PAI É CORNO")
	}
})

function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen(); 
    }
  }
}
