package Threads;

class StartThreads extends Thread{
    public void run() {
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
            try {
                Thread.sleep(200);
            } catch (InterruptedException e) {
                System.out.println("Thread was interrupted");
            }
        }
    }
}

class RunnableThread implements Runnable{
    public void run() {
        while(Thread.currentThread().isInterrupted()) {
            System.out.println("Thread was interrupted by user");
            break;
        }
        for (int i = 0; i < 5; i++) {
            System.out.println("Helloo");
        }
    }
}

public class Threads_Basics {
    public static void main(String[] args){
       StartThreads st1 = new StartThreads();
       StartThreads st2 = new StartThreads();
       st1.start();
       st2.start();

       try{
       st1.join();
       st2.join();
       }
       catch(Exception e){
           System.out.println("Thread interrupted");
       }
       Thread t1 = new Thread(new RunnableThread());
       Thread t2 = new Thread(new RunnableThread());
       t1.start();
       t2.start();

       t1.interrupt();

    }
}
