package assignment_8;

/*
Error Handling

Create three new types of exceptions. Write a class with a method that throws all three.
In main( ), call the method but only use a single catch clause that will catch all
three types of exceptions. Add a finally clause and verify that your finally clause is executed,
even if a NullPointerException is thrown.
 */

class MyArithmeticException extends Exception {
    public MyArithmeticException(String message) {
        super(message);
    }
}

class MyIndexOutOfBoundsException extends Exception {
    public MyIndexOutOfBoundsException(String message) {
        super(message);
    }
}

class MyNullPointerException extends Exception {
    public MyNullPointerException(String message) {
        super(message);
    }
}

public class Assignment_8 {

    public static void exceptionThorwer(int num) throws MyArithmeticException, MyIndexOutOfBoundsException, MyNullPointerException {
        if (num == 1) {
            ArithmeticExceptionThrower();
        } else if (num == 2) {
            IndexThrower();
        } else {
            NullThrower();
        }
    }

    static void ArithmeticExceptionThrower() throws MyArithmeticException {
        throw new MyArithmeticException("Custom Arithmetic Exception: Division by zero is not allowed.");
    }
    static void IndexThrower() throws MyIndexOutOfBoundsException {
        throw new MyIndexOutOfBoundsException("Custom Index Out of Bounds Exception: Invalid array index.");
    }

    static void NullThrower() throws MyNullPointerException {
        throw new MyNullPointerException("Custom Null Pointer Exception: Null reference accessed.");
    }

    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            try {
                exceptionThorwer(i);
            } catch (MyArithmeticException | MyIndexOutOfBoundsException | MyNullPointerException e) {
                System.out.println("Exception caught: " + e.getMessage());
            } finally {
                System.out.println("Finally block is executed");
            }
        }
    }
}

/*
Time complexity:O(1)
Space complexity:O(1)
 */