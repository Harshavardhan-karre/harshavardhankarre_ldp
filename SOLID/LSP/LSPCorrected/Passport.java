package SOLID.LSP.LSPCorrected;

class Passport {
    public double getFee() {
        return 100.0;
    }

    public void processApplication() {
        System.out.println("Processing passport with fee: " + getFee());
    }
}