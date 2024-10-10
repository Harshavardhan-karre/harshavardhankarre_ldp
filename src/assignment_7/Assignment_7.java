package assignment_7;

/*
Access Control and More

1. Create an inheritance hierarchy of Rodent: Mouse, Gerbil, Hamster,etc.
 In the base class, provide methods that are common to all Rodents, and override these in the
 derived classes to perform different behaviors depending on the specific type of Rodent.
  Create an array of Rodent, fill it with different specific types of Rodents, and call your
   base-class methods to see what happens. Make the methods of Rodent abstract whenever possible
    and all classes should have default constructors that print a message about that class.

2. Create a Cycle class, with subclasses Unicycle, Bicycle and Tricycle.
Add a balance( ) method to Unicycle and Bicycle, but not to Tricycle.
 Create instances of all three types and upcast them to an array of Cycle.
  Try to call balance( ) on each element of the array and observe the results.
   Downcast and call balance( ) and observe what happens.

3. Create three interfaces, each with two methods. Inherit a new interface that combines
the three, adding a new method. Create a class by implementing the new interface
 and also inheriting from a concrete class. Now write four methods,
 each of which takes one of the four interfaces as an argument. In main( ),
  create an object of your class and pass it to each of the methods.

4. Create a Cycle interface, with implementations Unicycle, Bicycle and Tricycle. Create factories for each type of Cycle, and code that uses these factories.

5. Create a class with an inner class that has a non-default constructor (one that takes arguments). Create a second class with an inner class that inherits from the first inner class.
 */

abstract class Rodent{
    public Rodent()
    {
        System.out.println("Rodent initializd");
    }

    public abstract void eat();
}
class Mouse extends Rodent{

    public Mouse()
    {
        System.out.println("Mouse initializd");
    }

    public void eat()
    {
        System.out.println("Mouse eating cheese");
    }
}

class Gerbil extends Rodent{

    public Gerbil()
    {
        System.out.println("Gerbil initializd");
    }

    public void eat()
    {
        System.out.println("Gerbil eating small seeds");
    }
}

class Hamster extends Rodent {
    public Hamster() {
        System.out.println("Hamster initializd");
    }

    @Override
    public void eat() {
        System.out.println("Hamster is eating roots");
    }
}


public class Assignment_7 {
    public static void main(String[] args) {
        Rodent[] rodents = new Rodent[3];
        rodents[0] = new Mouse();
        rodents[1] = new Gerbil();
        rodents[2] = new Hamster();

        for (Rodent rodent : rodents) {
            rodent.eat();
            System.out.println();
        }
    }
}

/*
Time complexity:O(1)
Space complexity:O(1)
 */
