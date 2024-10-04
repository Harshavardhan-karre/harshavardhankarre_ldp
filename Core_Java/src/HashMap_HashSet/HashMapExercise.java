package HashMap_HashSet;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

public class HashMapExercise {
    public static void main(String[] args) {
        HashMap<Integer,Integer> h = new HashMap<>();
        h.put(1,2);
        h.put(20,3);
        h.put(12,4);
        h.put(15,5);
        System.out.println(h);
        for(int i:h.keySet())
        {
            System.out.println(i+" "+h.get(i));
        }
        for (int i:h.values())
        {
            System.out.println(i);
        }
        for(Map.Entry<Integer,Integer> m:h.entrySet())
        {
            System.out.println(m.getKey()+" "+m.getValue());
        }
        LinkedHashMap<Integer,Integer> l = new LinkedHashMap<>();
        l.put(1,2);
        l.put(20,3);
        l.put(12,4);
        l.put(15,5);
        System.out.println(l);
        for(Map.Entry<Integer,Integer> m:l.entrySet())
        {
            System.out.println(m.getKey()+" "+m.getValue());
        }
    }
}
