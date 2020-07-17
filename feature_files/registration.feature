@Registration
Feature: This feature is to automate the elearning page
  I want to use this template for my feature file

  @CreateGrpEditUser
  Scenario: To login to the application
    Given I want to launch the application "http://elearningm1.upskills.in/"
    Then I enter the username "admin" and password "admin@123"
    Then I click the login button
    Then I click on Social Network tab
    Then I click on Social Groups
    Then I click on Create a social group
    Then I enter the name "rockers" and click on Add
    Then I click on Admin tab
    Then I click on User List
    Then I enter the username "sunil" and click on Search button
    Then I click on edit link
    Then I clear email text "sunil@gmail.com" and enter the new email address
    Then I click on inactive radio button and save the changes
    Then I close the session

  
