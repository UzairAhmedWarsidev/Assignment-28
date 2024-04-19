var msg = "hello world"


var oneImage = "Thanks for Purchase this Phone"

function deleteRow(btn) {
    // Get the row that contains the button
    var row = btn.parentNode.parentNode;
    // Remove the row from the table
    row.parentNode.removeChild(row);
  }



  // Function to change the counter value
function changeCounter(value) {
    // Get the current value of the counter
    var currentCounter = parseInt(document.getElementById('counter').textContent, 10);
    // Update the counter value
    currentCounter += value;
    // Display the updated counter value
    document.getElementById('counter').textContent = currentCounter;
  }