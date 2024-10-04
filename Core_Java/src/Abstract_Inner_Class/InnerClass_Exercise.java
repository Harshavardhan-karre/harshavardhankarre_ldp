package Abstract_Inner_Class;

class Outer {
    class Inner {
        public void show()
        {

            System.out.println("In a nested class method");
        }
    }
}

public class InnerClass_Exercise {

        public static void main(String[] args)
        {
            Outer.Inner in = new Outer().new Inner();
            in.show();
        }
}
