import UpdateInventory from "../pages/utils/UpdateInventory";
test("Update inventory", async () => {
let body = {
     inventoryName: "",
     inventoryQuantity:"2 tabs",
     inventoryExpiryDate: "2022-11-17T18:30:00.000Z",
     inventoryDescription:"Test Add only when required",
     inventoryStatus:"active"
    }
    
let res = {};
console.log(JSON.stringify(body))
const response = await UpdateInventory(JSON.stringify(body), res);
expect(response.success).toBe(false);

});
