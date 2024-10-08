package SOLID.OCP.OCPCorrected;

public class USAPassportFeeCalculator implements FeeCalculator {
    @Override
    public double calculateFee() {
        return 100.5;
    }
}
