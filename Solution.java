import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public String tree2str(TreeNode t) {
        if (t == null) return "";
        if (t.left != null && t.right != null) return t.val + "(" + tree2str(t.left) + ")(" + tree2str(t.right) + ")";
        if (t.left == null && t.right != null) return t.val + "()(" + tree2str(t.right) + ")";
        if (t.left != null && t.right == null) return t.val + "(" + tree2str(t.left) + ")";
        if (t.left == null && t.right == null) return t.val + "";
        return "";
    }
}