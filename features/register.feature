Feature: Register

  Scenario Outline: As a user, I want to register with my personal data

    Given I am on the register page
    When I register with <email> and <password>
    Then We should see the Basic Info page
    And I fill the fields <firstName>, <lastName>, <mobileNumber> and <zipCode>
    Then I select <dropdownOption> in the qualification dropdown
    And I click on the checkboxes evening, weekend shifts
    Then I click on the 6 months radio button
    And the continue button can't be clicked
    Then we click on the terms and agreement checkbox
    And we click the continue button
    Then we should be redirected to the Confirm Phone page

    Examples:
      | email                         | password             | firstName | lastName | mobileNumber | zipCode | dropdownOption  |
      | belka.shehaj93@mailinator.com | SuperSecretPassword1 | Belka    | Shehaj   | 7589577506   | 02090   |  LPN / LVN      |
