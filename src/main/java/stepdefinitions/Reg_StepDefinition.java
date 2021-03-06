package stepdefinitions;

import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import common.wrapper;

public class Reg_StepDefinition {
	static WebDriver driver;
	
	//Speicfy the path of the sheet
	static String path = "C:\\Selenium\\TestData\\testdata.xlsx";
	//Specify the sheet name - here it is Sheet1
	static String sheet = "Sheet1";
	
	public static String getDataFromExcel(int row, int col) throws IOException {
		FileInputStream fs = new FileInputStream(path);
			
			//workbook declaration
			@SuppressWarnings("resource")
			Workbook wb = new XSSFWorkbook(fs);
			
			//Sheet declaration
			Sheet sh = wb.getSheet(sheet);
			Row rows = sh.getRow(row);
			Cell cell = rows.getCell(col);
		//	String val = cell.getStringCellValue();
		//	System.out.println("Value is " + val);
			
			DataFormatter df = new DataFormatter();
		String formatValue =	df.formatCellValue(cell);
		System.out.println("Formated value " + formatValue);
		return formatValue;
		}
		
	
	@Given("^I want to launch the application \"([^\"]*)\"$")
	public void i_want_to_launch_the_application(String url) throws Throwable {
		System.setProperty("webdriver.chrome.driver", "driver//chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(url);
	}

	@Then("^I enter the username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void i_enter_the_username_and_password(String username, String password) throws Throwable {
		driver.findElement(By.xpath(wrapper.getPropValue("UserLink"))).clear();
	    driver.findElement(By.xpath(wrapper.getPropValue("UserLink"))).sendKeys(username);
	    driver.findElement(By.xpath(wrapper.getPropValue("PassLink"))).clear();
	    driver.findElement(By.xpath(wrapper.getPropValue("PassLink"))).sendKeys(password);
	}

	@Then("^I click the login button$")
	public void i_click_the_login_button() throws Throwable {
		driver.findElement(By.xpath(wrapper.getPropValue("LoginLink"))).click();
	    
	}

	@Then("^I click on Social Network tab$")
	public void i_click_on_Social_Network_tab() throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.xpath(wrapper.getPropValue("SocialLink"))).click();
	    
	}

	@Then("^I click on Social Groups$")
	public void i_click_on_Social_Groups() throws Throwable {
		driver.findElement(By.xpath(wrapper.getPropValue("SocGrpLink"))).click();
	    
	}

	@Then("^I click on Create a social group$")
	public void i_click_on_Create_a_social_group() throws Throwable {
		driver.findElement(By.xpath(wrapper.getPropValue("CreateGrpLink"))).click();
	   
	}
	
	@Then("^I enter the name \"([^\"]*)\" and click on Add$")
	public void i_enter_the_name_and_click_on_Add(String grpname) throws Throwable {
		driver.findElement(By.xpath(wrapper.getPropValue("GrpName"))).clear();
		   driver.findElement(By.xpath(wrapper.getPropValue("GrpName"))).sendKeys(grpname);
		   driver.findElement(By.id(wrapper.getPropValue("GrpSubmit"))).click();
	}

	
	//Adding test case ELSC018 as unable to proceed from step 7 in test case ELSC017
	
	@Then("^I click on Admin tab")
	public void i_click_on_admin_tab() {
		driver.findElement(By.xpath(wrapper.getPropValue("AdminLink"))).click();
		
	}
	
	@Then("^I click on User List$")
	public void i_click_on_user_list() {
		driver.findElement(By.partialLinkText(wrapper.getPropValue("UserListLink"))).click();
		//driver.findElement(By.xpath("//div[@class='panel panel-default block-admin-users']")).click();
		System.out.println("Clicked on user list");
	}
	
	@Then("^I enter the username \"([^\"]*)\" and click on Search button$")
	public void i_enter_the_username_and_click_on_Search_button(String user) throws Throwable {
		driver.findElement(By.id(wrapper.getPropValue("EditUserLink"))).clear();
		driver.findElement(By.id(wrapper.getPropValue("EditUserLink"))).sendKeys(user);
		driver.findElement(By.id(wrapper.getPropValue("SearchLink"))).click();
	}
	
	@Then("^I click on edit link$")
	public void i_click_on_edit_link() throws Throwable {
		driver.findElement(By.xpath(wrapper.getPropValue("EditLink"))).click();
	    
	}
	
	@Then("^I clear email text \"([^\"]*)\" and enter the new email address$")
	public void i_clear_email_text_and_enter_the_new_email_address(String email) throws Throwable {
		driver.findElement(By.id(wrapper.getPropValue("EmailLink"))).clear();
		driver.findElement(By.id(wrapper.getPropValue("EmailLink"))).sendKeys(email);
	}

	@Then("^I click on inactive radio button and save the changes$")
	public void i_click_on_inactive_radio_button_and_save_the_changes() throws Throwable {
		driver.findElement(By.xpath(wrapper.getPropValue("InactiveLink"))).click();
	    driver.findElement(By.xpath(wrapper.getPropValue("SaveLink"))).click();
	}
	
	@Then("^I close the session$")
	public void i_close_the_session() throws Throwable {
		driver.quit();
	
		
	}
	
	//Passing data through excel
	
	
	@Given("^I want to launch the application with excel data \"([^\"]*)\"$")
	public void i_want_to_launch_the_application_with_excel_data(String url) throws Throwable {
			System.setProperty("webdriver.chrome.driver", "driver//chromedriver.exe");
			driver = new ChromeDriver();
			driver.get(url);
	}

	@Then("^I enter the user \"([^\"]*)\" and passwd \"([^\"]*)\"$")
	public void i_enter_the_user_and_passwd(String user, String passwd) throws Throwable {
		driver.findElement(By.xpath(wrapper.getPropValue("UserLink"))).clear();
	    driver.findElement(By.xpath(wrapper.getPropValue("UserLink"))).sendKeys(user);
	    driver.findElement(By.xpath(wrapper.getPropValue("PassLink"))).clear();
	    driver.findElement(By.xpath(wrapper.getPropValue("PassLink"))).sendKeys(passwd);
	}

	@Then("^I click on the login button$")
	public void i_click_on_the_login_button() throws Throwable {
		driver.findElement(By.xpath(wrapper.getPropValue("LoginLink"))).click();
	   
	}

	@Then("^I click on the Social Network tab$")
	public void i_click_on_the_Social_Network_tab() throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.xpath(wrapper.getPropValue("SocialLink"))).click();
	}

	@Then("^I click on the Social Groups$")
	public void i_click_on_the_Social_Groups() throws Throwable {
		driver.findElement(By.xpath(wrapper.getPropValue("SocGrpLink"))).click();
	}

	@Then("^I click on the Create a social group$")
	public void i_click_on_the_Create_a_social_group() throws Throwable {
		driver.findElement(By.xpath(wrapper.getPropValue("CreateGrpLink"))).click();
	}

	@Then("^I enter the name and click on Add$")
	public void i_enter_the_name_and_click_on_Add() throws Throwable {
		driver.findElement(By.xpath(wrapper.getPropValue("GrpName"))).clear();
		driver.findElement(By.xpath(wrapper.getPropValue("GrpName"))).sendKeys(getDataFromExcel(1,0));
		driver.findElement(By.id(wrapper.getPropValue("GrpSubmit"))).click();
	}

	@Then("^I click on the Admin tab$")
	public void i_click_on_the_Admin_tab() throws Throwable {
		driver.findElement(By.xpath(wrapper.getPropValue("AdminLink"))).click();
	}

	@Then("^I click on the User List$")
	public void i_click_on_the_User_List() throws Throwable {
		driver.findElement(By.partialLinkText(wrapper.getPropValue("UserListLink"))).click();
	}

	@Then("^I enter the username and click on Search button$")
	public void i_enter_the_username_and_click_on_Search_button() throws Throwable {
		driver.findElement(By.id(wrapper.getPropValue("EditUserLink"))).clear();
		driver.findElement(By.id(wrapper.getPropValue("EditUserLink"))).sendKeys(getDataFromExcel(1,1));
		driver.findElement(By.id(wrapper.getPropValue("SearchLink"))).click();
	   
	}

	@Then("^I click on the edit link$")
	public void i_click_on_the_edit_link() throws Throwable {
		driver.findElement(By.xpath(wrapper.getPropValue("EditLink"))).click();
	}

	@Then("^I clear email text and enter the new email address$")
	public void i_clear_email_text_and_enter_the_new_email_address() throws Throwable {
		driver.findElement(By.id(wrapper.getPropValue("EmailLink"))).clear();
		driver.findElement(By.id(wrapper.getPropValue("EmailLink"))).sendKeys(getDataFromExcel(1,2));
	}

	@Then("^I click on the inactive radio button and save the changes$")
	public void i_click_on_the_inactive_radio_button_and_save_the_changes() throws Throwable {
		driver.findElement(By.xpath(wrapper.getPropValue("InactiveLink"))).click();
		driver.findElement(By.xpath(wrapper.getPropValue("SaveLink"))).click();
	}

	@Then("^I quit the session$")
	public void i_quit_the_session() throws Throwable {
	    driver.quit();
	}




}
