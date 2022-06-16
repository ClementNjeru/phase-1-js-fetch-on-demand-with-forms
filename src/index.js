const submitData = {
    userName: "Clement",
    userEmail: "njeruclement36@gmail.com",
  };
  
  const userCredentials = {
    method : 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(submitData),
  };

  fetch('http://localhost:3000/users',userCredentials )
  .then(function (response) {
    return response.json();
  })
  .then(function (submitData) {
    console.log(submitData);
  })