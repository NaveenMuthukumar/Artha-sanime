const lis = document.querySelectorAll("li");
const a = document.querySelectorAll("li a");

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function() {
    for (let i = 0; i < lis.length; i++) {
      lis[i].classList.remove("active");
      a[i].classList.remove("active-text");
    }
    this.classList.add("active");
    a[i].classList.add("active-text");
  });
}
function autumn()
    {
      document.getElementById("season").innerHTML="Autumn";
    }
function winter()
    {
      document.getElementById("season").innerHTML="Winter";
    }
function spring()
    {
      document.getElementById("season").innerHTML="Spring";
    }
function summer()
    {
      document.getElementById("season").innerHTML="Summer";
    }
