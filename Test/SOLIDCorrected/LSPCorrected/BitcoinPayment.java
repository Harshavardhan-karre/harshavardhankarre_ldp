package Test.SOLIDVoilated.LSPVoilated;


class BitcoinPayment extends PaymentMethod {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing Bitcoin payment with amount"+amount);
    }
}