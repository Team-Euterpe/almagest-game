var hat = document.getElementById("hat");
var header = document.getElementById("header");
var BPMdisp = document.getElementById("bpm");
var onoffdisp = document.getElementById("onoff");
var BPM = 110;
var on = false;
function play() {
  hat.currentTime = 0;
  hat.play();
  header.className = (header.className == 'active') ? '' : 'active';
}
function up() {
  if (BPM < 220)
    BPM += 10;
  refreshBPM();
}
function down() {
  if (BPM > 40)
    BPM -= 10;
  refreshBPM();
}
function onoff() {
  if (on) {
    on = false;
    onoffdisp.innerHTML = "Play";
  } else {
    on = true;
    onoffdisp.innerHTML = "Pause";
  }
}
function refreshBPM() {
  BPMdisp.innerHTML = BPM + " BPM";
}
(function() {
  refreshBPM();
  (function loop(){
    if (on)
      play();
    setTimeout(loop, (60 / BPM) * 1000);
  })()
})()