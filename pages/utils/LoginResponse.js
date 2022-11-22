// import fetch from "node-fetch";
const fetch = require("node-fetch")
const LoginResponse = async (email, password) => {
    let res = await fetch(`http://localhost:3000/api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    let response = await res.json();
    return response;
}

export default LoginResponse;