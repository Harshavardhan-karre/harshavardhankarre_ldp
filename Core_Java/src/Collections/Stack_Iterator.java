package Collections;

import java.util.Iterator;
import java.util.Stack;

public class Stack_Iterator {
    public static void main(String[] args) {
        Stack<String> stack = new Stack<String>();
        stack.push("1");
        stack.push("2");
        stack.push("3");
        stack.push("4");

        stack.pop();

        Iterator<String> itr = stack.iterator();

        while (itr.hasNext()) {
            System.out.print(itr.next() + " ");
        }
    }
}
