function calculateMatch() {
  // get the names from the form inputs
  var name1 = document.getElementById('name1').value;
  var name2 = document.getElementById('name2').value;

  // generate a random percentage between 0 and 100 or set it to 101 if the input names are "Shalera" and "Quinten"
  var percentage = (name1 === "Shalera" && name2 === "Quinten") ? 101 : Math.floor(Math.random() * 101);

  // display the percentage
  document.getElementById('matchPercentage').innerHTML = percentage + '% <3';
}







































//Shalera <3 Quinten
