document.getElementById('signupForm').onsubmit = function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    var result = 'Name: ' + name + '<br>Email: ' + email;
    document.getElementById('result').innerHTML = result;
  };



  document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('readMoreBtn').onclick = function() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = this;
  
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
      }
    };
  });