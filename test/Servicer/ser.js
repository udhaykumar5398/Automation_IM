import { login } from "../../utils/serv";
import path from "path";

async function selectAndClickElementByText(elements, textToFind) {
  for (const el of elements) {
    const text = await el.getText();
    if (text === textToFind) {
      console.log(`Clicking on element with text: ${textToFind}`);
      await el.click();
      return;
    }
  }
  console.log(`No matching element found for: ${textToFind}`);
}

describe("IntainVA Processor Dashboard", () => {
  it("login page", async () => {
    await browser.url("https://imtest.intainmarkets.us/");

    console.log(await browser.getTitle());

    await login("testS@intainft.com", "Int@1#M@K&T$", "Servicer");


    await browser.waitUntil(
      async () =>
        (await browser.getUrl()).includes("/admin/servicer_deals"),
      {
        timeout: 30000,
        timeoutMsg: "Dashboard page did not load within the expected time",
      }
    );

    await browser.pause(3000);

    const processloantap = await $('/html/body/div/div/div[2]/div[2]/div/div[2]/div/div/div/table/tbody/tr[1]/td[8]/div/button');
    await processloantap.click();


    const selectfile = await $('/html/body/div/div/div[2]/div[2]/div/div[3]/div/div/form/div/div[1]/div/button');
    await selectfile.click();

    const fileInput = await $('input[type="file"]');

    const filePath = path.resolve(
      "/home/rohityadav/Downloads/Upload file - Jan 2022.xlsx"
    );
    await fileInput.setValue(filePath);
    console.log("Excel file uploaded successfully.");
    await browser.keys("Escape"); 

   
  });
});
