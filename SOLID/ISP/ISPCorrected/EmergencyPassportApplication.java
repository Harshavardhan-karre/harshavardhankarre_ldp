package SOLID.ISP.ISPCorrected;

public class EmergencyPassportApplication implements Submitable {
    @Override
    public void submit() {
        System.out.println("Passport is Submitted successfully");
    }
}