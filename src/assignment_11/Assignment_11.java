package assignment_11;
import java.io.*;
import java.util.*;
/*
Using TextFile and a Map<Character,Integer>, create a program that takes the file name as a 
command line argument and counts the occurrence of all the different characters.
 Save the results in a text file.
 */

public class Assignment_11 {

    public static void main(String[] args) {

        if (args.length != 1) {
            System.out.println("Please provide path to file name or use java CharacterCount <filename> in command line");
            return;
        }

        String fileName = args[0];
        Map<Character, Integer> charCountMap = new HashMap<>();

        try {
            FileReader fileReader = new FileReader(fileName);
            BufferedReader reader = new BufferedReader(fileReader);

            int characterInFile;
            while ((characterInFile = reader.read()) != -1) {
                char ch = (char) characterInFile;

                if (Character.isWhitespace(ch)) {
                    continue;
                }

                charCountMap.put(ch, charCountMap.getOrDefault(ch, 0) + 1);
            }

            reader.close();
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
            return;
        }

        String outputFileName = "CharacterCountResult.txt";
        try {

            PrintWriter writer = new PrintWriter(new FileWriter(outputFileName));

            for (Map.Entry<Character, Integer> entry : charCountMap.entrySet()) {
                writer.println(entry.getKey() + " : " + entry.getValue());
            }

            writer.close();
            System.out.println("Character counts saved to " + outputFileName);
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
        }
    }
}
/*
Time complexity: O(N) where N is no of characters in file
Space compelxity: O(M) where M is size of hashmap
 */