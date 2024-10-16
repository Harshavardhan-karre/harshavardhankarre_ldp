package Test.SOLIDVoilated.LSPVoilated;


class BitcoinPayment extends PaymentMethod {
    @Override
    public void processPayment(double amount) {
        throw new RuntimeException("Processing Bitcoin payment");
    }
}