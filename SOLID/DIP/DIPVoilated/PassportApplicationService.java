package SOLID.DIP.DIPVoilated;

import SOLID.DIP.DIPCorrected.EmailNotificationService;
import SOLID.ISP.ISPVoilated.PassportApplication;
import SOLID.SRP.SRPCorrected.NotificationService;

public class PassportApplicationService {
    private NotificationService notificationService = new EmailNotificationService();

    public void submitApplication(PassportApplication application) {
        // Logic to submit passport application
        notificationService.sendNotification("Application submitted");
    }
}