Feature: newtours validation

Background:
    Given open newtours application


Scenario: Home Page
    When I log in as Following
        |userName| password |
        |mercury | mercury  |
    Then click on submit button
    And verfiy title should be 'Login: Mercury Tours'


Scenario: Verifying my Title
    When I log in as Following
        |userName| password |
        |mercury | mercury  |
    Then click on submit button
    And verfiy title should be 'Login: Mercury Tours'
