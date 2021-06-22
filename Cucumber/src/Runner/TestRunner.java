package Runner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(features= {"Features"},glue= {"StepDefinition"},format= {"pretty","html:Reports/report1.html"})
//plugin= {"html:target/report1.html"})
public class TestRunner {

}
