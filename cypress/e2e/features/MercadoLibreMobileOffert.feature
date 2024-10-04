Feature: TC-003 - Search for cellphone offers between 200,000 and 300,000 pesos on Mercado Libre

  Background: The user is on the Mercado Libre homepage
    Given The user accesses the Mercado Libre website
    And The homepage loads correctly

  Scenario: SC-001 - Search for cellphone offers within a price range
    When The user selects the "Offers" button in the navigation
    And The user selects the Cellphones icon
    And The user navigates to the filters section
    And The user enters a minimum amount of 200000 and a maximum amount of 300000 pesos
    Then The system displays a list of cellphones on offer within the price range
    When The user selects the first cellphone option from the list
    Then The user verifies the description of the selected product