const loginBtn = document.getElementById("loginBtn");
const loginBox = document.querySelector(".loginBx");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // ❌ Empty Validation
  if (username === "" || password === "") {
    loginBox.style.animation = "shake 0.4s ease";
    setTimeout(() => {
      loginBox.style.animation = "";
    }, 400);
    return;
  }

  // 🔄 Loading Effect
  loginBtn.value = "Signing In...";
  loginBtn.disabled = true;
  loginBtn.style.opacity = "0.7";

  setTimeout(() => {
    loginBtn.value = "Success ✓";

    // 🎬 Cinematic Page Rotate
    document.body.style.transition = "1s";
    document.body.style.transform = "rotateY(360deg)";
  }, 1200);
});
