package HashMap_HashSet;

import java.util.HashSet;
import java.util.LinkedHashSet;

public class HashSetExercise {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>();
        set.add("A");
        set.add("B");
        set.add("C");
        set.add("D");
        for (String s : set) {
            System.out.println(s);
        }
        LinkedHashSet<String> linkedHashSet = new LinkedHashSet<>();
        linkedHashSet.add("A");
        linkedHashSet.add("B");
        linkedHashSet.add("C");
        linkedHashSet.add("D");
        for (String s : linkedHashSet) {
            System.out.println(s);
        }
    }
}
