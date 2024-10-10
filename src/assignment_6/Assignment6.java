package assignment_6;


/*
Operators and More:

1. A vampire number v is a number with an even number of digits n, that can be factored into two numbers x and y
each with n/2 digits and not both with trailing zeroes, where v contains precisely all the digits from x and from y,
in any order. Write a java program to print first 100 vampire numbers.

2. Create a class with two (overloaded) constructors. Using this, call the second constructor inside the first one.

3. Create a class with a constructor that takes a String argument. During construction, print the argument.
Create an array of object references to this class, but don’t actually create objects to assign into the array.
 When you run the program, notice whether the initialization messages from the constructor calls are printed.

4. Complete the previous exercise by creating objects to attach to the array of references.

 */

import java.util.ArrayList;
import java.util.List;

public class Assignment_6 {
    public static void main(String[] args) {
        List<Integer> vampireNumbers = new ArrayList<>();
        int count = 0;
        int number = 1000; // Vampire numbers have at least 4 digits.

        while (count < 100) {
            if (isVampireNumber(number)) {
                vampireNumbers.add(number);
                count++;
            }
            number++;
        }

        System.out.println("First 100 Vampire Numbers:");
        for (int vampire : vampireNumbers) {
            System.out.println(vampire);
        }
    }

    public static boolean isVampireNumber(int number) {
        String strNum = Integer.toString(number);
        int len = strNum.length();

        // Only consider numbers with an even number of digits
        if (len % 2 != 0) {
            return false;
        }

        int halfLen = len / 2;
        for (int i = (int) Math.pow(10, halfLen - 1); i < Math.pow(10, halfLen); i++) {
            if (number % i == 0) {
                int j = number / i;
                if (i > j) {
                    break; // To avoid duplicate checking
                }
                if (!String.valueOf(i).endsWith("0") || !String.valueOf(j).endsWith("0")) {
                    String combinedFangs = String.valueOf(i) + String.valueOf(j);
                    char[] numChars = strNum.toCharArray();
                    char[] fangChars = combinedFangs.toCharArray();
                    java.util.Arrays.sort(numChars);
                    java.util.Arrays.sort(fangChars);
                    if (java.util.Arrays.equals(numChars, fangChars)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
/*
Time complexity: O(N x 10^2 x 4log4)
Space complexity: O(100+d)  where d is no. of digits

where N is the number of numbers checked.
 */

