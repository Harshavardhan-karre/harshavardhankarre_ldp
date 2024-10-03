package SOLID.ISP.ISPVoilated;

public class EmergencyPassportApplication implements PassportApplication {
    @Override
    public void submit() {
        System.out.println("We just neeeded Submit logic");
    }

    @Override
    public void validate() {
        System.out.println("No validation for emergency applications");
    }

    @Override
    public void approve() {
        System.out.println("Emergency applications are automatically approved");
    }
}
