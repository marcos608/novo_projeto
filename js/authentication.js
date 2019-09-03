var btnLogin = document.getElementById('btnLogin');
var inputEmail = document.getElementById('inputEmail');
var inputSenha = document.getElementById('inputSenha');

var btnLogout = document.getElementById('btnLogout');


btnLogin.addEventListener('click', function(){

  firebase
      .auth()
        .signInWithEmailAndPassword(inputEmail.value, inputSenha.value)
        .then(function(result){
          window.location.replace('grid.html');
        })
        .catch(function(error) {
          alert("Login não cadastrado!");

  });


});

function logout(){
  firebase.auth().signOut().then(function() {
    window.location.replace('Login.html');

  }).catch(function(error) {
    alert("ferrou");
  });
}