package SOLID.LSP.LSPVoilated;


class DiplomaticPassport extends Passport {
    @Override
    public double getFee() {
        return 0.0;
    }

    @Override
    public void processApplication() {
        System.out.println("Skipping application process for diplomatic passport.");
    }
}