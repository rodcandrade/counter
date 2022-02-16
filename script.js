let initial = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const styles = e.currentTarget.classList;
      if (styles.contains("down")) {
        initial--;
      } else if (styles.contains("up")) {
        initial++;
      } else {
        initial = 0;
      }
  
      if (initial > 0) {
        value.style.color = "green";
      }
      if (initial < 0) {
        value.style.color = "red";
      }
      if (initial === 0) {
        value.style.color = "black";
      }
      value.textContent = initial;
    });
  });