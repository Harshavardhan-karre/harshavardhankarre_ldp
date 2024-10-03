package SOLID.DIP.DIPCorrected;

import SOLID.SRP.SRPCorrected.NotificationService;

public class EmailNotificationService implements NotificationService {
    @Override
    public void sendNotification(String message) {
        System.out.println("Email Notification is Sent as "+message);
    }
}