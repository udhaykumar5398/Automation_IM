import { login } from "../../utils/login";
import allure from "@wdio/allure-reporter";
import path from "path";

  describe("login page", () => {
    it("login page", async () => {
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

      describe("searching pool filter", () => {
        it("searching pool filter )", async () => {
          const dashboard1 = await $(
            "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/thead/tr/th[3]/div/div/img"
          );
          await dashboard1.click();

          const entergtval = await $(
            "/html/body/div[4]/div[2]/div[3]/div[1]/div/input"
          );
          await entergtval.setValue("testpool-22");

          const Submit = await $(
            "/html/body/div[4]/div[2]/div[3]/div[4]/button[2]"
          );
          await Submit.click();
        });
      });

      describe("view pool ", () => {
        it(" view pool )", async () => {
          const view = await $(
            "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div/div/div/table/tbody/tr/td[9]/div/button[1]"
          );
          await view.click();
        });
      });

      

      describe("Add document)", () => {
        it("Add document)", async () => {
          const Add = await $(
            "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div[2]/div[1]/button"
          );
          await Add.click();

          const upload = await $(
            "/html/body/div[19]/div/div/div/div[2]/form/div[1]/div/div/button"
          );
          await upload.click();

          const fileInput = await $('input[type="file"]');
          const filePath = path.resolve("/home/rohityadav/Downloads/628.pdf");
          await fileInput.setValue(filePath);
          console.log("Excel file uploaded successfully.");

          await $(
            "/html/body/div[19]/div/div/div/div[2]/form/div[2]/input"
          ).setValue("document");

          await $(
            "/html/body/div[19]/div/div/div/div[2]/form/div[3]/textarea"
          ).setValue("document");

          const Addbutton = await $(
            "/html/body/div[19]/div/div/div/div[2]/form/div[4]/div/div/div/button[2]"
          );
          await Addbutton.click();
          await browser.pause(3000);


          describe("Download Document", () => {
            it("Download Document", async () => {
              
              const button1 = await $(
                "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]"              );
              await button1.click();
              await browser.pause(3000);


              describe("delete document", () => {
                it("delete document", async () => {
                  const button = await $(
                    "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[2]"
                  );
                  await button.click();

                  const Delete = await $("/html/body/div[20]/button[2]");
                  await Delete.click();

                  const Delete1 = await $(
                    "/html/body/div[4]/div/div/div/div[2]/div/div/div/div/button[2]"
                  );
                  await Delete1.click();

                  describe("Download Loantape xl (Loantape >>download)", () => {
                    it("Download Loantape xl (Loantape >>download)", async () => {
                      const download = await $(
                        "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/button"
                      );
                      await download.click();

                      const download1 = await $(
                        "/html/body/div[1]/div/div[2]/div[2]/div/div[2]/div[3]/div[2]/button/span[1]"
                      );
                      await download1.click();

                      const excel = await $(
                        "/html/body/div[20]/button[1]"
                      );
                      await excel.click();
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

