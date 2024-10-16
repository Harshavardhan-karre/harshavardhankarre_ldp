package assignment_10;

/*

Generics, Arrays and Containers

Create a generic, singly linked list class called SList, which, to keep things simple,
 does not implement the List interface.

Each Link object in the list should contain a reference to the next element in the list,
but not the previous one (LinkedList, in contrast, is a doubly linked list,
which means it maintains links in both directions).

Create your own SListIterator which, again for simplicity, does not implement ListIterator.
 The only method in SList other than toString( ) should be iterator( ),
 which produces an SListIterator.

The only way to insert and remove elements from an SList is through SListIterator.
Write code to demonstrate SList.

 */

import java.util.ArrayList;
import java.util.List;

class Link<T> {
    T data;
    Link<T> next;

    Link(T data) {
        this.data = data;
        this.next = null;
    }
}

class SList<T> {
    private Link<T> head;
    Link<T> tail;

    SList() {
        head = new Link<>(null);
        tail = head;
    }

    public SListIterator<T> iterator() {
        return new SListIterator<>(this);
    }

    Link<T> getHead() {
        return head;
    }

    void addtoList(T data) {
        Link<T> link = new Link<>(data);
        tail.next = link;
        tail = link;
    }


    boolean remove(T data) {
        Link<T> previous = head;
        Link<T> current = head.next;

        while (current != null) {
            if (current.data.equals(data)) {
                previous.next = current.next;

                if (current == tail) {
                    tail = previous;
                }
                return true;
            }
            previous = current;
            current = current.next;
        }
        return false;
    }

    @Override
    public String toString() {
        StringBuilder result = new StringBuilder();
        Link<T> current = head.next; // Skip dummy head
        while (current != null) {
            result.append(current.data).append(" -> ");
            current = current.next;
        }
        result.append("null");
        return result.toString();
    }
}

class SListIterator<T> {
    private Link<T> previous;
    private Link<T> current;
    private SList<T> list;

    public SListIterator(SList<T> list) {
        this.list = list;
        this.previous = list.getHead();
        this.current = list.getHead().next;
    }

    public boolean hasNext() {
        return current != null;
    }

    public T next() {
        if (!hasNext()) {
            throw new IllegalStateException("No more elements in the list.");
        }
        T data = current.data;
        previous = current;
        current = current.next;
        return data;
    }

    public void add(T data) {
        Link<T> newLink = new Link<>(data);
        newLink.next = current;
        previous.next = newLink;
        previous = newLink;

        if (newLink.next == null) {
            list.tail = newLink;
        }
    }
}

public class Assignment_10 {
    public static void main(String[] args) {
        SList<Integer> list = new SList<>();
        list.addtoList(1);
        list.addtoList(2);
        list.addtoList(3);

        System.out.println("Initial list: " + list);

        SListIterator<Integer> iterator = list.iterator();

        System.out.println("\nIterating through the list:");
        while (iterator.hasNext()) {
            System.out.println("Next element: " + iterator.next());
        }

        iterator.add(4);
        System.out.println("\nList after adding 4: " + list);


        boolean removed = list.remove(2);
        System.out.println("\nAttempting to remove 2: " + (removed ? "Success" : "Failure"));
        System.out.println("List after removing 2: " + list);

    }
}

/*
Time complexity: O(N)
Space complexity: O(N)
 */