package assignment_6;

class ConstructorClassy {
    // Constructor that takes a String argument
    public ConstructorClassy(String message) {
        System.out.println("Constructor called with message: " + message);
    }
}

public class AssignmentPart4 {
    public static void main(String[] args) {
         int n=5;
        ConstructorClassy[] array = new ConstructorClassy[n];

        array[0] = new ConstructorClassy("Hello");
        array[1] = new ConstructorClassy("World");
        array[2] = new ConstructorClassy("once");
        array[3] = new ConstructorClassy("twice");
        array[4] = new ConstructorClassy("thrice");

        for (int i = 0; i < n; i++) {
            System.out.println("Array element " + i + ": " + array[i]);
        }
    }
}

/*
Time complexity: O(N)
Space complexity: O(N)

where N is length of array
*/