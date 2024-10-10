package assignment_8;

/*
Error Handling

Create three new types of exceptions. Write a class with a method that throws all three.
In main( ), call the method but only use a single catch clause that will catch all
three types of exceptions. Add a finally clause and verify that your finally clause is executed,
even if a NullPointerException is thrown.
 */

public class Assignment_8 {
    public static void exceptionThorwer(int num) throws Exception
    {
        if(num==1) {
            ArithmeticExceptionThrower();
        }
       else if(num==2)
        {
            IndexThrower();
        }
       else {
            NullThrower();
        }
    }

    static void ArithmeticExceptionThrower() throws Exception
    {
        int a=10/0;
    }

    static void IndexThrower() throws Exception
    {
        int array[]=new int[2];
        array[0]=1;
        array[1]=2;
        array[2]=3;
    }

    static void NullThrower() throws Exception
    {
        int array2[]=null;
        int n=array2.length;
    }

    public static void main(String k[])
    {

        for(int i=1;i<=3;i++) {
            try {
                exceptionThorwer(i);
            } catch (Exception e) {
                System.out.println("Exception got caught:    " + e.getMessage());
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