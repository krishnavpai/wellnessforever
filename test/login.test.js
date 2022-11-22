import LoginResponse from "../pages/utils/LoginResponse";
//refer api folder for login api and its response
test("User email is registered in DB and entered password matches", async () => {
  let email = "krishna.pai@spit.ac.in";
  let password = "1234";

  const response = await LoginResponse(email, password);
  expect(response.success).toBe(true) &&
    expect(response.message).toBe("Login Successful");
});

test("User email is registered in DB and entered password does not match", async () => {
  let email = "krishna.pai@spit.ac.in";
  let password = "55";

  const response = await LoginResponse(email, password);
  expect(response.success).toBe(false) &&
    expect(response.message).toBe("Invalid Credentials");
});

test("User email not registered", async () => {
  let email = "test@spit.ac.in";
  let password = "55";

  const response = await LoginResponse(email, password);
  expect(response.success).toBe(false) &&
    expect(response.message).toBe("No User Found");
});


test("User email not registered", async () => {
    let email = "test@spit.ac.in";
    let password = "55";
  
    const response = await LoginResponse(email, password);
    expect(response.success).toBe(false)&&expect(response.message).toBe("No User Found");
  });

