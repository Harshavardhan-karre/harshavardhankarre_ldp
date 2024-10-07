package Threads;

import java.util.concurrent.CountDownLatch;

public class CountDownLatchExercise {
    public static void main(String[] args) {

        CountDownLatch latch = new CountDownLatch(3);

        for (int i = 1; i <= 3; i++) {
            new Thread(new Worker(latch, "Worker-" + i)).start();
        }

        System.out.println("Main thread is waiting for workers to finish...");

        try {
            latch.await();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            System.out.println("Main thread was interrupted.");
        }

        System.out.println("All workers have finished. Main thread proceeding.");
    }
}

class Worker implements Runnable {
    private final CountDownLatch latch;
    private final String name;

    public Worker(CountDownLatch latch, String name) {
        this.latch = latch;
        this.name = name;
    }

    @Override
    public void run() {
        System.out.println(name + " is starting work.");
        try {
            Thread.sleep((long) (Math.random() * 2000));
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            System.out.println(name + " was interrupted.");
        }
        System.out.println(name + " has finished work.");

        latch.countDown();
    }
}
