
let box2 = document.getElementById("box2");

console.log(box2);

for (let i = 1; i <= 44; i++) {
  let boxAudio = document.createElement("div");
  boxAudio.classList.add(`boxAudio_${i}`);
  box2.append(boxAudio);
  boxAudio.style.marginTop = "100px";
  boxAudio.style.border = "2px solid red";
  boxAudio.style.background = "gray";
  boxAudio.innerHTML = `
  <h2>Test-${i}</h2>
  <span>
  <h5>part 1</h5>
  <audio controls>
    <source
    src="./listenig/listening_A+/Test-${i}/Listening (A2+) Test ${i} Part_1.mp3"
      type="audio/ogg"
    />
  </audio>
  </span>
  <span>
  <h5>part 2</h5>
  <audio controls>
    <source
    src="./listenig/listening_A+/Test-${i}/Listening (A2+) Test ${i} Part_2.mp3"
      type="audio/ogg"
    />
  </audio>
  </span>
  <span>
  <h5>part 3</h5>
  <audio controls>
    <source
    src="./listenig/listening_A+/Test-${i}/Listening (A2+) Test ${i} Part_3.mp3"
      type="audio/ogg"
    />
  </audio>
  </span>
  <span>
  <h5>part 4</h5>
  <audio controls>
    <source
    src="./listenig/listening_A+/Test-${i}/Listening (A2+) Test ${i} Part_4.mp3"
      type="audio/ogg"
    />
  </audio>
  </span>
  <span>
  <h5>part 5</h5>
  <audio controls>
    <source
    src="./listenig/listening_A+/Test-${i}/Listening (A2+) Test ${i} Part_5.mp3"
      type="audio/ogg"
    />
  </audio>
  </span>
  `
 
  
}