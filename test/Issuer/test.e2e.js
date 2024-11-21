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

describe("IntainMarkets issuer Dashboard", () => {
  it("issuer preview page-300loans 5th time", async () => {
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
      "testpool-300"
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

    await $(
      "/html/body/div[4]/div/div/div/div[2]/form/div[4]/textarea"
    ).setValue("testing");
    console.log("Description entered: testing");

    // // Click submit button
    const Setupbutton = await $(
      "/html/body/div[4]/div/div/div/div[2]/form/div[5]/div/div/div/button[2]"
    );
    await Setupbutton.click();

    const loans = await $("/html/body/div[1]/div/div[2]/div[1]/ul/li[2]/a");
    await loans.click();

    await browser.pause(1000);

    const Addbutton = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/button[1]/span[1]"
    );
    await Addbutton.click();

    const uploadbutton = await $(
      "/html/body/div[6]/div/div/div/div[2]/form/div[1]/div/div/button"
    );
    await uploadbutton.click();

    // Step 3: Locate the file input element where you upload the Excel file
    const fileInput = await $('input[type="file"]');

    // Step 4: Resolve the file path and upload
    const filePath = path.resolve(
      "/home/rohityadav/Downloads/LMS_L300_10111001.xlsx"
    );
    await fileInput.setValue(filePath);
    console.log("Excel file uploaded successfully.");
    await browser.keys("Escape"); // Close the file manager if it’s still open

    const Assectlass = await $(
      "/html/body/div[6]/div/div/div/div[2]/form/div[2]/select"
    );
    await Assectlass.click();

    const Assectlassselect = await $(
      "/html/body/div[6]/div/div/div/div[2]/form/div[2]/select/option[2]"
    );
    await Assectlassselect.click();

    const Asofdate = await $(
      "/html/body/div[6]/div/div/div/div[2]/form/div[3]/div/div[1]/div/input"
    );
    await Asofdate.click();

    const dateselect = await $(
      "/html/body/div[6]/div/div/div/div[2]/form/div[3]/div/div[2]/div[2]/div/div/div[2]/div[2]/div[3]/div[5]"
    );
    await dateselect.click();

    const next = await $(
      "/html/body/div[6]/div/div/div/div[2]/form/div[4]/div/div/div/button[2]/span[1]"
    );
    await next.click();
    await browser.pause(20000);

    const maploanid = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[210]/td/div[2]/div/input"
    );
    await maploanid.click();

    const maploanid1 = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr/td[2]/div[2]/div/select"
    );
    await maploanid1.click();

    const maploanidselec = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr/td[2]/div[2]/div/select/option[2]"
    );
    await maploanidselec.click();

    const DataStartDate = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[132]/td/div[2]/div/input"
    );
    await DataStartDate.click();

    await maploanid1.click();

    const DataStartDate1 = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[2]/td[2]/div[2]/div/select/option[3]"
    );
    await DataStartDate1.click();

    const OriginatorName = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[266]/td/div[2]/div/input"
    );

    await OriginatorName.click();

    await maploanid1.click();

    const OriginatorName1 = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[3]/td[2]/div[2]/div/select/option[7]"
    );

    await OriginatorName1.click();

    const Originatordate = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[263]/td/div[2]/div/input"
    );

    await Originatordate.click();
    await maploanid1.click();

    const Originatordate1 = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[4]/td[2]/div[2]/div/select/option[6]"
    );

    await Originatordate1.click();

    const OriginalPrincipalBalance = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[256]/td/div[2]/div/input"
    );

    await OriginalPrincipalBalance.click();

    await maploanid1.click();

    const OriginalPrincipalBalance1 = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[5]/td[2]/div[2]/div/select/option[12]"
    );

    await OriginalPrincipalBalance1.click();

    const Borrower = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[29]/td/div[2]/div/input"
    );

    await Borrower.click();
    await maploanid1.click();
    const Borrower1 = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[6]/td[2]/div[2]/div/select/option[9]"
    );

    await Borrower1.click();

    const PropertyState = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[316]/td/div[2]/div/input"
    );

    await PropertyState.click();
    await maploanid1.click();
    const PropertyState1 = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[7]/td[2]/div[2]/div/select/option[5]"
    );

    await PropertyState1.click();

    const Propertycity = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[311]/td/div[2]/div/input"
    );

    await Propertycity.click();

    await maploanid1.click();
    const Propertycity1 = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[8]/td[2]/div[2]/div/select/option[4]"
    );

    await Propertycity1.click();

    const GrossInterest = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[176]/td/div[2]/div/input"
    );

    await GrossInterest.click();

    await maploanid1.click();
    const GrossInterest1 = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[9]/td[2]/div[2]/div/select/option[8]"
    );

    await GrossInterest1.click();

    const addLoansButton = await $(
      "/html/body/div[5]/div/div/div[2]/div/div/div[3]/button[2]"
    );
    await addLoansButton.click();

    ///////---------filtr

    const filter = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/thead/tr/th[2]/div/div/img"
    );
    await filter.click();

    const select = await $(
      "/html/body/div[10]/div[2]/div[3]/div[1]/select[1]/option[2]"
    );
    await select.click();

    const entergtval = await $("/html/body/div[10]/div[2]/div[3]/div[1]/input");
    await entergtval.setValue("9925102");

    const ndbtn = await $(
      "/html/body/div[10]/div[2]/div[3]/div[2]/div[1]/input"
    );
    await ndbtn.click();

    const selectl = await $(
      "/html/body/div[10]/div[2]/div[3]/div[3]/select[1]/option[3]"
    );
    await selectl.click();

    const enterlsval = await $("/html/body/div[10]/div[2]/div[3]/div[3]/input");
    await enterlsval.setValue("9925407");

    const submit = await $("/html/body/div[10]/div[2]/div[3]/div[4]/button[2]");
    await submit.click();

    const selectall = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/thead/tr/th[1]/span/span[1]/input"
    );
    await selectall.click();

    const action = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/button[2]"
    );
    await action.click();

    const maptopool = await $("/html/body/div[10]/button[2]");
    await maptopool.click();

    const maptopoolse = await $(
      "/html/body/div[10]/div/div/div/div[2]/form/div[1]/select/option[4]"
    );
    await maptopoolse.click();

    const mapnow = await $(
      "/html/body/div[10]/div/div/div/div[2]/form/div[2]/div/div/div/button[2]"
    );
    await mapnow.click();

    const prew = await $("/html/body/div[1]/div/div[2]/div[1]/ul/li[1]/a");
    await prew.click();

    const view = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/tbody/tr/td[9]/div/button[1]"
    );
    await view.click();

    const submitto = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/button[2]"
    );
    await submitto.click();

    const prew1 = await $("/html/body/div[19]/button[1]");
    await prew1.click();

    const UA = await $(
      "/html/body/div[9]/div/div/div/div[2]/form/div[4]/div/div/div[1]/div[2]"
    );
    await UA.click();

    // const UA1 = await $("/html/body/div[9]/div/div/div/div[2]/form/div[4]/div/div/div[1]/div[2]/input");
    // await UA1.setValue(
    //   "TEST UNDERWRITER"
    // );
    // await browser.keys('ArrowDown');

    // await browser.keys('Enter');

    const UA1 = await $(
      "/html/body/div[9]/div/div/div/div[2]/form/div[4]/div/div/div[1]/div[2]/input"
    );
    await UA1.setValue("TEST UNDERWRITER");

    await browser.pause(500); // Adjust if necessary

    // Select the option that exactly matches "TEST UNDERWRITER"
    const matchingOption = await $(
      "//div[contains(@class, 'dropdown')]//div[text()='TEST UNDERWRITER']"
    );
    await matchingOption.click();

    const IA = await $(
      "/html/body/div[9]/div/div/div/div[2]/form/div[5]/div/div/div[1]/div[2]"
    );
    await IA.click();

    const IA1 = await $(
      "/html/body/div[9]/div/div/div/div[2]/form/div[5]/div/div/div[1]/div[2]/input"
    );
    await IA1.setValue("Test Investor");

    await browser.keys("Enter");

    const RA = await $(
      "/html/body/div[9]/div/div/div/div[2]/form/div[6]/div/div/div[1]/div[2]"
    );
    await RA.click();

    const RA1 = await $(
      "/html/body/div[9]/div/div/div/div[2]/form/div[6]/div/div/div[1]/div[2]/input"
    );
    await RA1.setValue("Test RA");

    await browser.keys("Enter");

    const Submit = await $(
      "/html/body/div[9]/div/div/div/div[2]/form/div[7]/div/div/div/button[2]/span[1]"
    );
    await Submit.click();

    const pending = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/buton[2]"
    );
    await pending.click();

    const Reconsidore = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/buton[3]"
    );
    await Reconsidore.click();

    const lontap = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/buton[4]"
    );
    await lontap.click();

    const lonSummerytap = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/buton[5]"
    );
    await lonSummerytap.click();

    const strats = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/buton[6]"
    );
    await strats.click();

    const loan = await $(
      "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/buton[6]"
    );
    await loan.click();
  });
});
