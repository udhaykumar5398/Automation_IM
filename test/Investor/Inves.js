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

describe("A IntainVA INVESTOR Dashboard", () => {
  it("A login page", async () => {
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

    describe("B Searching pool", () => {
      it("B Searching pool", async () => {
        const search = await $(
          "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/button/span[1]"
        );
        await search.click();

        // Click submit button
        const searchtype = await $(
          "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div/div/div/div/input"
        );
        await searchtype.setValue("testpool-22");

        describe("C View pool", () => {
          it("C View pool", async () => {
            const viewdetails = await $(
              "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/tbody/tr/td[7]/div/button"
            );
            await viewdetails.click();

            describe("D View strat", () => {
              it("D View strat", async () => {
                const strat = await $(
                  "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/buton[3]"
                );
                await strat.click();

                describe("E View summary", () => {
                  it("E View summary", async () => {
                    const summary = await $(
                      "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/buton[2]"
                    );
                    await summary.click();

                    describe("F View Loan Tape", () => {
                      it("F View Loan Tape", async () => {
                        const LoanTape = await $(
                          "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/buton[1]"
                        );
                        await LoanTape.click();

                        // Click submit button
                        describe("G Retrieve feedback", () => {
                          it("G Retrieve feedback", async () => {
                            const action = await $(
                              "/html/body/div[1]/div/div[2]/div[2]/div/div[3]/div/div/table/tbody/tr[1]/td[8]/div/button"
                            );
                            await action.click();

                            describe("H Send feedback", () => {
                              it("H Send feedback", async () => {
                                const typing = await $(
                                  "/html/body/div[3]/div/div/div/div[2]/div[2]/form/div[1]/div/input"
                                );
                                await typing.setValue("remove the loan");

                                // Click submit button
                                const send = await $(
                                  "/html/body/div[3]/div/div/div/div[2]/div[2]/form/div[1]/div/button"
                                );
                                await send.click();

                                describe("I Download loan", () => {
                                  it("I Download loan", async () => {
                                    const Downloaddoc = await $(
                                      "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[3]/div/button"
                                    );
                                    await Downloaddoc.click();

                                    // Click submit button
                                    const opport = await $(
                                      "/html/body/div[11]/button[1]"
                                    );
                                    await opport.click();
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
