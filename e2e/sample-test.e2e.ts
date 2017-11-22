import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";
import { assert } from "chai";

describe("smoke test", () => {
  let driver: AppiumDriver;

  async function openMenuItem(which: string, verifyByLabel: string) {
    // The Chinese fella below is the hamburger icon (found it by running "tns debug android" and inspecting it with Chrome)
    const menuButton = await driver.findElementByText("", SearchOptions.contains);
    await menuButton.click();
    const messageLabel = await driver.findElementByText(which, SearchOptions.contains);
    await messageLabel.click();
    await driver.findElementByText(verifyByLabel, SearchOptions.contains);
  }

  async function wait(ms: number): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => resolve(), ms);
    });
  }

  before(async () => {
    driver = await createDriver();
  });

  after(async () => {
    await driver.quit();
  });

  afterEach(async function () {
    if (this.currentTest.state === "failed") {
      await driver.logScreenshot(this.currentTest.title);
    }
  });

  it("should find the welcome text", async () => {
    const displayMsg = "Thanks for installing this app,";
    const messageLabel = await driver.findElementByText(displayMsg, SearchOptions.exact);
    assert.equal(await messageLabel.text(), displayMsg);
  });

  // it("screenshot comparison succeeds", async () => {
  //   const isDisplayMessageCorrect = await driver.compareScreen("hello-world-display.png", 10, 0.2);
  //   assert.isTrue(isDisplayMessageCorrect, "Look at hello-world-display-diif.png");
  // });

  it("navigate to feedback", async () => {
    await openMenuItem("Feedback", "Toast");
    const shortToastButton = await driver.findElementByText("Short", SearchOptions.exact);
    await shortToastButton.click();

    const feedbackSuccessButton = await driver.findElementByText("Success, 2.5s", SearchOptions.exact);
    await feedbackSuccessButton.click();
    // the message needs to go, so wait a little
    await wait(3500);

    const fancyAlertSuccessButton = await driver.findElementByText("Success", SearchOptions.exact);
    const fancyAlertButtonText: string = await fancyAlertSuccessButton.text();
    assert.equal(fancyAlertButtonText.toLowerCase(), "success");
  });

  it("navigate to input", async () => {
    await openMenuItem("Input", "Drawing");
    const checkboxTabButton = await driver.findElementByText("Checkbox", SearchOptions.exact);
    await checkboxTabButton.click();

    // checkboxes
    (await driver.findElementByText("React Native", SearchOptions.exact)).click();
    (await driver.findElementByText("NativeScript", SearchOptions.exact)).click();
    (await driver.findElementByText("React Native", SearchOptions.exact)).click();

    // radiobuttons
    (await driver.findElementByText("React Native!", SearchOptions.exact)).click();
    (await driver.findElementByText("NativeScript!", SearchOptions.exact)).click();
  });

  it("navigate to app icon", async () => {
    await openMenuItem("App icon", "App shortcuts");
    const displayMsg = "add deeplink to mapping";
    const buttonLabel = await driver.findElementByText(displayMsg, SearchOptions.exact);
    const buttonText: string = await buttonLabel.text();
    assert.equal(buttonText.toLowerCase(), displayMsg);
  });
});
