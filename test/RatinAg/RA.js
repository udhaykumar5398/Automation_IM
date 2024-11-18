import { login } from "../../utils/Rating";
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

    await login("testRA1@intainft.com", "int@1#M@K&T$");

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


const view = await $(
  "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/tbody/tr/td[8]/div/button"
);
await view.click();

 // Click submit button
 const Adddocument = await $(
  "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div[2]/div[1]/button"
);
await Adddocument.click();


 // Click submit button
 const upload = await $(
  "/html/body/div[13]/div/div/div/div[2]/form/div[1]/div/div/button"
);
await upload.click();



  // // Step 3: Locate the file input element where you upload the Excel file
  // const fileInput = await $('input[type="file"]');

  // // Step 4: Resolve the file path and upload
  // const filePath = path.resolve("/home/rohityadav/Downloads/lms.xlsx");
  // await fileInput.setValue(filePath);
  // console.log("Excel file uploaded successfully.");
  // await browser.keys('Escape'); // Close the file manager if it’s still open


  await $('/html/body/div[13]/div/div/div/div[2]/form/div[2]/input').setValue("lms excel");

  await $('/html/body/div[13]/div/div/div/div[2]/form/div[3]/input').setValue("loan details was not good");


 // Click submit button
 const Add = await $(
  "/html/body/div[13]/div/div/div/div[2]/form/div[4]/div/div/div/button[2]"
);
await Add.click();
await browser.pause(3000);

 // Click submit button
 const cancel = await $(
  "/html/body/div[13]/div/div/div/div[2]/form/div[4]/div/div/div/button[1]"
);
await cancel.click();
await browser.pause(3000);

 // Click submit button
 const Downloadexcel = await $(
  "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[3]/div/button/span[1]"
);
await Downloadexcel.click();

 // Click submit button
 const excelformate = await $(
  "/html/body/div[15]/button[1]"
);
await excelformate.click();
  await browser.pause(3000);



  });
});
