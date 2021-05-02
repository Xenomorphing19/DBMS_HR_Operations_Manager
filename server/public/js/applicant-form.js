// const submitBtn = document.querySelector('#submit-btn');

// submitBtn.onclick = function(){
//     const nameInput = document.querySelector('#name');
//     const ageInput = document.querySelector('#age');
//     const addressInput = document.querySelector('#address');
//     const mobileInput = document.querySelector('#mobile');

//     const name = nameInput.value;
//     const age = ageInput.value;
//     const address = addressInput.value;
//     const mobile = mobileInput.value;
//     nameInput.value = "";
//     ageInput.value = "";
//     addressInput.value = "";
//     mobileInput.value = "";

//     console.log(name);

//     fetch('http://localhost:5000/insert', {
//         headers: {
//             'Content-type': 'application/json'
//         },
//         method: 'POST',
//         body: JSON.stringify({name: name, age: age, address: address, mobile: mobile})
//     })
//     .then(response => response.json())
//     .then(data => insertRowIntoTable(data['data']));

    
// }

// function insertRowIntoTable(data){

// }

var sendInfo = document.getElementById("submit-btn");

sendInfo.addEventListener("click", function(){

    var request = XMLHttpRequest();

    const username = document.getElementById("user-email");
    const password = document.getElementById("user-password");

    console.log(username, password);

    // request.open('POST', "http://localhost:5000/applicant/login", true);
    // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // request.send(`name=${username}&pass=${password}`);

    request.open("GET", "http://localhost:5000/applicant/login");
    request.send();
})