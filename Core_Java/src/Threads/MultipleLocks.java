package Threads;

public class MultipleLocks {
    private final Object lock1 = new Object();
    private final Object lock2 = new Object();

    private int resourceA = 0;
    private int resourceB = 0;

    // Method to safely increment resourceA
    public void incrementResourceA() {
        synchronized (lock1) {
            resourceA++;
            System.out.println(Thread.currentThread().getName() + " incremented Resource A to " + resourceA);
        }
    }

    // Method to safely increment resourceB
    public void incrementResourceB() {
        synchronized (lock2) {
            resourceB++;
            System.out.println(Thread.currentThread().getName() + " incremented Resource B to " + resourceB);
        }
    }

    public void incrementBothResources() {

        synchronized (lock1) {
            synchronized (lock2) {
                resourceA++;
                resourceB++;
                System.out.println(Thread.currentThread().getName() + " incremented both resources to " + resourceA + " and " + resourceB);
            }
        }
    }

    public static void main(String[] args) {
        MultipleLocks example = new MultipleLocks();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                example.incrementResourceA();
                try {
                    Thread.sleep(50);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
        }, "Thread-A");

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                example.incrementResourceB();
                try {
                    Thread.sleep(50);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
        }, "Thread-B");

        Thread t3 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                example.incrementBothResources();
                try {
                    Thread.sleep(50);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
        }, "Thread-C");

        t1.start();
        t2.start();
        t3.start();
    }
}
