package Runner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(features= {"Features_DataDriven"},glue= {"StepDefinition_DataDriven"},format= {"pretty","html:Reports/report3.html"})
public class TestRunner_DataDriven 
{

}
