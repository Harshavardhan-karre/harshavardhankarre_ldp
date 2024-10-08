package SOLID.LSP.LSPVoilated;

class RegularPassport extends Passport {
    @Override
    public double getFee() {
        return 100.0;
    }
    public void processApplication() {
        System.out.println("Processing application process for Regular passport."+getFee());
    }
}