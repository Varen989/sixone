const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");
const btn = document.getElementById("btn");

let playing = false;

function toggleMusic() {
    if (!playing) {
        audio.play();
        btn.innerText = "⏸";
    } else {
        audio.pause();
        btn.innerText = "▶";
    }
    playing = !playing;
}

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
    current.innerText = format(audio.currentTime);
    duration.innerText = format(audio.duration);
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

function format(t) {
    let m = Math.floor(t / 60);
    let s = Math.floor(t % 60);
    return m + ":" + (s < 10 ? "0" + s : s);
}