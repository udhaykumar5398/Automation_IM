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

    await login("testIS2@intainft.com", "Int@1#M@K&T$", "Issuer");

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

    const loans = await $("/html/body/div[1]/div/div[2]/div[1]/ul/li[2]/a");
    await loans.click();

    await browser.pause(3000);

    // const Addbutton = await $(
    //   "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/button[1]/span[1]"
    // );
    // await Addbutton.click();

    // const uploadbutton = await $(
    //   "/html/body/div[6]/div/div/div/div[2]/form/div[1]/div/div/button"
    // );
    // await uploadbutton.click();

    // // Step 3: Locate the file input element where you upload the Excel file
    // const fileInput = await $('input[type="file"]');

    // // Step 4: Resolve the file path and upload
    // const filePath = path.resolve(
    //   "/home/rohityadav/Downloads/LMS_L100_20871001.xlsx"
    // );
    // await fileInput.setValue(filePath);
    // console.log("Excel file uploaded successfully.");
    // await browser.keys("Escape"); // Close the file manager if it’s still open

    // const Assectlass = await $(
    //   "/html/body/div[6]/div/div/div/div[2]/form/div[2]/select"
    // );
    // await Assectlass.click();

    // const Assectlassselect = await $(
    //   "/html/body/div[6]/div/div/div/div[2]/form/div[2]/select/option[2]"
    // );
    // await Assectlassselect.click();

    // const Asofdate = await $(
    //   "/html/body/div[6]/div/div/div/div[2]/form/div[3]/div/div[1]/div/input"
    // );
    // await Asofdate.click();

    // const dateselect = await $(
    //   "/html/body/div[6]/div/div/div/div[2]/form/div[3]/div/div[2]/div[2]/div/div/div[2]/div[2]/div[3]/div[5]"
    // );
    // await dateselect.click();

    // const next = await $(
    //   "/html/body/div[6]/div/div/div/div[2]/form/div[4]/div/div/div/button[2]/span[1]"
    // );
    // await next.click();

    // const maploanid = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[149]/td/div[2]/div/input"
    // );
    // await maploanid.click();

    // await browser.pause(3000);

    // const maploanid1 = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr/td[2]/div[2]/div/select"
    // );
    // await maploanid1.click();

    // const maploanidselec = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr/td[2]/div[2]/div/select/option[2]"
    // );
    // await maploanidselec.click();

    // const DataStartDate = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[97]/td/div[2]/div/input"
    // );
    // await DataStartDate.click();

    // await maploanid1.click();

    // const DataStartDate1 = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[2]/td[2]/div[2]/div/select/option[3]"
    // );
    // await DataStartDate1.click();

    // const OriginatorName = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[184]/td/div[2]/div/input"
    // );

    // await OriginatorName.click();

    // await maploanid1.click();

    // const OriginatorName1 = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[3]/td[2]/div[2]/div/select/option[7]"
    // );

    // await OriginatorName1.click();

    // const Originatordate = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[181]/td/div[2]/div/input"
    // );

    // await Originatordate.click();
    // await maploanid1.click();

    // const Originatordate1 = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[4]/td[2]/div[2]/div/select/option[6]"
    // );

    // await Originatordate1.click();

    // const OriginalPrincipalBalance = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[174]/td/div[2]/div/input"
    // );

    // await OriginalPrincipalBalance.click();

    // await maploanid1.click();

    // const OriginalPrincipalBalance1 = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[5]/td[2]/div[2]/div/select/option[12]"
    // );

    // await OriginalPrincipalBalance1.click();

    // const Borrower = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[15]/td/div[2]/div/input"
    // );

    // await Borrower.click();
    // await maploanid1.click();
    // const Borrower1 = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[6]/td[2]/div[2]/div/select/option[9]"
    // );

    // await Borrower1.click();

    // await maploanid1.click();
    // const down = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]"
    // );



    // const PropertyState = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[216]/td/div[2]/div/input"
    // );

    // await PropertyState.click();
    // await maploanid1.click();
    // const PropertyState1 = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[7]/td[2]/div[2]/div/select/option[5]"
    // );

    // await PropertyState1.click();
   




    // const Propertycity = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[215]/td/div[2]/div/input"
    // );

    // await Propertycity.click();

    // await maploanid1.click();
    // const Propertycity1 = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[8]/td[2]/div[2]/div/select/option[4]"
    // );

    // await Propertycity1.click();
  


    // const GrossInterest
    // = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[123]/td/div[2]/div/input"
    // );

    // await GrossInterest.click();

    // await maploanid1.click();
    // const GrossInterest1
    // = await $(
    //   "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[9]/td[2]/div[2]/div/select/option[8]"
    // );

    // await GrossInterest1.click();



    // const addLoansButton = await $("/html/body/div[5]/div/div/div[2]/div/div/div[3]/button[2]");
    // await addLoansButton.click();

///////---------filtr

    const filter = await $("/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/thead/tr/th[2]/div/div/img");
    await filter.click();


  const select = await $("/html/body/div[10]/div[2]/div[3]/div[1]/select[1]/option[2]");
    await select.click();

    const entergtval = await $("/html/body/div[10]/div[2]/div[3]/div[1]/input");
    await entergtval.setValue(
      "20871001"
    );


    const ndbtn = await $("/html/body/div[10]/div[2]/div[3]/div[2]/div[1]/input");
    await ndbtn.click();



    const selectl = await $("/html/body/div[10]/div[2]/div[3]/div[3]/select[1]/option[3]");
    await selectl.click();

    const enterlsval = await $("/html/body/div[10]/div[2]/div[3]/div[3]/input");
    await enterlsval.setValue(
      "20871102"
    );

    const submit = await $("/html/body/div[10]/div[2]/div[3]/div[4]/button[2]");
    await submit.click();

    const selectloans = await $("/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/thead/tr/th[1]/span");
    await selectloans.click();

    const action = await $("/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/button[2]");
    await action.click();


    //_----------------**filter

    // const verifyloan = await $("/html/body/div[10]/button[1]");
    // await verifyloan.click();


    // const AssignVA = await $("/html/body/div[7]/div/div/div/div[2]/form/div[1]/select");
    // await AssignVA.click();


    // const testVA = await $("/html/body/div[7]/div/div/div/div[2]/form/div[1]/select/option[5]");
    // await testVA.click();

    // const VAtemplate = await $("/html/body/div[7]/div/div/div/div[2]/form/div[2]/select");
    // await VAtemplate.click();

    // const IMA1 = await $("/html/body/div[7]/div/div/div/div[2]/form/div[2]/select/option[3]");
    // await IMA1.click();

    // // const contract = await $("/html/body/div[7]/div/div/div/div[2]/form/div[3]/select/option[1]");
    // await contract.click();



    // const contractdata = await $("/html/body/div[7]/div/div/div/div[2]/form/div[3]/select/option[42]");
    // await contractdata.click();


    // const Assetlass = await $("/html/body/div[7]/div/div/div/div[2]/form/div[4]/select");
    // await Assetlass.click();


    // const RRE = await $("/html/body/div[7]/div/div/div/div[2]/form/div[4]/select/option[2]");
    // await RRE.click();


    // const loanid = await $("/html/body/div[7]/div/div/div/div[2]/form/div[5]/div/div[1]/input");
    // await loanid.click();


    // const grsint = await $("/html/body/div[7]/div/div/div/div[2]/form/div[5]/div/div[2]/input");
    // await grsint.click();

    // const city = await $("/html/body/div[7]/div/div/div/div[2]/form/div[5]/div/div[3]/input");
    // await city.click();


    // const state = await $("/html/body/div[7]/div/div/div/div[2]/form/div[5]/div/div[4]/input");
    // await state.click();

    // const borrowername = await $("/html/body/div[7]/div/div/div/div[2]/form/div[5]/div/div[5]/input");
    // await borrowername.click();


    // const crntprnc = await $("/html/body/div[7]/div/div/div/div[2]/form/div[5]/div/div[6]/input");
    // await crntprnc.click();


    // const orgdate = await $("/html/body/div[7]/div/div/div/div[2]/form/div[5]/div/div[7]/input");
    // await orgdate.click();



    // const orgdate = await $("/html/body/div[10]/button[2]");
    // await orgdate.click();



    // const ipselect = await $("/html/body/div[10]/div/div/div/div[2]/form/div[1]/select");
    // await ipselect.click();




    // const testnov14 = await $("/html/body/div[10]/div/div/div/div[2]/form/div[1]/select/option[93]");
    // await testnov14.click();




    // const maptopool = await $("/html/body/div[10]/div/div/div/div[2]/form/div[2]/div/div/div/button[2]/span[1]");
    // await maptopool.click();
////------------****8----------------------preview stage



    const pre = await $("/html/body/div[1]/div/div[2]/div[1]/ul/li[1]/a/img");
    await pre.click();



    const srch = await $("/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[3]/div/div[1]/button");
    await srch.click();
    await browser.pause(3000);


    const srchenter = await $('//*[@id="searchBox"]/div/div/div/input');
    await srchenter.setValue(
      "testnov14"
    );
    await browser.pause(3000);


    const view = await $("/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/tbody/tr[2]/td[9]/div/button[1]");
    await view.click();

    await browser.pause(3000);



    const Submit = await $("/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/button[2]");
    await Submit.click();

    await browser.pause(3000);

    const preview = await $("/html/body/div[19]/button[1]");
    await preview.click();
    await browser.pause(3000);


    const underaccess1 = await $("/html/body/div[9]/div/div/div/div[2]/form/div[4]/div/div/div[1]/div[2]");
    await underaccess1.click();

    const underaccess = await $("/html/body/div[9]/div/div/div/div[2]/form/div[4]/div/div/div[1]/div[2]/input");
    await underaccess.setValue(
      "Test UW"
    );
    await browser.keys("Enter");

    const invesaccess1 = await $("/html/body/div[9]/div/div/div/div[2]/form/div[5]/div/div");
    await invesaccess1.click();



    const invesval = await $("/html/body/div[9]/div/div/div/div[2]/form/div[5]/div/div/div[1]/div[2]/input");
    await invesval.setValue(
      "Test Investor"
    );
    await browser.keys("Enter");


    const RA = await $("/html/body/div[9]/div/div/div/div[2]/form/div[6]/div/div/div[1]/div[2]");
    await RA.click();

    const Rain = await $("/html/body/div[9]/div/div/div/div[2]/form/div[6]/div/div/div[1]/div[2]/input");
    await Rain.setValue(
      "Test RA"
    );
    await browser.keys("Enter");

    await browser.pause(3000);


  });
});
