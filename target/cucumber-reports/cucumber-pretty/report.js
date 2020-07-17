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
  "duration": 22331434800,
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
  "duration": 538688300,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 8468486600,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_Social_Network_tab()"
});
formatter.result({
  "duration": 41778361000,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_Social_Groups()"
});
formatter.result({
  "duration": 1677725400,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_Create_a_social_group()"
});
formatter.result({
  "duration": 1097731300,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_enter_the_name_and_click_on_Add()"
});
formatter.result({
  "duration": 7918448100,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_Admin_tab()"
});
formatter.result({
  "duration": 819071600,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_User_List()"
});
formatter.result({
  "duration": 5341730100,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_enter_the_username_and_click_on_Search_button()"
});
formatter.result({
  "duration": 1341477700,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_edit_link()"
});
formatter.result({
  "duration": 2300060500,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_clear_email_text_and_enter_the_new_email_address()"
});
formatter.result({
  "duration": 549570000,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_inactive_radio_button_and_save_the_changes()"
});
formatter.result({
  "duration": 1980762200,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_quit_the_session()"
});
formatter.result({
  "duration": 916983700,
  "status": "passed"
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
  "duration": 13475021600,
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
  "duration": 402965500,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_the_login_button()"
});
formatter.result({
  "duration": 10572687800,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_Social_Network_tab()"
});
formatter.result({
  "duration": 5449780100,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_Social_Groups()"
});
formatter.result({
  "duration": 1276935300,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_Create_a_social_group()"
});
formatter.result({
  "duration": 996480800,
  "status": "passed"
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
  "duration": 6275788700,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_admin_tab()"
});
formatter.result({
  "duration": 837581000,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_user_list()"
});
formatter.result({
  "duration": 4978145800,
  "status": "passed"
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
  "duration": 1736390900,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_edit_link()"
});
formatter.result({
  "duration": 2271561100,
  "status": "passed"
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
  "duration": 426706600,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_inactive_radio_button_and_save_the_changes()"
});
formatter.result({
  "duration": 3018482200,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_close_the_session()"
});
formatter.result({
  "duration": 1100184200,
  "status": "passed"
});
});