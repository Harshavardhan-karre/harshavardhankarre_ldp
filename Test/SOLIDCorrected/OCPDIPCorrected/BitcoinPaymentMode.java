package Test.SOLIDCorrected.OCPDIPCorrected;

public class BitcoinPaymentMode implements ModeOfPaymentService {
    public void processPayment(double amount) {
        System.out.println("Processed with Bitcoin payment mode with amount " + amount);
    }
}
