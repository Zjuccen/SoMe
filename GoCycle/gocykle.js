//Chat funktion

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

//hamburgerbar

//Java skrip til vores navigations bars animation
function openNav() {
  document.getElementById("mySidenav").style.width = "175px";
}
 
function closeNav() {
     document.getElementById("mySidenav").style.width = "0";
}

