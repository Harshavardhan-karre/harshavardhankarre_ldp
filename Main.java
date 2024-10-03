import SOLID.DIP.DIPCorrected.SMSNotificationService;
import SOLID.DIP.DIPVoilated.EmailNotificationService;
import SOLID.ISP.ISPCorrected.EmergencyPassportApplication;
import SOLID.LSP.LSPCorrected.DiplomaticPassport;
import SOLID.OCP.OCPCorrected.IndiaPassportFeeCalculator;
import SOLID.OCP.OCPCorrected.USAPassportFeeCalculator;
import SOLID.SRP.SRPCorrected.NotificationService;
import SOLID.SRP.SRPCorrected.PassportApplication;
import SOLID.SRP.SRPCorrected.PassportSubmissionService;
import SOLID.SRP.SRPCorrected.PassportValidator;


public class Main {
    public static void main(String[] args) {
        PassportApplication ps = new PassportApplication("Rahul","Regular");
        System.out.println(ps.getApplicantName());
        System.out.println(ps.getPassportType());
        PassportSubmissionService pss = new PassportSubmissionService();
        pss.submitToDatabase(12);
        NotificationService ns = new NotificationService();
        ns.sendNotification("Successfully");
        PassportValidator pv = new PassportValidator();
        pv.validate(12);
        IndiaPassportFeeCalculator ifc = new IndiaPassportFeeCalculator();
        USAPassportFeeCalculator ufc = new USAPassportFeeCalculator();
        System.out.println("Indian passport Fee Calculator"+ifc.calculateFee());
        System.out.println("Indian passport Fee Calculator"+ufc.calculateFee());
        DiplomaticPassport dp=new DiplomaticPassport();
        System.out.println(dp.getFee());
        dp.processApplication();
        EmergencyPassportApplication epa=new EmergencyPassportApplication();
        epa.submit();
        EmailNotificationService ems = new EmailNotificationService();
        ems.sendNotification("Encrypted Code");
        SMSNotificationService sms=new SMSNotificationService();
        sms.sendNotification("Normal Message");
    }
}
