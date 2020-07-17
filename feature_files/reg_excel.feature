@RegistrationExcel
Feature: This feature is to automate the elearning page
  I want to use this template for my feature file

  @CreateGrpEditUserExcel
  Scenario: To login to the application
    Given I want to launch the application with excel data "http://elearningm1.upskills.in/"
    Then I enter the user "admin" and passwd "admin@123"
    Then I click on the login button
    Then I click on the Social Network tab
    Then I click on the Social Groups
    Then I click on the Create a social group
    Then I enter the name and click on Add
    Then I click on the Admin tab
    Then I click on the User List
    Then I enter the username and click on Search button
    Then I click on the edit link
    Then I clear email text and enter the new email address
    Then I click on the inactive radio button and save the changes
    Then I quit the session
