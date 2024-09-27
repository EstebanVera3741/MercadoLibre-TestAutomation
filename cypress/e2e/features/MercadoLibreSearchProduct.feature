Feature: TC-001 - Search products on Mercado Libre

  Background: The user is on the Mercado Libre homepage
    Given The user accesses the Mercado Libre website
    And The homepage loads correctly

  Scenario: SC-001 - Search for "Canon R100" product using the search bar
    When The user enters "Canon R100" in the search field
    And The user performs the search
    Then The system should display a list of related products
    When The user selects a product from the list
    Then The selected product should be "Canon R100"