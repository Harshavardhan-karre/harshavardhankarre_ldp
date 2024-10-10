package assignment_6;

public class AssignmentPart2 {

    AssignmentPart2(int firstVariable) {
        this(firstVariable, 16);
        System.out.println(firstVariable);
    }

    // Second constructor overloaded
    AssignmentPart2(int firstVariable, int secondVariable) {
        System.out.println(firstVariable + " " + secondVariable);
    }

    public static void main(String[] args) {
        // Testing the constructors with main methid
        AssignmentPart2 obj = new AssignmentPart2(12);
    }
}

/*
Time complexity: O(1)
Space complexity: O(1)

*/