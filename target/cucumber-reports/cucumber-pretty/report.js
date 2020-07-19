$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("reg_excel.feature");
formatter.feature({
  "line": 2,
  "name": "This feature is to automate the elearning page",
  "description": "I want to use this template for my feature file",
  "id": "this-feature-is-to-automate-the-elearning-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegistrationExcel"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "To login to the application",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-page;to-login-to-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@CreateGrpEditUserExcel"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to launch the application with excel data \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the user \"admin\" and passwd \"admin@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on the Social Network tab",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on the Social Groups",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on the Create a social group",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter the name and click on Add",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on the Admin tab",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on the User List",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter the username and click on Search button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on the edit link",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I clear email text and enter the new email address",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on the inactive radio button and save the changes",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I quit the session",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://elearningm1.upskills.in/",
      "offset": 50
    }
  ],
  "location": "Reg_StepDefinition.i_want_to_launch_the_application_with_excel_data(String)"
});
formatter.result({
  "duration": 9338837400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 18
    },
    {
      "val": "admin@123",
      "offset": 37
    }
  ],
  "location": "Reg_StepDefinition.i_enter_the_user_and_passwd(String,String)"
});
formatter.result({
  "duration": 539662900,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 3275188300,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_Social_Network_tab()"
});
formatter.result({
  "duration": 2108495100,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //li[@class\u003d\u0027social-network active\u0027]//following:://a[contains(text(),\u0027Social network\u0027)] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//li[@class\u003d\u0027social-network active\u0027]//following:://a[contains(text(),\u0027Social network\u0027)]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d84.0.4147.89)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-00T6P8Q\u0027, ip: \u00279.102.49.86\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\SINDHU~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55798}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 991818e37af29ea50c9dac6ee4b3c83a\n*** Element info: {Using\u003dxpath, value\u003d//li[@class\u003d\u0027social-network active\u0027]//following:://a[contains(text(),\u0027Social network\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:83)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:57)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:437)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefinitions.Reg_StepDefinition.i_click_on_the_Social_Network_tab(Reg_StepDefinition.java:171)\r\n\tat ✽.Then I click on the Social Network tab(reg_excel.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_Social_Groups()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_Create_a_social_group()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reg_StepDefinition.i_enter_the_name_and_click_on_Add()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_Admin_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_User_List()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reg_StepDefinition.i_enter_the_username_and_click_on_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_edit_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reg_StepDefinition.i_clear_email_text_and_enter_the_new_email_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_inactive_radio_button_and_save_the_changes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reg_StepDefinition.i_quit_the_session()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("registration.feature");
formatter.feature({
  "line": 2,
  "name": "This feature is to automate the elearning page",
  "description": "I want to use this template for my feature file",
  "id": "this-feature-is-to-automate-the-elearning-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "To login to the application",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-page;to-login-to-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@CreateGrpEditUser"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to launch the application \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the username \"admin\" and password \"admin@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on Social Network tab",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Social Groups",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on Create a social group",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter the name \"rockers\" and click on Add",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on Admin tab",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on User List",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter the username \"sunil\" and click on Search button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on edit link",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I clear email text \"sunil@gmail.com\" and enter the new email address",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on inactive radio button and save the changes",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I close the session",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://elearningm1.upskills.in/",
      "offset": 34
    }
  ],
  "location": "Reg_StepDefinition.i_want_to_launch_the_application(String)"
});
formatter.result({
  "duration": 7601950000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 22
    },
    {
      "val": "admin@123",
      "offset": 43
    }
  ],
  "location": "Reg_StepDefinition.i_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 635730400,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_the_login_button()"
});
formatter.result({
  "duration": 2910794100,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_Social_Network_tab()"
});
formatter.result({
  "duration": 2107260700,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //li[@class\u003d\u0027social-network active\u0027]//following:://a[contains(text(),\u0027Social network\u0027)] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//li[@class\u003d\u0027social-network active\u0027]//following:://a[contains(text(),\u0027Social network\u0027)]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d84.0.4147.89)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-00T6P8Q\u0027, ip: \u00279.102.49.86\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\SINDHU~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55825}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b00547e26ac88cb031e1da751c7d2a88\n*** Element info: {Using\u003dxpath, value\u003d//li[@class\u003d\u0027social-network active\u0027]//following:://a[contains(text(),\u0027Social network\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:83)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:57)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:437)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefinitions.Reg_StepDefinition.i_click_on_Social_Network_tab(Reg_StepDefinition.java:73)\r\n\tat ✽.Then I click on Social Network tab(registration.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_Social_Groups()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_Create_a_social_group()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "rockers",
      "offset": 18
    }
  ],
  "location": "Reg_StepDefinition.i_enter_the_name_and_click_on_Add(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_admin_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_user_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sunil",
      "offset": 22
    }
  ],
  "location": "Reg_StepDefinition.i_enter_the_username_and_click_on_Search_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_edit_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sunil@gmail.com",
      "offset": 20
    }
  ],
  "location": "Reg_StepDefinition.i_clear_email_text_and_enter_the_new_email_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_inactive_radio_button_and_save_the_changes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reg_StepDefinition.i_close_the_session()"
});
formatter.result({
  "status": "skipped"
});
});