package SOLID.DIP.DIPCorrected;


public class PassportApplicationService {
    private NotificationService notificationService;

    public PassportApplicationService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    public void submitApplication(int idofApplication) {
        notificationService.sendNotification("Application submitted");
    }
}