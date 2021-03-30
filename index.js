// Add your code here
const formData = {
    name: "Steve",
    email: "steve@steve.com"
};


function submitData() {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
        body: JSON.stringify(formData)
     })
    .then(response => response.json())
    .then(data => {
        console.log(data.id);
        // const h1 = document.createElement('h1')
        // h1.innerText = data.id;
        document.body.innerText = data.id;
        // document.querySelector('body').appendChild(h1);
    })
    .catch(data => {
        console.log(data.message);
        document.body.innerText = data.message;
    })
};


//submitData();


// Test 1 - Send Data
// In submitData, write a valid POST request to http://localhost:3000/users using fetch(). This request should include:

// The destination URL
// Headers for 'Content-Type' and 'Accept', both set to 'application/json'
// A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an object. This object should then be stringified.