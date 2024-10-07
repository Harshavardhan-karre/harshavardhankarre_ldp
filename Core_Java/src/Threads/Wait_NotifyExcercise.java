package Threads;
import java.util.Scanner;

 class Engine {

    public void releaseEnergy() throws InterruptedException {

        synchronized (this) {
            System.out.println("Turn on engine and start releasing energy...");
            wait();
            System.out.println("Resumed.");
        }
    }

    public void consumeFuel() throws InterruptedException {

        Scanner scanner = new Scanner(System.in);
        Thread.sleep(2000);

        synchronized (this) {
            System.out.println("Waiting for enter key to resume.");
            scanner.nextLine();
            System.out.println("Enter key pressed.");
            notify();
        }
    }
}

public class Wait_NotifyExcercise {
    public static void main(String[] args) throws InterruptedException {

        final Engine engine = new Engine();

        Thread thread1 = new Thread(new Runnable() {
            public void run() {
                try {
                    engine.releaseEnergy();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        Thread thread2 = new Thread(new Runnable() {
            public void run() {
                try {
                    engine.consumeFuel();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        thread1.start();
        thread2.start();

        thread1.join();
        thread2.join();
    }

}



