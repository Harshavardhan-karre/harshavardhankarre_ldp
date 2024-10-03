package SOLID.OCP.OCPCorrected;

public class IndiaPassportFeeCalculator implements FeeCalculator {
    @Override
    public double calculateFee() {
        return 50.0;
    }
}