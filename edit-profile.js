
function readFile() {
  var cover1 = new FileReader();
  var cover2 = new FileReader();
  
  var coverFile = document.getElementById('cover-demo').files[0];
  
  cover1.onload = function(e) {
    document.getElementById('cover1').src = e.target.result;
  }
  cover2.onload = function(e) {
      document.getElementById('cover2').src = e.target.result
  }
  cover1.readAsDataURL(coverFile)
  cover2.readAsDataURL(coverFile);
}

function readFil() {
  var photo1 = new FileReader();
  var photo2 = new FileReader();
  var photo3 = new FileReader();
  var photo4 = new FileReader();
  
  var photoFile = document.getElementById('profile-demo').files[0];
  
  photo1.onload = function(e) {
    document.getElementById('profile1').src = e.target.result;
  }
  photo2.onload = function(e) {
      document.getElementById('profile2').src = e.target.result;
  }
  photo3.onload = function(e) {
    document.getElementById('profile3').src = e.target.result;
  }
  photo4.onload = function(e) {
    document.getElementById('profile4').src = e.target.result;
  }
  photo1.readAsDataURL(photoFile)
  photo2.readAsDataURL(photoFile)
  photo3.readAsDataURL(photoFile)
  photo4.readAsDataURL(photoFile);
}








/*

function readFile() {
  var reader = new FileReader();
  var reader2 = new FileReader();
  var file = document.getElementById('demo').files[0];
  reader.onload = function(e) {
    document.getElementById('result').src = e.target.result;
  }
  reader2.onload = function(e) {
    document.getElementById('result2').src = e.target.result;
  }
  reader.readAsDataURL(file)
  reader2.readAsDataURL(file);
}

*/