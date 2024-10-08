package Test.SOLIDCorrected.OCPDIPCorrected;

public class PaymentService {
    private ModeOfPaymentService paymentMethod;


    public PaymentService(ModeOfPaymentService paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public void processPayment(double amount) {
        paymentMethod.processPayment(amount);
    }
}
