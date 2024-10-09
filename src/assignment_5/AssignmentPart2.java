package assignment_5;

/*
Create another class in package yourname.assignment.singleton containing a non static String member variable.
 Add a static method that takes String as parameter and initialize the member variable and
 then return object of that class. Add a non static method to print the String.
 */

public class AssignmentPart2 {
    private String text;

    // Static method to initialize String and return an instance
    public static AssignmentPart2 initialize(String text) {
        AssignmentPart2 ap2 = new AssignmentPart2();
        ap2.text = text;
        return ap2;
    }

    // Non-static method to print the String value
    public void printText() {
        System.out.println("String value: " + text);
    }

    public static void main(String[] args) {
        AssignmentPart2 ap2 = AssignmentPart2.initialize("hello");
        ap2.printText();
    }
}
/*
Time complexity:O(1)
Space complexity:O(1)
 */
