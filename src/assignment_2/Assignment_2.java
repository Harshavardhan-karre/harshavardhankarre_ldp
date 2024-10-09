package assignment_2;

/* Problem Statement
Write a java function that checks if the input string contains all the letters of the alphabet a-z (case-insensitive).
 Write time and space complexity of your solution as comments in the source file.
*/

import java.util.*;
public class Assignment_2 {
    public static void main(String[] args) {
         Scanner scan = new Scanner(System.in);
        System.out.println("Enter a string: ");
        String userString = scan.nextLine();
        userString = userString.toLowerCase();
        if(userString.length()<26)
        {
            System.out.println("Given string doesn't have all letters of alphabet a-z");
            return;
        }
        boolean charArray[]=new boolean[26];
        int stringLength=userString.length();
        for (int i = 0; i < stringLength; i++) {
            if(userString.charAt(i)>='a' && userString.charAt(i)<='z') {
                charArray[userString.charAt(i)-'a']=true;
            }
        }
        boolean hasAll=true;
        for (int i = 0; i < 26; i++) {
            if(charArray[i]==false)
            {
                hasAll=false;
                break;
            }
        }
        if(hasAll)
        {
            System.out.println("Given string has all letters of alphabet a-z");
        }
        else {
            System.out.println("Given string doesn't have all letters of alphabet a-z");
        }
    }
}

/*Time Complexity: O(stringLength)
  Space Complexity: O(stringLength)
 */