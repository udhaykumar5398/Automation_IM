import { login } from "../../utils/login";
import allure from "@wdio/allure-reporter";
import path from "path";

describe("A login ", () => {
  it("login", async () => {
    await browser.url("https://imtest.intainmarkets.us/");
    console.log(await browser.getTitle());

    await login("testissuer001@intainft.com", "Intain123!", "Issuer");

    await browser.waitUntil(
      async () => (await browser.getUrl()).includes("/issuer/dashboard"),
      {
        timeout: 5000,
        timeoutMsg: "Dashboard page did not load within the expected time",
      }
    );

    // Intercept API responses
    await browser.execute(() => {
      window.__apiResponses = [];
      const originalFetch = window.fetch;
      window.fetch = function () {
        return originalFetch.apply(this, arguments).then((response) => {
          response
            .clone()
            .json()
            .then((data) => {
              window.__apiResponses.push({
                url: arguments[0],
                status: response.status,
                data: data,
              });
            });
          return response;
        });
      };

      const open = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function () {
        this.addEventListener("load", function () {
          try {
            const responseJSON = JSON.parse(this.responseText);
            window.__apiResponses.push({
              url: this.responseURL,
              status: this.status,
              data: responseJSON,
            });
          } catch (e) {
            console.error("Error parsing JSON response:", e);
          }
        });
        open.apply(this, arguments);
      };
    });

    describe("A1   Setup Pool ", () => {
      it("setup a pool", async () => {
        const Setuppool = await $(
          "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[3]/div/div/button"
        );
        await Setuppool.click();

        await $(
          "/html/body/div[4]/div/div/div/div[2]/form/div[1]/input"
        ).setValue("testpool-25");

        const Assettype = await $(
          "/html/body/div[4]/div/div/div/div[2]/form/div[2]/select"
        );
        await Assettype.click();

        const Assettypeselelct = await $(
          "/html/body/div[4]/div/div/div/div[2]/form/div[2]/select/option[2]"
        );
        await Assettypeselelct.click();

        const TransactionType = await $(
          "/html/body/div[4]/div/div/div/div[2]/form/div[3]/select"
        );
        await TransactionType.click();

        const TransactionTypeSelect = await $(
          "/html/body/div[4]/div/div/div/div[2]/form/div[3]/select/option[3]"
        );
        await TransactionTypeSelect.click();

        await $(
          "/html/body/div[4]/div/div/div/div[2]/form/div[4]/textarea"
        ).setValue("testing");

        const Setupbutton = await $(
          "/html/body/div[4]/div/div/div/div[2]/form/div[5]/div/div/div/button[2]"
        );
        await Setupbutton.click();

        await browser.pause(3000);

        const apiResponses = await browser.execute(() => {
          return window.__apiResponses;
        });

        console.log("Captured API Responses:", apiResponses);

        // Add the captured responses to the Allure report
        allure.addAttachment(
          "Captured API Responses",
          JSON.stringify(apiResponses, null, 2),
          "application/json"
        );
      });
    });
    describe("B  View Loans", () => {
      it(" View Loans", async () => {
        // Intercept API responses right before clicking Next
        await browser.execute(() => {
          window.__apiResponses = [];

          // Intercept fetch requests
          const originalFetch = window.fetch;
          window.fetch = function (...args) {
            return originalFetch.apply(this, args).then((response) => {
              response
                .clone()
                .json()
                .then((data) => {
                  window.__apiResponses.push({
                    url: args[0],
                    status: response.status,
                    data: data,
                  });
                });
              return response;
            });
          };

          // Intercept XMLHttpRequest requests
          const open = XMLHttpRequest.prototype.open;
          XMLHttpRequest.prototype.open = function () {
            this.addEventListener("load", function () {
              try {
                const responseJSON = JSON.parse(this.responseText);
                window.__apiResponses.push({
                  url: this.responseURL,
                  status: this.status,
                  data: responseJSON,
                });
              } catch (e) {
                console.error("Error parsing JSON response:", e);
              }
            });
            open.apply(this, arguments);
          };
        });

        const loans = await $("/html/body/div[1]/div/div[2]/div[1]/ul/li[2]/a");
        await loans.click();

        // Retrieve the captured API responses
        const apiResponses = await browser.execute(() => {
          return window.__apiResponses;
        });
        console.log("Captured API Responses:", apiResponses);

        // Log the API responses to Allure report
        allure.addAttachment(
          "Captured API Responses",
          JSON.stringify(apiResponses, null, 2),
          "application/json"
        );

        // Filter only responses with non-200 status (errors)
        const errorResponses = apiResponses.filter(
          (response) => response.status !== 200
        );

        // Log the error responses to Allure report
        allure.addAttachment(
          "Error API Responses",
          JSON.stringify(errorResponses, null, 2),
          "application/json"
        );
      });
    });

    describe("C Upload loan  Excel", () => {
      it("upload an Excel file", async () => {
        const loans = await $("/html/body/div[1]/div/div[2]/div[1]/ul/li[2]/a");
        await loans.click();

        const Addbutton = await $(
          "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/button[1]/span[1]"
        );
        await Addbutton.click();

        const uploadbutton = await $(
          "/html/body/div[6]/div/div/div/div[2]/form/div[1]/div/div/button"
        );
        await uploadbutton.click();

        const fileInput = await $('input[type="file"]');
        const filePath = path.resolve(
          "/home/rohityadav/Downloads/LMS_L50_9975121.xlsx"
        );
        await fileInput.setValue(filePath);
        console.log("Excel file uploaded successfully.");

        const AssetClass = await $(
          "/html/body/div[6]/div/div/div/div[2]/form/div[2]/select"
        );
        await AssetClass.click();

        const AssetClassSelect = await $(
          "/html/body/div[6]/div/div/div/div[2]/form/div[2]/select/option[2]"
        );
        await AssetClassSelect.click();

        const AsOfDate = await $(
          "/html/body/div[6]/div/div/div/div[2]/form/div[3]/div/div[1]/div/input"
        );
        await AsOfDate.click();

        const dateselect = await $(
          "/html/body/div[6]/div/div/div/div[2]/form/div[3]/div/div[2]/div[2]/div/div/div[2]/div[2]/div[3]/div[5]"
        );
        await dateselect.click();

        // Intercept API responses right before clicking Next
        await browser.execute(() => {
          window.__apiResponses = [];

          // Intercept fetch requests
          const originalFetch = window.fetch;
          window.fetch = function (...args) {
            return originalFetch.apply(this, args).then((response) => {
              response
                .clone()
                .json()
                .then((data) => {
                  window.__apiResponses.push({
                    url: args[0],
                    status: response.status,
                    data: data,
                  });
                });
              return response;
            });
          };

          // Intercept XMLHttpRequest requests
          const open = XMLHttpRequest.prototype.open;
          XMLHttpRequest.prototype.open = function () {
            this.addEventListener("load", function () {
              try {
                const responseJSON = JSON.parse(this.responseText);
                window.__apiResponses.push({
                  url: this.responseURL,
                  status: this.status,
                  data: responseJSON,
                });
              } catch (e) {
                console.error("Error parsing JSON response:", e);
              }
            });
            open.apply(this, arguments);
          };
        });

        // Click Next button (this will trigger the API call we want to capture)
        const next = await $(
          "/html/body/div[6]/div/div/div/div[2]/form/div[4]/div/div/div/button[2]/span[1]"
        );
        await next.click();

        // Retrieve the captured API responses
        const apiResponses = await browser.execute(() => {
          return window.__apiResponses;
        });
        console.log("Captured API Responses:", apiResponses);

        // Log the API responses to Allure report
        allure.addAttachment(
          "Captured API Responses",
          JSON.stringify(apiResponses, null, 2),
          "application/json"
        );

        // Filter only responses with non-200 status (errors)
        const errorResponses = apiResponses.filter(
          (response) => response.status !== 200
        );

        // Log the error responses to Allure report
        allure.addAttachment(
          "Error API Responses",
          JSON.stringify(errorResponses, null, 2),
          "application/json"
        );

        describe("D Mapping loan", () => {
          it("Mapping loan ", async () => {
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
              "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[317]/td/div[2]/div/input"
            );

            await PropertyState.click();
            await maploanid1.click();
            const PropertyState1 = await $(
              "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/table/tbody/tr[7]/td[2]/div[2]/div/select/option[5]"
            );

            await PropertyState1.click();

            const Propertycity = await $(
              "/html/body/div[5]/div/div/div[2]/div/div/div[1]/div[1]/div/div[2]/table/tbody/tr[312]/td/div[2]/div/input"
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
            await browser.execute(() => {
              window.__apiResponses = [];

              const originalFetch = window.fetch;
              window.fetch = function (...args) {
                return originalFetch.apply(this, args).then((response) => {
                  response
                    .clone()
                    .json()
                    .then((data) => {
                      window.__apiResponses.push({
                        url: args[0],
                        status: response.status,
                        data: data,
                      });
                    })
                    .catch((err) => {
                      console.error(
                        "Error capturing fetch response JSON:",
                        err
                      );
                    });
                  return response;
                });
              };

              const originalXHR = XMLHttpRequest.prototype.open;
              XMLHttpRequest.prototype.open = function () {
                this.addEventListener("load", function () {
                  try {
                    const responseJSON = JSON.parse(this.responseText);
                    window.__apiResponses.push({
                      url: this.responseURL,
                      status: this.status,
                      data: responseJSON,
                    });
                  } catch (e) {
                    console.error("Error parsing XHR response JSON:", e);
                  }
                });
                originalXHR.apply(this, arguments);
              };
            });

            const addLoansButton = await $(
              "/html/body/div[5]/div/div/div[2]/div/div/div[3]/button[2]"
            );
            await addLoansButton.click();
            await browser.pause(3000); // Allow time for API calls to complete

            // Retrieve and process API responses
            const apiResponses = await browser.execute(
              () => window.__apiResponses || []
            );
            console.log("Captured API Responses:", apiResponses);

            // Attach to Allure report
            allure.addAttachment(
              "Captured API Responses",
              JSON.stringify(apiResponses, null, 2),
              "application/json"
            );

            if (apiResponses.length > 0) {
              const errorResponses = apiResponses.filter(
                (response) => response.status !== 200
              );

              console.log("Error API Responses:", errorResponses);

              // Log error responses to Allure
              allure.addAttachment(
                "Error API Responses",
                JSON.stringify(errorResponses, null, 2),
                "application/json"
              );

              // Assert if there are any errors
              if (errorResponses.length > 0) {
                throw new Error(
                  `Found ${errorResponses.length} error responses. Check Allure report for details.`
                );
              }
            } else {
              console.warn(
                "No API responses captured. Ensure that the API calls were made."
              );
            }

            describe("E Filtering loan option", () => {
              it("Filtering loan option", async () => {
                const filter = await $(
                  "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/thead/tr/th[2]/div/div/img"
                );
                await filter.click();

                const select = await $(
                  "/html/body/div[10]/div[2]/div[3]/div[1]/select/option[2]"
                );
                await select.click();

                const entergtval = await $(
                  "/html/body/div[10]/div[2]/div[3]/div[1]/input"
                );
                await entergtval.setValue("109827419");

                const orbtn = await $(
                  "/html/body/div[10]/div[2]/div[3]/div[2]/div[2]/input"
                );
                await orbtn.click();

                const selectl = await $(
                  "/html/body/div[10]/div[2]/div[3]/div[3]/select[1]/option[3]"
                );
                await selectl.click();

                const enterlsval = await $(
                  "/html/body/div[10]/div[2]/div[3]/div[3]/input"
                );
                await enterlsval.setValue("109827420");

                const submit = await $(
                  "/html/body/div[10]/div[2]/div[3]/div[4]/button[2]"
                );
                await submit.click();

                describe("F Map loans to Pool", () => {
                  it(" Map loans to Pool ", async () => {
                    await browser.pause(1000);

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
                      "/html/body/div[10]/div/div/div/div[2]/form/div[1]/select/option[4906]"
                    );
                    await maptopoolse.click();

                    // Intercept API responses right before clicking Next
                    await browser.execute(() => {
                      window.__apiResponses = [];

                      // Intercept fetch requests
                      const originalFetch = window.fetch;
                      window.fetch = function (...args) {
                        return originalFetch
                          .apply(this, args)
                          .then((response) => {
                            response
                              .clone()
                              .json()
                              .then((data) => {
                                window.__apiResponses.push({
                                  url: args[0],
                                  status: response.status,
                                  data: data,
                                });
                              });
                            return response;
                          });
                      };

                      // Intercept XMLHttpRequest requests
                      const open = XMLHttpRequest.prototype.open;
                      XMLHttpRequest.prototype.open = function () {
                        this.addEventListener("load", function () {
                          try {
                            const responseJSON = JSON.parse(this.responseText);
                            window.__apiResponses.push({
                              url: this.responseURL,
                              status: this.status,
                              data: responseJSON,
                            });
                          } catch (e) {
                            console.error("Error parsing JSON response:", e);
                          }
                        });
                        open.apply(this, arguments);
                      };
                    });

                    const mapnow = await $(
                      "/html/body/div[10]/div/div/div/div[2]/form/div[2]/div/div/div/button[2]"
                    );
                    await mapnow.click();

                    // Retrieve the captured API responses
                    const apiResponses = await browser.execute(() => {
                      return window.__apiResponses;
                    });
                    console.log("Captured API Responses:", apiResponses);

                    // Log the API responses to Allure report
                    allure.addAttachment(
                      "Captured API Responses",
                      JSON.stringify(apiResponses, null, 2),
                      "application/json"
                    );

                    // Filter only responses with non-200 status (errors)
                    const errorResponses = apiResponses.filter(
                      (response) => response.status !== 200
                    );

                    // Log the error responses to Allure report
                    allure.addAttachment(
                      "Error API Responses",
                      JSON.stringify(errorResponses, null, 2),
                      "application/json"
                    );
                    await browser.pause(1000);

                    describe("G View Summary", () => {
                      it(" View Summary", async () => {
                        const Summary = await $(
                          "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/buton[4]"
                        );
                        await Summary.click();
                      });
                    });
                    describe(" H View Strat", () => {
                      it("View Strat", async () => {
                        const Strat = await $(
                          "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/buton[5]"
                        );
                        await Strat.click();
                      });
                    });
                    describe("I View Loans", () => {
                      it("View Loans", async () => {
                        const Loans = await $(
                          "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/buton[6]"
                        );
                        await Loans.click();
                      });
                    });
                    describe("J Edit >> pool Details", () => {
                      it("Edit >> pool Details", async () => {
                        const Edit = await $(
                          "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/button[1]"
                        );
                        await Edit.click();

                        const poolDetails = await $(
                          "/html/body/div[20]/button[1]"
                        );
                        await poolDetails.click();

                        await $(
                          "/html/body/div[9]/div/div/div/div[2]/form/div[3]/textarea"
                        ).setValue("testpool");

                        const Submit = await $(
                          "/html/body/div[9]/div/div/div/div[2]/form/div[7]/div/div/div/button[2]"
                        );
                        await Submit.click();
                      });
                    });
                    describe("K Edit >> Loantape", () => {
                      it("Edit >> Loantape", async () => {
                        const Edit = await $(
                          "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/button[1]"
                        );
                        await Edit.click();

                        const Loantape = await $(
                          "/html/body/div[20]/button[2]"
                        );
                        await Loantape.click();

                        const upload = await $(
                          "/html/body/div[7]/div/div/div/div[2]/form/div[1]/div/div/button"
                        );
                        await upload.click();

                        const fileInput = await $('input[type="file"]');
                        const filePath = path.resolve(
                          "/home/rohityadav/Downloads/lms(2).xlsx"
                        );
                        await fileInput.setValue(filePath);
                        console.log("Excel file uploaded successfully.");

                        const next = await $(
                          "/html/body/div[7]/div/div/div/div[2]/form/div[3]/div/div/div/button[2]"
                        );
                        await next.click();

                        const Addloans = await $(
                          "/html/body/div[8]/div/div/div[2]/div/div/div[3]/button[2]"
                        );
                        await Addloans.click();

                      });
                    });

                    describe("L Unmap Loan from Pool (Pending >> Delete Loans)", () => {
                      it(" Unmap Loan from Pool (Pending >> Delete Loans)", async () => {
                        const Pending = await $(
                          "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/buton[2]"
                        );
                        await Pending.click();

                        const a1 = await $(
                          "/html/body/div[1]/div/div[2]/div[2]/div/div[3]/div/div/table/tbody/tr/td[8]/div/button"
                        );
                        await a1.click();

                        const accecpt = await $(
                          "/html/body/div[11]/div/div/div/div[2]/div/div/div/div/button[2]"
                        );
                        await accecpt.click();
                      });
                    });

                   

                    describe("M pool dashboard", () => {
                      it(" pool dashboard)", async () => {
                        const dashboard = await $(
                          "//html/body/div[1]/div/div[2]/div[1]/ul/li[1]/a"
                        );
                        await dashboard.click();

                        await browser.pause(3000);

                        const dashboard1 = await $(
                          "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/thead/tr/th[3]/div/div/img"
                        );
                        await dashboard1.click();

                        const entergtval = await $(
                          "/html/body/div[4]/div[2]/div[3]/div[1]/div/input"
                        );
                        await entergtval.setValue("testpool-25");

                        const Submit = await $(
                          "/html/body/div[4]/div[2]/div[3]/div[4]/button[2]"
                        );
                        await Submit.click();
                      });
                    });

                    // describe(" pool filter", () => {
                    //   it(" pool filter)", async () => {
                    //     const dashboard = await $(
                    //       "//html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/thead/tr/th[3]/div/div/img"
                    //     );
                    //     await dashboard.click();

                    //     const entergtval = await $(
                    //       "/html/body/div[4]/div[2]/div[3]/div[1]/div/input"
                    //     );
                    //     await entergtval.setValue("testpool-04");

                    //     const Submit = await $(
                    //       "/html/body/div[4]/div[2]/div[3]/div[4]/button[2]"
                    //     );
                    //     await Submit.click();

                    //   });
                    // });

                    describe("N view pool ", () => {
                      it(" view pool )", async () => {
                        const view = await $(
                          "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/tbody/tr/td[9]/div/button[1]"
                        );
                        await view.click();
                      });
                    });

                    describe("O Submit for preview", () => {
                      it("Submit for preview", async () => {
                        const Submitpreview = await $(
                          "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/button[2]"
                        );
                        await Submitpreview.click();

                        const preview = await $("/html/body/div[20]/button[1]");
                        await preview.click();

                        const UA = await $(
                          "/html/body/div[9]/div/div/div/div[2]/form/div[4]/div/div/div[1]/div[2]"
                        );
                        await UA.click();

                        const UA1 = await $(
                          "/html/body/div[9]/div/div/div/div[2]/form/div[4]/div/div/div[1]/div[2]/input"
                        );
                        await UA1.setValue("TEST UNDERWRITER");
                        await browser.keys("ArrowDown");

                        await browser.keys("Enter");

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

                        //     // Intercept API responses right before clicking Next
                        //     await browser.execute(() => {
                        //       window.__apiResponses = [];

                        //       // Intercept fetch requests
                        //       const originalFetch = window.fetch;
                        //       window.fetch = function (...args) {
                        //         return originalFetch
                        //           .apply(this, args)
                        //           .then((response) => {
                        //             response
                        //               .clone()
                        //               .json()
                        //               .then((data) => {
                        //                 window.__apiResponses.push({
                        //                   url: args[0],
                        //                   status: response.status,
                        //                   data: data,
                        //                 });
                        //               });
                        //             return response;
                        //           });
                        //       };

                        //       // Intercept XMLHttpRequest requests
                        //       const open = XMLHttpRequest.prototype.open;
                        //       XMLHttpRequest.prototype.open = function () {
                        //         this.addEventListener("load", function () {
                        //           try {
                        //             const responseJSON = JSON.parse(
                        //               this.responseText
                        //             );
                        //             window.__apiResponses.push({
                        //               url: this.responseURL,
                        //               status: this.status,
                        //               data: responseJSON,
                        //             });
                        //           } catch (e) {
                        //             console.error(
                        //               "Error parsing JSON response:",
                        //               e
                        //             );
                        //           }
                        //         });
                        //         open.apply(this, arguments);
                        //       };
                        //     });

                        const Submit = await $(
                          "/html/body/div[9]/div/div/div/div[2]/form/div[7]/div/div/div/button[2]/span[1]"
                        );
                        await Submit.click();
                        //     await browser.pause(3000);

                        //     // Retrieve the captured API responses
                        //     const apiResponses = await browser.execute(() => {
                        //       return window.__apiResponses;
                        //     });
                        //     console.log("Captured API Responses:", apiResponses);

                        //     // Log the API responses to Allure report
                        //     allure.addAttachment(
                        //       "Captured API Responses",
                        //       JSON.stringify(apiResponses, null, 2),
                        //       "application/json"
                        //     );

                        //     // Filter only responses with non-200 status (errors)
                        //     const errorResponses = apiResponses.filter(
                        //       (response) => response.status !== 200
                        //     );

                        //     // Log the error responses to Allure report
                        //     allure.addAttachment(
                        //       "Error API Responses",
                        //       JSON.stringify(errorResponses, null, 2),
                        //       "application/json"
                        //     );
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
