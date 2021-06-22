$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Test Facebook smoke scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid username and valid password",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.Open_firefox_and_start_application()"
});
formatter.result({
  "duration": 13803671900,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.I_enter_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 1160962200,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.User_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 4279899800,
  "status": "passed"
});
});