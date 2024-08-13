let btincr = document.getElementById("incr");

// document.getElementById("p1").textContent = localStorage.getItem("score");
// document.getElementById("p2").textContent = sessionStorage.getItem("score");

btincr.addEventListener("click", handlein);

let btres = document.getElementById("reset");

btres.addEventListener("click", rescall);

function rescall() {
  localStorage.clear();
  sessionStorage.clear();
  document.getElementById("p1").textContent = 0;
  document.getElementById("p2").textContent = 0;
  initializeScores();
}

function handlein() {
  let locy = localStorage.getItem("score");
  locy++;
  localStorage.setItem("score", locy);
  document.getElementById("p1").textContent = locy;
  let sesy = sessionStorage.getItem("score");
  sesy++;
  sessionStorage.setItem("score", sesy);
  document.getElementById("p2").textContent = sesy;
}
