package assignment_3;


//Write a java function that will ping any host ( given as input ) and computes the median of the time taken to ping.
//Use the system ping utility, do not use any deprecated methods.


import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Assignment_3{

    public static void main(String[] args) {

        String host = "google.com";
        int pingCount = 5;
        double medianPingTime = getMedianPingTime(host, pingCount);

        if (medianPingTime != -1) {
            System.out.println("Median Ping Time: " + medianPingTime + " ms");
        } else {
            System.out.println("No valid ping times were recorded.");
        }
    }

    public static double getMedianPingTime(String host, int pingCount) {
        List<Double> pingTimes = new ArrayList<>();
        String os = System.getProperty("os.name").toLowerCase();
        ProcessBuilder processBuilder;

        if (os.contains("win")) {
            processBuilder = new ProcessBuilder("ping", "-n", String.valueOf(pingCount), host);
        } else {
            processBuilder = new ProcessBuilder("ping", "-c", String.valueOf(pingCount), host);
        }

        try {
            Process process = processBuilder.start();
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
                if (line.contains("time=")) {
                    String timePart = line.split("time=")[1];
                    String time = timePart.contains("ms") ? timePart.split("ms")[0] : timePart.split(" ")[0];
                    pingTimes.add(Double.parseDouble(time.trim()));
                } else if (line.contains("avg")) {
                    String[] parts = line.split("avg");
                    if (parts.length > 1) {
                        String avgTimePart = parts[1].trim().split("/")[0];
                        pingTimes.add(Double.parseDouble(avgTimePart));
                    }
                }
            }

            if (pingTimes.isEmpty()) {
                return -1;
            }

            Collections.sort(pingTimes);
            int size = pingTimes.size();
            if (size % 2 == 0) {
                return (pingTimes.get(size / 2 - 1) + pingTimes.get(size / 2)) / 2.0;
            } else {
                return pingTimes.get(size / 2);
            }

        } catch (Exception e) {
            e.printStackTrace();
            return -1;
        }
    }
}

/*
Time complexity: O(pingCount+ n log n)
Space Complexity: O(n)

where n is the number of valid ping times recorded.
 */