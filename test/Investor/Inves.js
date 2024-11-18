import { login } from "../../utils/In";
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

    await login("testIN@intainft.com", "Int@1#M@K&T$", "Investor");

    await browser.waitUntil(
      async () =>
        (await browser.getUrl()).includes("/admin/investorpreviewpools"),
      {
        timeout: 30000,
        timeoutMsg: "Dashboard page did not load within the expected time",
      }
    );

    // Click submit button
    const search = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/button/span[1]"
    );
    await search.click();
    await browser.pause(3000);

    // Click submit button
    const searchtype = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div/div/div/div/input"
    );
    await searchtype.setValue("testnov5");

    // Click submit button
    const viewdetails = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/tbody/tr/td[7]/div/button"
    );
    await viewdetails.click();

    // Click submit button
    const action = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[3]/div/div/table/tbody/tr[1]/td[8]/div/button"
    );
    await action.click();


    // Click submit button
    const typing = await $(
      "/html/body/div[3]/div/div/div/div[2]/div[2]/form/div[1]/div/input"
    );
    await typing.setValue("remove the loan");


    // Click submit button
    const send = await $(
      "/html/body/div[3]/div/div/div/div[2]/div[2]/form/div[1]/div/button"
    );
    await send.click();


    // Click submit button
    const Downloaddoc = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[2]"
    );
    await Downloaddoc.click();


       // Click submit button
       const opport = await $(
        "/html/body/div[1]/div/div[2]/div[1]/ul/li[3]/a"
      );
      await opport.click();



       // Click submit button
       const securitization = await $(
        "/html/body/div/div/div[2]/div[2]/div/div[1]/div[2]/div/buton[2]"
      );
      await securitization.click();
    await browser.pause(3000);






  });
});
