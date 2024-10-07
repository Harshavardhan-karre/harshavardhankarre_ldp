package Threads;

import java.util.concurrent.Semaphore;

class Resource {
    public void use() {
        System.out.println(Thread.currentThread().getName() + " is using the resource.");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        System.out.println(Thread.currentThread().getName() + " has finished using the resource.");
    }
}
public class SemaphoresExcercise {
    public static void main(String[] args) {
        final int MAX_PERMITS = 3;
        Semaphore semaphore = new Semaphore(MAX_PERMITS);
        Resource resource = new Resource();

        for (int i = 1; i <= 10; i++) {
            Thread t = new Thread(() -> {
                try {
                    System.out.println(Thread.currentThread().getName() + " is attempting to acquire a permit.");
                    semaphore.acquire();
                    System.out.println(Thread.currentThread().getName() + " acquired a permit.");
                    resource.use();
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                } finally {
                    semaphore.release();
                    System.out.println(Thread.currentThread().getName() + " released a permit.");
                }
            }, "Thread-" + i);
            t.start();
        }
    }
}
