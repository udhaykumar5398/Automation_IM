import { login } from "../../utils/login";
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

    await login("testissuer001@intainft.com", "Intain123!", "Issuer");

    await browser.waitUntil(
      async () => (await browser.getUrl()).includes("/issuer/dashboard"),
      {
        timeout: 30000,
        timeoutMsg: "Dashboard page did not load within the expected time",
      }
    );
    const elements = await $$(".jss50");
    await selectAndClickElementByText(elements, "Pool ID");
    await selectAndClickElementByText(elements, "Transaction Type");
    await selectAndClickElementByText(elements, "Pool Name");
    await selectAndClickElementByText(elements, "Asset Class");
    await selectAndClickElementByText(elements, "No. of Loans");
    await selectAndClickElementByText(elements, "Set-up On");
    await selectAndClickElementByText(elements, "Original Balance");
    await selectAndClickElementByText(elements, "Status");

    // Click submit button
    const Setuppool = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[3]/div/div/button"
    );
    await Setuppool.click();

    await $("/html/body/div[4]/div/div/div/div[2]/form/div[1]/input").setValue(
      "testnov14v1"
    );
    console.log("poolname entered: testnov14v1");

    // Click submit button
    const Assettype = await $(
      "/html/body/div[4]/div/div/div/div[2]/form/div[2]/select"
    );
    await Assettype.click();

    // Click submit button
    const Assettypeselelct = await $(
      "/html/body/div[4]/div/div/div/div[2]/form/div[2]/select/option[2]"
    );
    await Assettypeselelct.click();


    // Click submit button
    const TransactionType = await $(
        "/html/body/div[4]/div/div/div/div[2]/form/div[3]/select"
      );
      await TransactionType.click();



    // Click submit button
    const TransactionTypeSelect = await $(
        "/html/body/div[4]/div/div/div/div[2]/form/div[3]/select/option[3]"
      );
      await TransactionTypeSelect.click();

      await $("/html/body/div[4]/div/div/div/div[2]/form/div[4]/textarea").setValue(
        "testing"
      );
      console.log("Description entered: testing");
  
// // Click submit button
const Setupbutton = await $(
    "/html/body/div[4]/div/div/div/div[2]/form/div[5]/div/div/div/button[2]"
  );
  await Setupbutton.click();

});
});
