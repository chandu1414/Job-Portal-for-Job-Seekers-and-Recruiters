function login(){
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("login-msg");

  if(username === "" || password === ""){
    msg.textContent = "Please enter all fields";
    msg.style.color = "red";
    return;
  }

  document.getElementById("login-section").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  document.getElementById("user").textContent = username;
}

function submitQuiz(){
  let score = 0;
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');

  if(q1) score += parseInt(q1.value);
  if(q2) score += parseInt(q2.value);

  document.getElementById("score").textContent =
    "Your Score: " + score + "/2";
}
