package SOLID.DIP.DIPVoilated;

public class PassportApplicationService {
    private EmailNotificationService notificationService = new EmailNotificationService();

    public void submitApplication(int idofApplication) {
        // Logic to submit passport application
        notificationService.sendNotification("Application submitted");
    }
}