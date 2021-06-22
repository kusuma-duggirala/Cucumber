package Runner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(features= {"Features_Parameters"},glue= {"StepDefinition_Parameters"},format= {"pretty","html:Reports/report2.html"})
public class TestRunner_Parameters 
{

}
