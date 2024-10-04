package Java_Basics;
import java.util.*;
public class Basics {

    public  int add(int a, int b) {
        return a + b;
    }
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        String str="Helloworldstring";
        System.out.println(str.length());
        System.out.println(str.toUpperCase());
        System.out.println(str.toLowerCase());

        int k=0;

        while(k<str.length()){
            System.out.println(str.charAt(k));
            k++;
        }
        System.out.println("Enter numbers as word strings");
        String str2=s.next();
        switch(str2){
            case "one":
                System.out.println("Entered 1");
                break;
            case "two":
                System.out.println("Entered 2");
                break;
            case "three":
                System.out.println("Entered 3");
                break;
            default:
                System.out.println("Entered input is greater than 3");
        }

        int ar[]={1,2,3,4,5};
        for (int i:ar)
        {
            System.out.println(i);
        }

        int mutiarray[][]={{2,4,6,8},{1,3,5,7},ar};
        for(int i=0;i<mutiarray.length;i++){
            for(int j=0;j<mutiarray[i].length;j++)
            {
                System.out.print(mutiarray[i][j]+" ");
            }
        }
        Extraclass ec=new Extraclass();

        System.out.println(ec.example1);
        ec.invoker();
        Basics b=new Basics();
        System.out.println(b.add(10,12));
        System.out.println(b.add(10,12,14));

    }
}

class Extraclass{
    protected int example1=16;
    Extraclass()
    {
        this.example1=23;
    }
    void invoker()
    {
        System.out.println(example1);
    }
}

class Extraclass1 extends Extraclass{
    Extraclass1()
    {
        System.out.println("this is from extraclass1 class"+example1);
    }

}