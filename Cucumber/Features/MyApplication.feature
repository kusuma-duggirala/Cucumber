Feature: Test Facebook smoke scenario
	Scenario: Test Login with valid credentials
	Given Open firefox and start application
	When I enter valid username and valid password
	Then User should be able to login successfully