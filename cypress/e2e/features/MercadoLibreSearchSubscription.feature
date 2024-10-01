Feature: TC-002 - Validate FAQs about subscription on Mercado Libre

  Background: The user is on the Mercado Libre homepage
    Given The user accesses the Mercado Libre website
    And The homepage loads correctly

  Scenario: SC-002 - Search for subscription information
    When The user selects the "Help" button from the browser
    And The user identifies the "Frequently Questions" section
    And The user views the "Subscription" section
    And The user selects the option "How do I subscribe?"
    Then The user view title "Cómo me suscribo"
    Then The user verifies if the information was useful