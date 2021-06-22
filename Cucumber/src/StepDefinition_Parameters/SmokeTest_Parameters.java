package StepDefinition_Parameters;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest_Parameters 
{
	WebDriver driver;
	@Given("^Open firefox and start application$")
	public void Open_firefox_and_start_application() throws Throwable 
	{
	    System.setProperty("webdriver.chrome.driver","C:\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.get("http://www.facebook.com");
	}

	@When("^I enter valid \"([^\"]*)\" and valid \"([^\"]*)\"$")
	public void I_enter_valid_username_and_valid_password(String userName, String password) throws Throwable 
	{
	    driver.findElement(By.id("email")).sendKeys(userName);
	    driver.findElement(By.id("pass")).sendKeys(password);
	}

	@Then("^User should be able to login successfully$")
	public void User_should_be_able_to_login_successfully() throws Throwable 
	{
	    driver.findElement(By.id("loginbutton")).click();
	    driver.quit();
	}
}
