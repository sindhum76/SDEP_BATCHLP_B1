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
  "duration": 8903137800,
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
  "duration": 512545300,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 3196380300,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_Social_Network_tab()"
});
formatter.result({
  "duration": 4017735800,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_Social_Groups()"
});
formatter.result({
  "duration": 1028330400,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_Create_a_social_group()"
});
formatter.result({
  "duration": 739998900,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_enter_the_name_and_click_on_Add()"
});
formatter.result({
  "duration": 7560847900,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_Admin_tab()"
});
formatter.result({
  "duration": 665488700,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_User_List()"
});
formatter.result({
  "duration": 2402883900,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_enter_the_username_and_click_on_Search_button()"
});
formatter.result({
  "duration": 1256302600,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_edit_link()"
});
formatter.result({
  "duration": 1571664900,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_clear_email_text_and_enter_the_new_email_address()"
});
formatter.result({
  "duration": 524560000,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_the_inactive_radio_button_and_save_the_changes()"
});
formatter.result({
  "duration": 1634818000,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_quit_the_session()"
});
formatter.result({
  "duration": 893660200,
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
  "duration": 7463265800,
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
  "duration": 373959800,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_the_login_button()"
});
formatter.result({
  "duration": 2922329400,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_Social_Network_tab()"
});
formatter.result({
  "duration": 3938949000,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_Social_Groups()"
});
formatter.result({
  "duration": 991732500,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_Create_a_social_group()"
});
formatter.result({
  "duration": 770727600,
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
  "duration": 7290100700,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_admin_tab()"
});
formatter.result({
  "duration": 674763400,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_user_list()"
});
formatter.result({
  "duration": 2631035500,
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
  "duration": 877138100,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_edit_link()"
});
formatter.result({
  "duration": 1626586300,
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
  "duration": 310340500,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_click_on_inactive_radio_button_and_save_the_changes()"
});
formatter.result({
  "duration": 1565029700,
  "status": "passed"
});
formatter.match({
  "location": "Reg_StepDefinition.i_close_the_session()"
});
formatter.result({
  "duration": 879081300,
  "status": "passed"
});
});