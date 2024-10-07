package Exceptions;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ExceptionsExercise {

    public  static void caller() throws FileNotFoundException
    {
        File f=new File("example.txt");
        Scanner rf=new Scanner(f);
    }

    public static void main(String[] args) {
        try
        {
             int a=10/0;
        }
        catch (ArithmeticException e)
        {
            System.out.println(e);
        }
        finally {
            System.out.println("finally block");
        }

        try{
             caller();
        }
        catch(Exception e)
        {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
    }
}
