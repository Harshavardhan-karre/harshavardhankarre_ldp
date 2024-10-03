package SOLID.DIP.DIPCorrected;


public class SMSNotificationService implements NotificationService {
    @Override
    public void sendNotification(String message) {
        System.out.println("SMS Notification is Sent as "+message);
    }
}