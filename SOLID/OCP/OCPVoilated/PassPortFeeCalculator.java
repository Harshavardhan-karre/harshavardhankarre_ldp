package SOLID.OCP.OCPVoilated;

public class PassportFeeCalculator {
    public double calculateFee(String country) {
        if (country.equals("USA")) {
            return 100;
        } else if (country.equals("India")) {
            return 50;
        }
        return 75;
    }
}
