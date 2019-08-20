import { BinaryTree, Node } from './binarytree';

const root: Node = new Node(22);
const tree: BinaryTree = new BinaryTree(root);

tree.root = BinaryTree.insert(tree.root, 22);
tree.root = BinaryTree.insert(tree.root, 55);
tree.root = BinaryTree.insert(tree.root, 11);
tree.root = BinaryTree.insert(tree.root, 23);
tree.root = BinaryTree.insert(tree.root, 24);

BinaryTree.getTreePreOrder(tree.root);
BinaryTree.getTreeInOrder(tree.root);
BinaryTree.getTreePostOrder(tree.root);
