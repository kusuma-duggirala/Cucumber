$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Datadriven.feature");
formatter.feature({
  "line": 1,
  "name": "Test Facebook smoke scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"chocoram789@gmail.com\" and valid \"kusuma12\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest_DataDriven.Open_firefox_and_start_application()"
});
formatter.result({
  "duration": 10556244700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chocoram789@gmail.com",
      "offset": 15
    },
    {
      "val": "kusuma12",
      "offset": 49
    }
  ],
  "location": "SmokeTest_DataDriven.I_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 737670900,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest_DataDriven.User_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 3691672500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"chocoram789@gmail.com\" and valid \"kusuma23\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest_DataDriven.Open_firefox_and_start_application()"
});
formatter.result({
  "duration": 8942950200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chocoram789@gmail.com",
      "offset": 15
    },
    {
      "val": "kusuma23",
      "offset": 49
    }
  ],
  "location": "SmokeTest_DataDriven.I_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 501179700,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest_DataDriven.User_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1682001700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"chocoram789@gmail.com\" and valid \"kusuma31\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest_DataDriven.Open_firefox_and_start_application()"
});
formatter.result({
  "duration": 10692263200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chocoram789@gmail.com",
      "offset": 15
    },
    {
      "val": "kusuma31",
      "offset": 49
    }
  ],
  "location": "SmokeTest_DataDriven.I_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 527807900,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest_DataDriven.User_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 3338633000,
  "status": "passed"
});
});