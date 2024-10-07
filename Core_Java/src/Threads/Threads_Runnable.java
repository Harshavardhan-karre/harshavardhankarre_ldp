package Threads;

class StartThread implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 10; i++)
        {
            System.out.println(i);
            try {
                Thread.sleep(200);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }

    }
}

public class Threads_Runnable {
    public static void main(String[] args) {
        Thread thread = new Thread(new StartThread());
        Thread thread1 = new Thread(new StartThread());
        thread.start();
        thread1.start();
    }
}
