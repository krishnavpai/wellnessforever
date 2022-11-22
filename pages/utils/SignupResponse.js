const fetch = require("node-fetch");

const SignupResponse = async (name, email, password) => {
  const data = { name, email, password };
  let res = await fetch(`http://localhost:3000/api/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), 
  });

  let response = await res.json();
  return response;
};
export default SignupResponse;
