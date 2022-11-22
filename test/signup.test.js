import SignupResponse from "../pages/utils/SignupResponse";

test("New user with valid credentials", async () => {
    let name = "test";
    let email = "kvp@gmail.com";
    let password = "12345";
  
    const response = await SignupResponse(name, email, password);
    // expect(response.success).toBe(true)&&expect(response.message).toBe("user Created");
    expect(response.success).toBe(true);
    });
  