import java.util.*;
class Approach2 {
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
        HashSet<Character> h=new HashSet<>();
        int n=userString.length();
        for(int i =0;i<n;i++)
        {
            char ch=userString.charAt(i);
            if(ch>='a' && ch<='z')
            {
                h.add(ch);
            }
        }
        if(h.size()==26)
        {
            System.out.println("It has all alphabets");
        }
        else
        {
            System.out.println("It doesn't had all alphabets");
        }
    }
}

/*
Time complexity:O(stringlength)
Space complexity:O(stringlength)
 */