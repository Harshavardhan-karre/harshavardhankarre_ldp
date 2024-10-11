package assignment_12;
/*

Make a Student class having fields id,name,age,gender,engDepartment,year of enrollment ,perTillDate

Add following student in list ;

1.new Student(111, "Jiya Brein", 17, "Female", "Computer Science", 2018, 70.8))
2.new Student(122, "Paul Niksui", 18, "Male", "Mechanical", 2016, 50.2))
3 new Student(133, "Martin Theron", 17, "Male", "Electronic", 2017, 90.3))
4.new Student(144, "Murali Gowda", 18, "Male", “Electrical”, 2018, 80))
5.new Student(155, "Nima Roy", 19, "Female", "Textile", 2016, 70))
6.new Student(166, "Iqbal Hussain", 18, "Male", "Security", 2016, 70))
7.new Student(177, "Manu Sharma", 16, "Male", "Chemical", 2018, 70))
8.new Student(188, "Wang Liu", 20, "Male", "Computer Science", 2015, 80));
9.new Student(199, "Amelia Zoe", 18, "Female", "Computer Science", 2016, 85));
10.new Student(200, "Jaden Dough", 18, "Male", "Security", 2015, 82));
11.new Student(211, "Jasna Kaur", 20, "Female", "Electronic", 2019, 83));
12.new Student(222, "Nitin Joshi", 19, "Male", "Textile", 2016, 60.4));
13.new Student(233, "Jyothi Reddy", 16, "Female", "Computer Science", 2015, 45.6));
14.new Student(244, "Nicolus Den", 16, "Male", "Electronic", 2017, 95.8));
15.new Student(255, "Ali Baig", 17, "Male", "Electronic", 2018, 88.4));
16.new Student(266, "Sanvi Pandey", 17, "Female", “Electric”, 2019, 72.4));
17.new Student(277, "Anuj Chettiar", 18, "Male", "Computer Science", 2017, 57.5));

Use stream api on above list of employees find

1. Print the name of all departments in the college?
2.Get the names of all students who have enrolled after 2018?
3. Get the details of all male student in the computer sci department?
4. How many male and female student are there ? (HINT:use Collectors.groupingBy()) for grouping based on gender))
5.What is the average age of male and female students?
6.Get the details of highest student having highest percentage ?
7.Count the number of students in each department? (Hint :use Collectors.groupingBy())))
8. What is the average percentage achieved in each department?
9. Get the details of youngest male student in the Electronic department?(Hint :Use Collectors.minBy))
10.How many male and female students are there in the computer science department?

 */



import java.util.*;
import java.util.stream.Collectors;

public class Assignment_12 {
    public static void main(String[] args) {
        List<Student> list = new ArrayList<Student>();

        list.add(new Student(111, "Jiya Brein", 17, "Female", "Computer Science", 2018, 70.8));
        list.add(new Student(122, "Paul Niksui", 18, "Male", "Mechanical", 2016, 50.2));
        list.add(new Student(133, "Martin Theron", 17, "Male", "Electronic", 2017, 90.3));
        list.add(new Student(144, "Murali Gowda", 18, "Male", "Electrical", 2018, 80));
        list.add(new Student(155, "Nima Roy", 19, "Female", "Textile", 2016, 70));
        list.add(new Student(166, "Iqbal Hussain", 18, "Male", "Security", 2016, 70));
        list.add(new Student(177, "Manu Sharma", 16, "Male", "Chemical", 2018, 70));
        list.add(new Student(188, "Wang Liu", 20, "Male", "Computer Science", 2015, 80));
        list.add(new Student(199, "Amelia Zoe", 18, "Female", "Computer Science", 2016, 85));
        list.add(new Student(200, "Jaden Dough", 18, "Male", "Security", 2015, 82));
        list.add(new Student(211, "Jasna Kaur", 20, "Female", "Electronic", 2019, 83));
        list.add(new Student(222, "Nitin Joshi", 19, "Male", "Textile", 2016, 60.4));
        list.add(new Student(233, "Jyothi Reddy", 16, "Female", "Computer Science", 2015, 45.6));
        list.add(new Student(244, "Nicolus Den", 16, "Male", "Electronic", 2017, 95.8));
        list.add(new Student(255, "Ali Baig", 17, "Male", "Electronic", 2018, 88.4));
        list.add(new Student(266, "Sanvi Pandey", 17, "Female", "Electric", 2019, 72.4));
        list.add(new Student(277, "Anuj Chettiar", 18, "Male", "Computer Science", 2017, 57.5));

        /*
           Time complexity: O(N)
           Space complexity: O(N)
         */

        //task 1
        List<String> departments = list.stream()
                .map(Student::getEngDepartment)
                .distinct()
                .collect(Collectors.toList());

        System.out.println("Departments in the college:");
        departments.forEach(System.out::println);

        /*
           Time complexity: O(N)
           Space complexity: O(distinct departments)
         */

        //task 2
        list.stream().filter(student->student.getYearOfEnrollment()>2018)
                .map(Student::getName).forEach(System.out::println);

        /*
           Time complexity: O(N)
           Space complexity: O(1)
         */

        //task 3
        list.stream().filter(student -> student.getGender().equals("Male") && student.getEngDepartment().equals("Computer Science"))
                .map(Student::toString).forEach(System.out::println);

        /*
           Time complexity: O(N)
           Space complexity: O(1)
         */
        //task 4
        Map<String,Long> m=list.stream().collect(Collectors.groupingBy(Student::getGender,Collectors.counting()));
        m.forEach((gen,count)-> System.out.println(gen+" "+count));

        /*
           Time complexity: O(N)
           Space complexity: O(1)
         */

           //aproach2
        long noOfMaleFemale= list.stream().filter(student -> student.getGender().equals("Male")).count();
        System.out.println(noOfMaleFemale);

        /*
           Time complexity: O(N)
           Space complexity: O(1)
         */

        //task 5
        long femCount= list.stream().filter(student -> student.getGender().equals("Female")).count();
        long malCount= list.stream().filter(student -> student.getGender().equals("Male")).count();
        long sumFem=list.stream().filter(student -> student.getGender().equals("Female")).mapToInt(Student::getAge).sum();
        long sumMale=list.stream().filter(student -> student.getGender().equals("Male")).mapToInt(Student::getAge).sum();
        System.out.println("Avg of Male age: "+((double)sumMale/malCount));
        System.out.println("Avg of Female age: "+((double)sumFem/femCount));

        /*
           Time complexity: O(N)
           Space complexity: O(1)
         */

           //approach 2
        Map<String,Double> hm= list.stream() .collect(Collectors.groupingBy(Student::getGender, Collectors.averagingInt(Student::getAge)));
        hm.forEach((gen,age)->System.out.println(gen+":"+age));

        /*
           Time complexity: O(N)
           Space complexity: O(1)
         */

        //task 6
        Optional<Student> topStudent = list.stream()
                .max(Comparator.comparingDouble(Student::getPercentage));

        if (topStudent.isPresent()) {
            System.out.println("Student with highest percentage: " + topStudent.get());
        } else {
            System.out.println("No students found.");
        }

        /*
           Time complexity: O(N)
           Space complexity: O(1)
         */

        //task 7
        Map<String,Long> m1=list.stream().collect(Collectors.groupingBy(Student::getEngDepartment, Collectors.counting()));
        m1.forEach((department,count)-> System.out.println(department+" "+count));

        /*
           Time complexity: O(N)
           Space complexity: O(no of departments)
         */

        //task 8

        Map<String,Double> m2= list.stream().collect(Collectors.groupingBy(Student::getEngDepartment, Collectors.averagingDouble(Student::getPercentage)));
        m2.forEach((department,avgPercentage)-> System.out.println(department+" "+avgPercentage));

        /*
           Time complexity: O(N)
           Space complexity: O(no of departments)
         */


        //task 9

        Optional<Student> youngStud = list.stream().filter(student -> student.getGender().equals("Male") && student.getEngDepartment().equals("Electronic"))
                .collect(Collectors.minBy(Comparator.comparingInt(Student::getAge)));

        if (youngStud.isPresent()) {
            System.out.println("Youngest Male Student in Electronic Department: " + youngStud.get());
        } else {
            System.out.println("No such student found.");
        }

        /*
           Time complexity: O(N)
           Space complexity: O(1)
         */

        //task 10

        Map<String,Long> m3=list.stream().filter(student -> student.getEngDepartment().equals("Computer Science")).collect(Collectors.groupingBy(Student::getGender,Collectors.counting()));
       m3.forEach((gender,count)-> System.out.println(gender+":"+count));

       /*
           Time complexity: O(N)
           Space complexity: O(1)
         */
    }
}

/*

Overall compleity

           Time complexity: O(N)
           Space complexity: O(N)
 */