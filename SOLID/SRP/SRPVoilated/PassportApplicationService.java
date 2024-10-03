package SOLID.SRP.SRPVoilated;

class PassportApplicationService{
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