// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  console.log("Scrolling");
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("topnav");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Display the category of menu items selected
function show_menu(div_id) {
  //   document.getElementById("menu").innerHTML =
  //     document.getElementById(param_div_id).innerHTML;

  if (div_id == "main-course") {
    document.getElementById("main-course").style.display = "grid";
    document.getElementById("appetizers").style.display = "none";
    document.getElementById("desserts").style.display = "none";
  } else if (div_id == "appetizers") {
    document.getElementById("main-course").style.display = "none";
    document.getElementById("appetizers").style.display = "grid";
    document.getElementById("desserts").style.display = "none";
  } else if (div_id == "desserts") {
    document.getElementById("main-course").style.display = "none";
    document.getElementById("appetizers").style.display = "none";
    document.getElementById("desserts").style.display = "grid";
  }
}

// On submitting reservation form
function showAlert() {
  alert(
    "Your reservation request has been registered. On confirmation of your booking, you will be notified via email/SMS. Thank you for choosing the Belle Vie Cafe."
  );
}
