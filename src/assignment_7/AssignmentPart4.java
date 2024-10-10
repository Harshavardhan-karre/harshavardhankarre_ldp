package assignment_7;

/*
Create a CycleInterface interface, with implementations Unicycle, Bicycle and Tricycle.
 Create factories for each type of CycleInterface, and code that uses these factories.
 */

public class AssignmentPart4 {
    public static void main(String[] args) {
        // Create factories
        UnicycleFactory unicycleFactory = new UnicycleFactory();
        BicycleFactory bicycleFactory = new BicycleFactory();
        TricycleFactory tricycleFactory = new TricycleFactory();

        // Create cycles using factories
        CycleInterface unicycle = unicycleFactory.createCycle();
        CycleInterface bicycle = bicycleFactory.createCycle();
        CycleInterface tricycle = tricycleFactory.createCycle();

        // Ride the cycles
        unicycle.ride();
        bicycle.ride();
        tricycle.ride();
    }
}

interface CycleInterface
{
    void ride();
}

 class Unicycle implements CycleInterface{
   public void ride()
    {
        System.out.println("Unicycle method");
    }
}

 class Bicycle implements CycleInterface {
    @Override
    public void ride() {
        System.out.println("Riding a bicycle!");
    }
}

 class Tricycle implements CycleInterface {
    @Override
    public void ride() {
        System.out.println("Riding a tricycle!");
    }
}

//creating factory class


 class UnicycleFactory {
    public Unicycle createCycle() {
        return new Unicycle();
    }
}

 class BicycleFactory {
    public Bicycle createCycle() {
        return new Bicycle();
    }
}
 
class TricycleFactory {
    public Tricycle createCycle() {
        return new Tricycle();
    }
}

/*
Time complexity:O(1)
Space complexity:O(1)
 */
