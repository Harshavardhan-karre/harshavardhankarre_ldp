package SOLID.LSP.LSPVoilated;


class DiplomaticPassport extends Passport {
    @Override
    public double getFee() {
        return 0.0;
    }

    @Override
    public void processApplication() {
        throw new RuntimeException("Skipping Application process for diplomatic passport.");
    }
}