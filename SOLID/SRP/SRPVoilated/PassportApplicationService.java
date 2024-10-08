package SOLID.SRP.SRPVoilated;

class PassportApplicationService{
    private String applicantName;
    private String passportType;

    public PassportApplicationService(String applicantName, String passportType) {
        this.applicantName = applicantName;
        this.passportType = passportType;
    }

    public String getApplicantName() {
        return applicantName;
    }

    public String getPassportType() {
        return passportType;
    }

    public void processApplication(int idofApplication) {
                validateApplication(idofApplication);
                submitToDatabase(idofApplication);
                sendNotification("Application submitted");
            }
            private void validateApplication(int idofApplication) {
                        System.out.println("Application validated.");
                    }
                    private void submitToDatabase(int idofApplication) {
                        System.out.println("Application saved to database.");
                    }
                    private void sendNotification(String message) {
                        System.out.println("Notification sent: " + message);
                    }
}