package assignment_5;


/*
Create main class in package yourname.assignment.main, create object of first class and call both the methods
 to print the values. Create object of second class using static method and then call the other method
 to print the String.
 */
public class AssignmentPart3 {

    public static void main(String[] args) {

        Assignment_5 as5 = new Assignment_5();
        as5.printVariables();
        as5.secondMethod();
    }
    static void staticLocalMethod()
    {
        AssignmentPart2 as2 = new AssignmentPart2();
        as2.printText();
    }
}

/*
Time complexity:O(1)
Space complexity:O(1)
 */
