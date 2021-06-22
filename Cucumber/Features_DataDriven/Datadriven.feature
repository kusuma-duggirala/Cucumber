Feature: Test Facebook smoke scenario
	Scenario Outline: Test Login with valid credentials
	Given Open firefox and start application
	When I enter valid "<username>" and valid "<password>"
	Then User should be able to login successfully
	
	Examples:
	|username             |password|
	|chocoram789@gmail.com|kusuma12|
	|chocoram789@gmail.com|kusuma23|
	|chocoram789@gmail.com|kusuma31|