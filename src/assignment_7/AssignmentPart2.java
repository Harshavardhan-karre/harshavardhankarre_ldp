package assignment_7;

/*
2. Create a Cycle class, with subclasses Unicycle, Bicycle and Tricycle.
Add a balance( ) method to Unicycle and Bicycle, but not to Tricycle.
 Create instances of all three types and upcast them to an array of Cycle.
  Try to call balance( ) on each element of the array and observe the results.
   Downcast and call balance( ) and observe what happens.
 */

public class AssignmentPart2 {
    public static void main(String[] args) {
        Unicycle1 uc = new Unicycle1();
        Bicycle1 bc = new Bicycle1();
        Tricycle1 tc = new Tricycle1();

        System.out.println("Trying to upcast to cycle array");
        Cycle[] cycles = { uc, bc, tc };

        // If i uncomment this they will give error as they can't get access to balance method from cycle

//        cycles[0].balance();
//        cycles[1].balance();
//        cycles[2].balance();



        System.out.println("Trying to downcast");

        if(cycles[0] instanceof Unicycle1) {
            Unicycle1 udc=(Unicycle1)cycles[0];
           udc.balance();
        }
        if(cycles[1] instanceof Bicycle1) {
            Bicycle1 bdc=(Bicycle1)cycles[1];
            bdc.balance();
        }
        if(cycles[2] instanceof Tricycle1) {
            Tricycle1 tdc=(Tricycle1)cycles[2];
            System.out.println("Tricycle has no balance() method.");
        }
    }
}

 class Cycle
{
    void ride()
    {
        System.out.println("This is parent class");
    }
}

class Unicycle1 extends Cycle
{
    void balance()
    {
        System.out.println("This is balance from Unicycle");
    }
}

class Bicycle1 extends Cycle
{
    void balance()
    {
        System.out.println("This is balance from Bicycle");
    }
}

class Tricycle1 extends Cycle
{
    //Empty
}

/*
Time complexity:O(1)
Space complexity:O(1)
 */