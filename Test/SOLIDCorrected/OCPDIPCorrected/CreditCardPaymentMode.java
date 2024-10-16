package Test.SOLIDCorrected.OCPDIPCorrected;

public class CreditCardPaymentMode implements ModeOfPaymentService{
    @Override
    public void processPayment(double amount) {
        System.out.println("payment processed with credit card with amount of "+amount);
    }
}
