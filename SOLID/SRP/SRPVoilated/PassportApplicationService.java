package SOLID.SRP.SRPVoilated;

public class PassportApplicationService {

    public void processApplication(PassportApplication application) {
        validateApplication(application);

        submitToDatabase(application);

        sendNotification("Application submitted");
    }

    private void validateApplication(PassportApplication application) {
        System.out.println("Application validated.");
    }

    private void submitToDatabase(PassportApplication application) {

        System.out.println("Application saved to database.");
    }

    private void sendNotification(String message) {
        System.out.println("Notification sent: " + message);
    }
}
