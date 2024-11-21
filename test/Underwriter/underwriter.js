import { login } from "../../utils/uw";
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

describe("IntainMarkets UW login", () => {
  it("UW page", async () => {
    await browser.url("https://imtest.intainmarkets.us/");

    console.log(await browser.getTitle());

    await login("testuw2@intainft.com", "Int@1#M@K&T$", "Underwriter");

    await browser.waitUntil(
      async () => (await browser.getUrl()).includes("/admin/uw_dashboard_pools"),
      {
        timeout: 30000,
        timeoutMsg: "Dashboard page did not load within the expected time",
      }
    );
   
 // Click submit button
 const preview = await $(
  "/html/body/div[1]/div/div[2]/div[1]/ul/li[1]"
);
await preview.click();

const elements = await $$(".jss50");

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
await searchtype.setValue("testpool-100");


// Click submit button
//  const Accecpt = await $(
//   "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/tbody/tr/td[8]/div/button[2]"
// );
// await Accecpt.click();

//  // Click submit button
//  const Accecptyes = await $(
//   "/html/body/div[3]/div/div/div/div/div/div/div/div/button[2]"
// );
// await Accecptyes.click();

 // Click submit button

 const view = await $(
  "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/tbody/tr/td[8]/div/button"
);
await view.click();


 // Click submit button
 const action = await $(
  "/html/body/div[1]/div/div[2]/div[2]/div/div[3]/div/div/table/tbody/tr[1]/td[8]/div/button[2]"
);
await action.click();


 // Click submit button
 const messagtypee = await $(
  "/html/body/div[4]/div/div/div/div[2]/div[2]/form/div[1]/div/input"
);
await messagtypee.setValue("remove the  loans");

 // Click submit button
 const send = await $(
  "/html/body/div[4]/div/div/div/div[2]/div[2]/form/div[1]/div/button"
);
await send.click();

await browser.pause(2000);
 // Click submit button
 const action1 = await $(
  "/html/body/div[1]/div/div[2]/div[2]/div/div[3]/div/div/table/tbody/tr[1]/td[8]/div/button[2]"
);
await action1.click();
await browser.pause(2000);


 // Click submit button
 const actionclose = await $(
  "/html/body/div[4]/div/div/div/div[2]/div[2]/form/div[2]/div/div/button"
);
await actionclose.click();

 // Click submit button
 const Submitbutton = await $(
  "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/button[2]"
);
await Submitbutton.click();

 // Click submit button
 const Submitinvbutton = await $(
  "/html/body/div[15]/button[2]"
);
await Submitinvbutton.click();


 // Click submit button
 const selectinvestor = await $(
  "/html/body/div[8]/div/div/div/div[2]/form/div[1]/div/div[1]/input"
);
await selectinvestor.click();


 // Click submit button
 const Submit = await $(
  "/html/body/div[8]/div/div/div/div[2]/form/div[2]/div/div/div/button[2]"
);
await Submit.click();


 // Click submit button
 const Submitbutton1 = await $(
  "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/button[2]"
);
await Submitbutton1.click();




  });
});
