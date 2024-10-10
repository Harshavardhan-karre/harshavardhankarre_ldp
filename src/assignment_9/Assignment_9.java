package assignment_9;

/*
String and Type Information

Using the documentation for java.util.regex.Pattern as a resource,
write and test a regular expression that checks a sentence to see
that it begins with a capital letter and ends with a period.
 */


import java.util.regex.*;

public class Assignment_9 {
    public static void main(String[] args) {

        Pattern p = Pattern.compile("^[A-Z].*\\.$");
        Matcher m = p.matcher("Hello.");
        if(m.find()==true) {
            System.out.println("This is valid sentence matching pattern");
        }
        else
        {
            System.out.println("This is not valid sentence that is matching pattern");
        }
    }
}

/*
Time complexity: O(1)
Space complexity: O(1)
 */