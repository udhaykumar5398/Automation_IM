export async function login(username, password, role) {
    // Enter email
    const emailInput = await $('//*[@id="signup-content"]/div[2]/form/div[1]/input');
    await emailInput.setValue(username);
    
    // Enter password
    const passwordInput = await $('//*[@id="signup-content"]/div[2]/form/div[2]/div[2]/input');
    await passwordInput.setValue(password);
    
    // Open the dropdown and select role
    const roleDropdown = await $('/html/body/div[1]/div/div/div/div[1]/div[2]/div[2]/form/div[3]/select');
    await roleDropdown.click();
    // Ensure the role option is visible and click it

     // Open the dropdown and select role
     const roleDropdown1 = await $('/html/body/div[1]/div/div/div/div[1]/div[2]/div[2]/form/div[3]/select/option[6]');
     await roleDropdown1.click();

     
   
    // Click submit button
    const submitButton = await $('/html/body/div[1]/div/div/div/div[1]/div[2]/div[2]/form/div[4]/div/div/button/span[1]');
    await submitButton.click();
    
   
 await browser.pause(2000); // Adjust as necessary


}