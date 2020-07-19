package common;

import java.util.ResourceBundle;

public class wrapper {

	public static String getPropValue(String key) {
		ResourceBundle rs = ResourceBundle.getBundle("locators");
	    String value = rs.getString(key);
	    return value;
	}
}
