package Collections;
import java.util.ArrayList;
import java.util.LinkedList;

public class ArrayList_LinkedList {
    public static void main(String[] args) {
        ArrayList<Integer> al = new ArrayList<Integer>();
        for (int i = 1; i <= 5; i++)
            al.add(i);
        System.out.println(al);


        LinkedList<Integer> l=new LinkedList<>();
        l.add(1);
        l.add(2);
        System.out.println(l);
        System.out.println(l.peek());
        System.out.println(l.peekFirst());
        System.out.println(l.peekLast());
    }
}
