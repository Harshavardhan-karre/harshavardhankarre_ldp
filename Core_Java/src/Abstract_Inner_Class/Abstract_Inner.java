package Abstract_Inner_Class;

abstract class AbstractExample{
    int age=20;
    abstract void display();

}


class Invoker extends AbstractExample{
    void display(){
        System.out.println(age);
    }
}

public class Abstract_Inner{
    public static void main(String[] args) {
        Invoker in=new Invoker();
        in.display();
    }
}


