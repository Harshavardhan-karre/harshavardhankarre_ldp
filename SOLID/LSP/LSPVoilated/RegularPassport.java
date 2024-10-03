package SOLID.LSP.LSPVoilated;

class RegularPassport extends PassportFee {
    @Override
    public double getFee() {
        return 100.0;
    }
    public void processApplication() {
        System.out.println("Processing application process for Refular passport.");
    }
}