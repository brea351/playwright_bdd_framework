Feature: Login

  Scenario: User login with invalid credentials
    Given I open the login page
    When I login with invalid credentials
    Then I should see an error message