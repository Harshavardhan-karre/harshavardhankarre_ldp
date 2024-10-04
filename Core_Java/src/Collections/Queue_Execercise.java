package Collections;

import java.util.PriorityQueue;

public class Queue_Execercise {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq
                = new PriorityQueue<Integer>();
        pq.add(10);
        pq.add(20);
        pq.add(15);

        System.out.println(pq);
       System.out.println(pq.peek());
       System.out.println(pq.poll());
    }
}
