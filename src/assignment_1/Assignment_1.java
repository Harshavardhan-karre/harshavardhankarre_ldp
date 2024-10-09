package assignment_1;

/* Problem statement

Create a java program to search through the home directory and look for files that match a regular expression.
 The program should be able to take inputs repeatedly and should print out the full absolute path of the matching files found.
*/

import java.io.*;
import java.util.*;
import java.util.regex.*;

public class Assignment_1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the directory to search (or press Enter for home directory): ");
        String inputDirectory = scanner.nextLine().trim();

        // Inputting Directory name
        String searchDirectory = inputDirectory.isEmpty() ? System.getProperty("user.home") : inputDirectory;

        System.out.println("Searching in directory: " + searchDirectory);

        // Recursively searching
        while (true) {
            System.out.print("Enter regex pattern to search for files (or type 'exit' to quit): ");
            String regex = scanner.nextLine().trim();

            // If exit is pressed, it gets exit from program
            if (regex.equalsIgnoreCase("exit")) {
                System.out.println("Exiting the program.");
                break;
            }

            try {
                Pattern.compile(regex); // Pattern compiling
            } catch (PatternSyntaxException e) {
                System.out.println("Invalid regex pattern. Please try again.");
                continue;
            }

            File searchDir = new File(searchDirectory);
            // If no files found it prints no such file
            boolean foundMatch = searchFiles(searchDir, regex); // Store the result of search

            // Check if any files were found
            if (!foundMatch) {
                System.out.println("No such file or directory.");
            }
        }

        scanner.close();
    }

    private static boolean searchFiles(File directory, String regex) {
        File[] files = directory.listFiles();

        // If no files exist
        if (files == null) {
            System.out.println("Could not access directory: " + directory.getAbsolutePath());
            return false;
        }

        boolean foundMatch = false; // Reset foundMatch for each directory search

        for (File file : files) {
            if (file.isDirectory()) {
                foundMatch = searchFiles(file, regex) || foundMatch; // Recursively search directories
            } else {
                if (file.getName().matches(regex)) {
                    System.out.println("Found: " + file.getAbsolutePath()); // If found, get its path
                    foundMatch = true;
                }
            }
        }

        return foundMatch; // Return whether any files were found
    }
}

/*
Time Complexity: O(no. of directory + no.of files * avg length of filenames)
Space Complexity: O(maximum depth of the directory + maximum number of files/subdirectories in any single directory)
 */
