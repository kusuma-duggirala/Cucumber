Feature: Test Facebook smoke scenario
	Scenario: Test Login with valid credentials
	Given Open firefox and start application
	When I enter valid "chocoram789@gmail.com" and valid "kusuma"
	Then User should be able to login successfully