import { login } from "../../utils/Pa";
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

    await login("testPA1@intainft.com", "Int@1#M@K&T$",);

    await browser.waitUntil(
      async () => (await browser.getUrl()).includes("/admin/payingagent_deals"),
      {
        timeout: 30000,
        timeoutMsg: "Dashboard page did not load within the expected time",
      }
    );


    const search = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div/button"
    );
    await search.click();
    await browser.pause(3000); 


    const searchtype = await $(
      '//*[@id="searchBox"]/div/div/div/input'
    );
    await searchtype.setValue("Test demo-25");

    const viewdetails = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/tbody/tr/td[10]/div/button[3]"
    );
    await viewdetails.click();

    const more = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/button[1]"
    );
    await more.click();

    const accountdetails = await $(
      "/html/body/div[7]/button[2]"
    );
    await accountdetails.click();

    const addaccountdetails = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/button/span[1]"
    );
    await addaccountdetails.click();

    const name = await $(
      "/html/body/div[3]/div/div/div/div[2]/form/div[1]/div[1]/input"
    );
    await name.setValue("Test account");


    const Addbutton = await $(
      "/html/body/div[3]/div/div/div/div[2]/form/div[2]/div/div/div/button[2]"
    );
    await Addbutton .click();


    const transactionedit = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div[3]/div[2]/div/div[2]/table/tbody/tr/td[7]/div[2]/div/span/button[1]"
    );
    await transactionedit .click();


    const save = await $(
      "/html/body/div[6]/div/div/div/div[2]/form/div[6]/div/div/div/button[2]/span[1]"
    );
    await save .click();
 
    await browser.pause(3000);

  });
});
