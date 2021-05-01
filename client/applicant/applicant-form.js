const submitBtn = document.querySelector('#submit-btn');

submitBtn.onclick = function(){
    const nameInput = document.querySelector('#name');
    const ageInput = document.querySelector('#age');
    const addressInput = document.querySelector('#address');
    const mobileInput = document.querySelector('#mobile');

    const name = nameInput.value;
    const age = ageInput.value;
    const address = addressInput.value;
    const mobile = mobileInput.value;
    nameInput.value = "";
    ageInput.value = "";
    addressInput.value = "";
    mobileInput.value = "";

    console.log(name);

    fetch('http://localhost:5000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({name: name, age: age, address: address, mobile: mobile})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']));

    
}

function insertRowIntoTable(data){

}
