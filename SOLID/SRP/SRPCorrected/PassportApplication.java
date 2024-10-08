package SOLID.SRP.SRPCorrected;

public class PassportApplication {
    private String applicantName;
    private String passportType;

    public PassportApplication(String applicantName, String passportType) {
        this.applicantName = applicantName;
        this.passportType = passportType;
    }

    public String getApplicantName() {
        return applicantName;
    }

    public String getPassportType() {
        return passportType;
    }
}
