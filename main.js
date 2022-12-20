function calculateMatch() {
    // get the names from the form inputs
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    
    // generate a random percentage between 0 and 100
    var percentage = Math.floor(Math.random() * 101);
  
    // display the percentage
    document.getElementById('matchPercentage').innerHTML = percentage + '% <3';
  }