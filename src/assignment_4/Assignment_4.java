package assignment_4;

/*
Gruber Healthcare has different types of forms for their customer, one of which is a know your customer form ( KYC ) which has to be filled annually. Each form has a date which signifies the date the form was filled called the form date.

Due to government regulations the KYC form can only be filled within + or - 30 days of the signup anniversary of a customer. When filling it up, you have to provide the form date. If you are past the +-30 day anniversary then you can back-date it so that it falls in the +-30-day window. When filling it up you cannot use a future date for the form date.

For Example, assuming today is 4 Apr 2017 and I had signed up on 1st Mar 2014, my window for KYC submission this year would be 30 Jan 2017 to 31 Mar 2017. Since it is already 4th Apr - I would have to back-date the KYC to a date in this range.

Note: The KYC form can be filled only for the closest anniversary in the past or within 30 days range in future.
Anniversary refers to same day and month every year. If your birthday is 01-02-1992 -then your first anniversary will be 01-02-1993, the 2nd will be 01-02-1994 and so on. 01-02-1992 is not an anniversary.

Given the signup date and the current date, provide the allowable date range for the form date.

Input - First line is an integer n as the number of inputs to be passed. Next, n lines are n input for the program in the format dd-mm-yyyy dd-mm-yyyy Each line has two dates separated by space where the first date in signup date and the second date is the current date.

Output - Range of dates for KYC form in format dd-mm-yyyy dd-mm-yyyy

Test Input:
5
16-07-1998 27-06-2017
04-02-2016 04-04-2017
04-05-2017 04-04-2017
04-04-2015 04-04-2016
04-04-2015 15-03-2016

Test output:
16-06-2017 27-06-2017
05-01-2017 06-03-2017
No range
05-03-2016 04-04-2016
05-03-2016 15-03-2016
 */
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Assignment_4 {

    public static void printKYCRange(String signupDate, String currentDate) throws Exception {
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
        // Parsing the input dates
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        LocalDate signupDatey = LocalDate.parse(signupDate, formatter);
        LocalDate currentDatey = LocalDate.parse(currentDate, formatter);


        Period difference = Period.between(signupDatey, currentDatey);
        if (difference.getYears() < 1) {
            System.out.println("No range");
            return;
        }

        Calendar signUpCal = Calendar.getInstance();
        Calendar currentCal = Calendar.getInstance();

        signUpCal.setTime(dateFormat.parse(signupDate));
        currentCal.setTime(dateFormat.parse(currentDate));

        signUpCal.set(Calendar.YEAR, currentCal.get(Calendar.YEAR));

        Calendar startRange = (Calendar) signUpCal.clone();       //startRange
        startRange.add(Calendar.DAY_OF_MONTH, -30);

        Calendar endRange = (Calendar) signUpCal.clone();       //EndRange
        endRange.add(Calendar.DAY_OF_MONTH, 30);

        if (currentCal.before(startRange)) {
            signUpCal.set(Calendar.YEAR, currentCal.get(Calendar.YEAR) - 1);

            startRange = (Calendar) signUpCal.clone();
            startRange.add(Calendar.DAY_OF_MONTH, -30);

            endRange = (Calendar) signUpCal.clone();
            endRange.add(Calendar.DAY_OF_MONTH, 30);
        }


        if (currentCal.before(endRange)) {
            endRange = currentCal;
        }

        System.out.println(dateFormat.format(startRange.getTime()) + " " + dateFormat.format(endRange.getTime()));
    }

    public static void main(String[] args) throws ParseException {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        scanner.nextLine();
        System.out.println("Enter Date according to this format: dd-MM-yyyy");
        for (int i = 0; i < n; i++) {
            String inputLine = scanner.nextLine();
            String[] dates = inputLine.split(" ");
            try
            {
                printKYCRange(dates[0], dates[1]);
            }
            catch (Exception e)
            {
                System.out.println("Enter date in correct format");      //Error handling
            }
        }

        scanner.close();
    }
}

/*
  Time complexity: O(T)
  Space complexity: O(T)

  where T is no. of test cases

  Inside one test case it takes only constant amoubt of time
 */