const { Builder, By, Key, until } = require("selenium-webdriver");

let Chrome = require("selenium-webdriver/chrome");
let options = new Chrome.Options();
/*
async function getTitle() {
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options.addArguments("headless"))
    .build();

  console.log("Test Cases: \n\n Application's Title\n\n");

  await driver.get("http://52.90.84.23:3000/");

  await driver
    .getTitle()

    .then((title) => console.log("Title: " + title + "\n"));

  await driver.quit();
}

getTitle();


async function registerUser() {
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options.addArguments("headless"))
    .build();

  console.log(
    "Test Case : \n\nNew user registration credentials  \n" +
      "Email: test@example.com\n" +
      "Username: user\n" +
      "Password: user123\n\n"
  );

  console.log("Step-1: Navigating to registeriation page of our application\n");

  await driver.get("http://52.90.84.23:3000/");

  console.log("Step-2: Setting Email -> test@example.com\n");

  await driver
    .findElement(By.xpath('//*[@id="form1"]/input[1]'))
    .sendKeys("test3109@test.com");

  console.log("Step-3: Username Setup -> tester\n");

  await driver
    .findElement(By.xpath('//*[@id="form1"]/input[2]'))
    .sendKeys("tester1");

  console.log("Step-4: Password Setup -> test123\n");

  await driver
    .findElement(By.xpath('//*[@id="form1"]/input[3]'))
    .sendKeys("tester123");

  console.log("Step-5: Confirm Password Setup -> test123\n");

  await driver
    .findElement(By.xpath('//*[@id="form1"]/input[4]'))
    .sendKeys("tester123");

  console.log("Step-5: Pressing Register Button\n");

  await driver.findElement(By.xpath('//*[@id="form1"]/input[5]')).click();

  console.log("Successfully registered!");

  await driver.quit();
}

registerUser();

async function logUser() {
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options.addArguments("headless"))
    .build();

  console.log(
    "Test Case: \n\nLoggingin with credentials: \n" +
      "Email: test@example.com\n" +
      "Password: user123\n\n"
  );

  console.log("Step-1: Navigating to registeriation page of our application\n");

  await driver.get("http://52.90.84.23:3000/login");

  console.log("Step-2: Email setup -> test@example.com\n");

  await driver
    .findElement(By.xpath('//*[@id="form"]/input[1]'))
    .sendKeys("test0009@test.com");

  console.log("Step-3: Password Setup -> user123\n");

  await driver
    .findElement(By.xpath('//*[@id="form"]/input[2]'))
    .sendKeys("tester123");

  console.log("Step-4: Pressing the Login Button\n");

  await driver.findElement(By.xpath('//*[@id="form"]/input[3]')).click();

  console.log(
    "Step-5: Recieving the name of user who logged in to our application\n"
  );

  await driver
    .findElement(
      By.xpath("/html/body/div/div[2]/center/table/tbody/tr[1]/td[2]")
    )
    .getText()
    .then((title) => console.log("           Name ---> " + title + ">>>\n"));

  console.log("Step-6: Recieving email of user loggedin to our application\n");

  await driver
    .findElement(
      By.xpath("/html/body/div/div[2]/center/table/tbody/tr[2]/td[2]")
    )
    .getText()
    .then((title) => console.log("           Email ---> " + title + ">>>\n"));

  console.log("Successfull");

  await driver.quit();
}

logUser();

async function clickLogin() {
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options.addArguments("headless"))
    .build();

  console.log(
    "Test Case: \n\nTesting the Login anchor tag on Registration page to verify if it redirects\n\n"
  );

  console.log("Step-1: Navigating to Registeriation page of our application\n");

  await driver.get("http://52.90.84.23:3000/");

  console.log("Step-2: Recieving title of application\n");

  await driver
    .getTitle()
    .then((title) => console.log("Title" + title + ">>>\n"));

  console.log(
    "Step-3: Pressing login anchor tag on Registeriation page of our application\n"
  );

  await driver.findElement(By.xpath("/html/body/div/div[4]/span/a")).click();

  console.log(
    "Step-4: Recieving title of page after clicking login anchor tag of our application\n"
  );

  await driver
    .getTitle()
    .then((title) => console.log("Title" + title + ">>>\n"));

  console.log("Successfull!!");

  await driver.quit();
}

clickLogin();
*/
async function logoutUser() {
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options.addArguments("headless"))
    .build();

  console.log(
    "Test Case: \n\nLogging out user logged in with following credentials.. \n" +
      "Email: test@example.com\n" +
      "Password: test123\n\n"
  );

  console.log("Step-1: Navigating to Registeriation page of our application\n");

  await driver.get("http://52.90.84.23:3000/login");

  await driver
    .getTitle()
    .then((title) => console.log("Title" + title + ">>>\n"));

  console.log("Step-2: Email Setup -> test@example.com\n");

  await driver
    .findElement(By.xpath('//*[@id="form"]/input[1]'))
    .sendKeys("test@example.com");

  console.log("Step-3: Password Setup -> user\n");

  await driver
    .findElement(By.xpath('//*[@id="form"]/input[2]'))
    .sendKeys("tester123");

  console.log("Step-4: Pressing the Login Button\n");

  await driver.findElement(By.xpath('//*[@id="form"]/input[3]')).click();

  console.log(
    "Step-5: Recieving title of page when clicking login to verify if user is loggedin successfully to our application\n"
  );

  await driver.wait(
    until.elementLocated(
      By.xpath("/html/body/div/div[2]/center/table/tbody/tr[1]/td[1]")
    ),
    10000
  );

  await driver
    .getTitle()
    .then((title) =>
      console.log("           The Page Title is ---> " + title + ">>>\n")
    );

  console.log("Step-6: Recieving user name loggedin to our application\n");

  await driver
    .findElement(
      By.xpath("/html/body/div/div[2]/center/table/tbody/tr[1]/td[2]")
    )
    .getText()
    .then((title) => console.log("           Name ---> " + title + ">>>\n"));

  console.log("Step-7: Recieving email of loggedin user to our application\n");

  await driver
    .findElement(
      By.xpath("/html/body/div/div[2]/center/table/tbody/tr[2]/td[2]")
    )
    .getText()
    .then((title) => console.log("           Email ---> " + title + ">>>\n"));

  console.log("Step-8: Pressing the Logout Button\n");

  await driver.findElement(By.xpath("/html/body/div/div[3]/a")).click();

  console.log(
    "Step-9: Recieving title of page when pressing Logout Button to check whether user is successfully logged out of our containerized web application from Assignment-2\n"
  );

  await driver.wait(
    until.elementLocated(By.xpath('//*[@id="form1"]/input[1]')),
    10000
  );

  await driver
    .getTitle()
    .then((title) => console.log("Title: " + title + ">>>\n"));

  console.log("Successfull!!!");

  await driver.quit();
}

logoutUser();
