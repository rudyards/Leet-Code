// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var l3 = new ListNode(0);
    pointer = l3;
    carry = false;
    nextCarry = false;
    while (l1 != null || l2 != null || carry != false){
        newNum = 0;
        if (l1 != null) {
            newNum = newNum + l1.val
        } if (l2 != null) {
            newNum = newNum + l2.val
        }
        if (carry == true){
            newNum = newNum +1;
            carry = false;
        }
        if (newNum > 9){
            carry = true;
            newNum = newNum - 10;
        }
        pointer.val = newNum;
        if (l1){
            l1 = l1.next;
        }
        if (l2){
            l2 = l2.next;
        }
        
        if (l1 != null || l2 != null || carry == true){
            pointer.next = new ListNode(0);
            pointer = pointer.next
        }

        

    }
    return l3
};

// Runtime: 104 ms, faster than 95.40% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 38.6 MB, less than 34.72% of JavaScript online submissions for Add Two Numbers.