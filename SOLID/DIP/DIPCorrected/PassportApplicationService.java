package SOLID.DIP.DIPCorrected;

import SOLID.ISP.ISPVoilated.PassportApplication;
import SOLID.SRP.SRPCorrected.NotificationService;

public class PassportApplicationService {
    private SOLID.SRP.SRPCorrected.NotificationService notificationService;

    public PassportApplicationService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    public void submitApplication(PassportApplication application) {
        // Logic to submit passport application
        notificationService.sendNotification("Application submitted");
    }
}