package assignment_5;

/*
DefaultInitializationAssignment:

Create a class in a package yourname.assignment.data containing an int and a char member
 variables that are not initialized,
 add a method to print these variables. Add another method in the same class with two local variables
 and print their values without initializing them.

Create another class in package yourname.assignment.singleton containing a non static String member variable.
 Add a static method that takes String as parameter and initialize the member variable and
 then return object of that class. Add a non static method to print the String.

Create main class in package yourname.assignment.main, create object of first class and call both the methods
 to print the values. Create object of second class using static method and then call the other method
 to print the String.

One or more tasks mentioned above are not possible in JAVA, comment that part of the code with block comments and
add the explanation for the same.
*/
public class Assignment_5 {
   int firstVariable;
   char secondVariable;

   public void printVariables() {
       System.out.println(firstVariable+" "+secondVariable);
   }
  public void secondMethod() {
       int localFirstVariable;
       int localSecondVariable;

       // Local variables in Java must be initialized before use, so we cannot print them directly.
       // These below lines cause a compile-time error. if uncommented

//       System.out.println(localFirstVariable+" "+localSecondVariable);
   }

    public static void main(String[] args) {
       Assignment_5 a = new Assignment_5();
        a.printVariables();
        a.secondMethod();
    }
}

/*
Time complexity:O(1)
Space complexity:O(1)
 */

