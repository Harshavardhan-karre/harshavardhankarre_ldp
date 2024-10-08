package SOLID.LSP.LSPCorrected;

public class DiplomaticPassport extends Passport {
    @Override
    public double getFee() {
        return 0.0;
    }

    @Override
    public void processApplication() {
        System.out.println("Processing diplomatic passport with fee: " + getFee());
    }
}