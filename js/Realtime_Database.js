var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('email');
var state = document.getElementById('state');
var city = document.getElementById('city');
var address = document.getElementById('address');
var senha = document.getElementById('senha');
var btnSalvar = document.getElementById('btnSalvar')

btnSalvar.addEventListener('click', function(){

    firebase
    .auth()
      .createUserWithEmailAndPassword(email.value, senha.value)
      .then(function(result){
        alert("senha criada!");
      })
      .catch(function(error) {
        alert("deu errado!");

});

    create(firstName.value, lastName.value, email.value
        ,state.value,city.value, address.value);
});

function create(nome, sobre_nome, email, uf, cidade, endereco){
  var data =    { nome: nome,
            sobre_nome: sobre_nome,
            email: email,
            uf: uf,
            cidade: cidade,
            endereco: endereco };

            return firebase.database().ref().child('users').push(data); 
}
