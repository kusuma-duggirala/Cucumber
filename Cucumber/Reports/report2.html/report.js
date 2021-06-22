$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Parameters.feature");
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
  "name": "I enter valid \"chocoram789@gmail.com\" and valid \"kusuma\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest_Parameters.Open_firefox_and_start_application()"
});
formatter.result({
  "duration": 14940672600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chocoram789@gmail.com",
      "offset": 15
    },
    {
      "val": "kusuma",
      "offset": 49
    }
  ],
  "location": "SmokeTest_Parameters.I_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 705384900,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest_Parameters.User_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 2115591900,
  "status": "passed"
});
});