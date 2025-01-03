import { login } from "../../utils/uw";
import path from "path";

describe("A IntainMarkets UW login", () => {
  it("A login page", async () => {
    await browser.url("https://imtest.intainmarkets.us/");

    console.log(await browser.getTitle());

    await login("testuw2@intainft.com", "Int@1#M@K&T$", "Underwriter");

    await browser.waitUntil(
      async () =>
        (await browser.getUrl()).includes("/admin/uw_dashboard_pools"),
      {
        timeout: 30000,
        timeoutMsg: "Dashboard page did not load within the expected time",
      }
    );

    describe("B View Preview pool", () => {
      it("B View Preview pool", async () => {
        const preview = await $("/html/body/div[1]/div/div[2]/div[1]/ul/li[1]");
        await preview.click();

        describe("C Searching pool ->filter", () => {
          it("C Searching pool->filter", async () => {
            const button1 = await $(
              "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/thead/tr/th[2]/div/div/img"
            );
            await button1.click();

            const eql = await $(
              "/html/body/div[4]/div[2]/div[3]/div[1]/select/option[1]"
            );
            await eql.click();

            const entergtval = await $(
              "/html/body/div[4]/div[2]/div[3]/div[1]/div/input"
            );
            await entergtval.setValue("testpool-22");

            const Submitbtn = await $(
              "/html/body/div[4]/div[2]/div[3]/div[4]/button[2]"
            );
            await Submitbtn.click();

            describe("D Accept / Reject the pool", () => {
              it("D Accept / Reject the pool", async () => {
                const Accecpt = await $(
                  "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/tbody/tr/td[8]/div/button[2]"
                );
                await Accecpt.click();

                const Accecptyes = await $(
                  "/html/body/div[3]/div/div/div/div/div/div/div/div/button[2]"
                );
                await Accecptyes.click();
              });
            });
            describe("E View pool details", () => {
              it("E View pool details", async () => {
                const view = await $(
                  "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/tbody/tr[10]/td[8]/div/button"
                );
                await view.click();

                describe("F View summary", () => {
                  it("F View summary", async () => {
                    // Click submit button
                    const summary = await $(
                      "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/button[2]"
                    );
                    await summary.click();

                    describe("G View strat", () => {
                      it("G View strat", async () => {
                        // Click submit button
                        const strat = await $(
                          "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/button[3]"
                        );
                        await strat.click();

                        describe("H View loans", () => {
                          it("H View loans", async () => {
                            // Click submit button
                            const loans = await $(
                              "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/button[4]"
                            );
                            await loans.click();

                            describe("I loans Tap", () => {
                              it("I loans Tap", async () => {
                                // Click submit button
                                const loans = await $(
                                  "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/button[1]"
                                );
                                await loans.click();

                                describe("J Reject loan", () => {
                                  it("J Reject loan", async () => {
                                    // Click submit button
                                    const Reject = await $(
                                      "/html/body/div[1]/div/div[2]/div[2]/div/div[3]/div/div/table/tbody/tr/td[8]/div/button[1]"
                                    );
                                    await Reject.click();

                                    // Click submit button
                                    const messagtypee = await $(
                                      "/html/body/div[3]/div/div/div/div/form/div[1]/input"
                                    );
                                    await messagtypee.setValue(
                                      "remove the  loans"
                                    );

                                    // Click submit button
                                    const send = await $(
                                      "/html/body/div[3]/div/div/div/div/form/div[2]/div/div/div/button[2]"
                                    );
                                    await send.click();

                                    describe("K retrieve feedback", () => {
                                      it("K retrieve feedback", async () => {
                                        // Click submit button
                                        const loans = await $(
                                          "/html/body/div[1]/div/div[2]/div[2]/div/div[3]/div/div/table/tbody/tr/td[8]/div/button[2]"
                                        );
                                        await loans.click();
                                        // Click submit button
                                        const messagtypee = await $(
                                          "/html/body/div[4]/div/div/div/div[2]/div[2]/form/div[1]/div/input"
                                        );
                                        await messagtypee.setValue(
                                          "remove the  loans"
                                        );
                                        const send = await $(
                                          "//html/body/div[4]/div/div/div/div[2]/div[2]/form/div[1]/div/button"
                                        );
                                        await send.click();
                                        await browser.pause(3000);

                                        describe("L Submit to investor", () => {
                                          it("L Submit to investor", async () => {
                                            const action1 = await $(
                                              "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/button"
                                            );
                                            await action1.click();

                                            // Click submit button
                                            const selectionopt = await $(
                                              "/html/body/div[15]/button[2]"
                                            );
                                            await selectionopt.click();

                                            // Click submit button
                                            const selectinvestor = await $(
                                              "/html/body/div[8]/div/div/div/div[2]/form/div[1]/div/div[1]/input"
                                            );
                                            await selectinvestor.click();
                                            const Submit = await $(
                                              "/html/body/div[8]/div/div/div/div[2]/form/div[2]/div/div/div/button[2]"
                                            );
                                            await Submit.click();
                                            await browser.pause(5000);

                                            describe("M Download loan", () => {
                                              it("M Download loan", async () => {
                                                const Download = await $(
                                                  "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[3]/div/button"
                                                );
                                                await Download.click();
                                                const ex = await $(
                                                  "/html/body/div[15]/button[1]"
                                                );
                                                await ex.click();
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
          });
        });
      });
    });
  });
});
