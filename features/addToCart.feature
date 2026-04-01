Feature: Add item to cart

Scenario Outline: User adds product with different users
  Given I create a user via API
  And I login with "<username>" and "<password>"
  When I add a backpack to the cart
  Then the cart should contain the item

Examples:
  | username        | password       |
  | standard_user   | secret_sauce   |
  | problem_user    | secret_sauce   |