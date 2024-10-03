package SOLID.LSP.LSPVoilated;

import SOLID.LSP.LSPCorrected.Passport;

class DiplomaticPassport extends SOLID.LSP.LSPCorrected.Passport {
    @Override
    public double getFee() {
        return 0.0;
    }

    @Override
    public void processApplication() {
        System.out.println("Skipping application process for diplomatic passport.");
    }
}