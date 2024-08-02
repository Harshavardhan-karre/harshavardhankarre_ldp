import java.util.*;

/**
 * Assignment
 */
public class Assignment {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        int odct = 0, evct = 0, n = s.nextInt();
        for (int i = 1; i <= n; i++) {
            int x = s.nextInt();
            if ((x % 2) == 1) {
                odct++;
            } else {
                evct++;
            }
        }
        if ((odct % 2 != 0 && evct % 2 != 0) || ((odct + 1) / 2) % 2 == 0) {
            System.out.println("Alice wins");
        } else {
            System.out.println("Bob wins");
        }
        s.close();
    }

}/*This is final code file*/
//This is a java file
/*The Time complexity is O(N) and space complexity is O(1);; and this is pushed from bash*/
