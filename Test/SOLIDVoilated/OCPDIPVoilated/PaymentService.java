package Test.SOLIDVoilated.OCPDIPVoilated;

class PaymentService {
    public void processPayment(String method, double amount) {
        if (method.equals("creditCard")) {
            CreditCardPayment cc = new CreditCardPayment();
            cc.processPayment(amount);
        } else if (method.equals("bitcoin")) {
            BitcoinPayment btc = new BitcoinPayment();
            btc.processPayment(amount);
        }
    }
}