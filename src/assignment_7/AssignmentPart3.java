package assignment_7;

/*
Create three interfaces, each with two methods. Inherit a new interface that combines
the three, adding a new method. Create a class by implementing the new interface
 and also inheriting from a concrete class. Now write four methods,
 each of which takes one of the four interfaces as an argument. In main( ),
  create an object of your class and pass it to each of the methods.

 */



interface FirstInterface{
    void method1Interface1();
    void method2Interface1();
}
interface SecondInterface{
    void method1Interface2();
    void method2Interface2();
}
interface ThirdInterface{
    void method1Interface3();
    void method2Interface3();
}

interface FourthInterface extends FirstInterface,SecondInterface,ThirdInterface{
    void method1Interface4();
}


class ConcreteClass {
    public void concreteMethod() {
        System.out.println("This is from concreteMethod");
    }
}

class ReqClass extends ConcreteClass implements FourthInterface {
    public void method1Interface1(){
        System.out.println("This is from Interface1 method1");
    }
    public void method2Interface1(){
        System.out.println("This is from Interface1 method2");
    }
    public void method1Interface2(){
        System.out.println("This is from Interface2 method1");
    }
    public void method2Interface2(){
        System.out.println("This is from Interface2 method2");
    }
    public void method1Interface3(){
        System.out.println("This is from Interface3 method1");
    }
    public void method2Interface3(){
        System.out.println("This is from Interface3 method2");
    }
    public void method1Interface4(){
        System.out.println("This is from Interface4 method1");
    }
}

public class AssignmentPart3 {

        public static void takesInterface1(FirstInterface a) {
            a.method1Interface1();
            a.method2Interface1();
        }

        public static void takesInterface2(SecondInterface b) {
            b.method1Interface2();
            b.method2Interface2();
        }


        public static void takesInterface3(ThirdInterface c) {
            c.method1Interface3();
            c.method2Interface3();
        }


        public static void takesInterface4(FourthInterface ci) {
            ci.method1Interface1();
            ci.method1Interface2();
            ci.method1Interface3();
            ci.method1Interface4();
        }
    public static void main(String[] args) {
         ReqClass req = new ReqClass();
         takesInterface1(req);
         takesInterface2(req);
         takesInterface3(req);
         takesInterface4(req);

         req.concreteMethod();
    }
}

/*
Time complexity:O(1)
Space complexity:O(1)
 */
