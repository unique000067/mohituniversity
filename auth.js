document.getElementById("dob").onchange = function () {
  let dob = new Date(this.value);
  let age = new Date().getFullYear() - dob.getFullYear();
  document.getElementById("age").value = age;
};

function loadYear() {
  let course = document.getElementById("course").value;
  let year = document.getElementById("year");
  year.innerHTML = "";

  let max = 0;
  if(course=="B.Tech") max=4;
  else if(course=="MCA"||course=="M.Tech") max=2;
  else max=3;

  for(let i=1;i<=max;i++)
    year.innerHTML += `<option>Year ${i}</option>`;
}

function signup() {
  localStorage.setItem("user","logged");
  alert("Signup Successful");
}

function login() {
  if(localStorage.getItem("user"))
    window.location="viva.html";
  else
    alert("Please Signup First");
}
