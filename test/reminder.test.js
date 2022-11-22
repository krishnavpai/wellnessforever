import ReminderAdd from "../pages/utils/ReminderAdd";
test("Add inventory", async () => {
    let body = [ 
    
        {
            "type":"Medicine",
            "medicine":"Crocin",
            "dosage": "2 tab",
            "dateTime":"Thursday, November 10th, 2022 at 9:00AM",
            "frequency":"2",
            "duration":"1",
            "description": "",
            "status":"active"
          },
          {
            "type":"Medicine",
            "medicine":"Vicks",
            "dosage": "2 tab",
            "dateTime":"Monday, November 7th, 2022 at 9:00 AM",
            "frequency":"2",
            "duration":"1",
            "description": "",
            "status":"active"
          }
        ]
    let res = {};
    const response = await ReminderAdd(JSON.stringify(body), res);
    expect(response.success).toBe(true);
    
    });
    