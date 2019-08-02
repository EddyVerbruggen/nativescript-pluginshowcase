import { AppiumDriver, createDriver, SearchOptions, nsCapabilities } from "nativescript-dev-appium";
import { assert } from "chai";

describe("smoke test", () => {
  let driver: AppiumDriver;

  async function openMenuItem(which: string, verifyByLabel: string) {
    // The Chinese fella below is the hamburger icon (found it by running "tns debug android" and inspecting it with Chrome)
    const menuButton = await driver.findElementByText("", SearchOptions.contains, 10000);
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

  before(async function () {
    nsCapabilities.testReporter.context = this;
    driver = await createDriver();
  });

  after(async function () {
    await driver.quit();
  });

  afterEach(async function () {
    if (this.currentTest.state === "failed") {
      await driver.logTestArtifacts(this.currentTest.title);
    }
  });

  it("should find the welcome text", async function () {
    const displayMsg = "Thanks for installing this app,";
    const messageLabel = await driver.findElementByText(displayMsg, SearchOptions.exact);
    assert.equal(await messageLabel.text(), displayMsg);
  });

  // it("screenshot comparison succeeds", async function(){
  //   const isDisplayMessageCorrect = await driver.compareScreen("hello-world-display.png", 10, 0.2);
  //   assert.isTrue(isDisplayMessageCorrect, "Look at hello-world-display-diif.png");
  // });

  it("navigate to feedback", async function () {
    await openMenuItem("Feedback", "Toast");
    const shortToastButton = await driver.waitForElement("Short");
    await shortToastButton.click();

    const feedbackSuccessButton = await driver.waitForElement("Success, 2.5s");
    await feedbackSuccessButton.click();

    const successPeekABoo = driver.isIOS ? "Success, Peek-a-boo!" : "Peek-a-boo!";

    let fancyAlertButtonText = await (await driver.waitForElement(successPeekABoo)).text();
    assert.equal(fancyAlertButtonText.toLowerCase(), successPeekABoo.toLowerCase());

    const sorryTextAlert = "Sorry. I will dismiss myself after 2.5 seconds.";
    fancyAlertButtonText = await (await driver.waitForElement(sorryTextAlert)).text();
    assert.equal(fancyAlertButtonText.toLowerCase(), sorryTextAlert.toLowerCase());

    if (await (await driver.waitForElement(successPeekABoo)).isDisplayed()) {
      await driver.sleep(4000);
    }
  });

  it("navigate to input", async function () {
    await openMenuItem("Input", "Drawing");
    const checkboxTabButton = await driver.waitForElement("Checkbox");
    await checkboxTabButton.click();

    // checkboxes
    await (await driver.waitForElement("React Native")).click();
    await (await driver.waitForElement("NativeScript")).click();
    await (await driver.waitForElement("React Native")).click();

    // radiobuttons
    await (await driver.waitForElement("React Native!")).click();
    await (await driver.waitForElement("NativeScript!")).click();
  });

  it("navigate to app icon", async function () {
    const textValue = driver.isIOS ? "App Shortcuts" : "App shortcuts";
    await openMenuItem("App icon", textValue);
    const displayMsg = driver.isIOS ? "Add deeplink to Mapping" : "ADD DEEPLINK TO MAPPING";
    const buttonLabel = await driver.waitForElement(displayMsg);
    const buttonText: string = await buttonLabel.text();
    assert.equal(buttonText, displayMsg);
  });
});
