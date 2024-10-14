package assignment_6;


    class ConstructorClass {
        // Constructor that takes a String argument
        public ConstructorClass(String message) {
            System.out.println("Constructor called with message: " + message);
        }
    }

    public class AssignmentPart3 {
        public static void main(String[] args) {
            int n=5;
            ConstructorClass[] array = new ConstructorClass[n];

            // No objects are created here, just an array of null references

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

