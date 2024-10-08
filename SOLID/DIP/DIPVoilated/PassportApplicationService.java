package SOLID.DIP.DIPVoilated;

public class PassportApplicationService {
    private EmailNotificationService notificationService = new EmailNotificationService();

    public void submitApplication(int idofApplication) {
        notificationService.sendNotification("Application submitted");
    }
}