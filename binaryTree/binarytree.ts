import { JL } from 'jsnlog';

export class BinaryTree {
  public root: Node;
  constructor(root: Node) {
    this.root = root;
  }

  static insert(node: (Node | undefined), value: number): Node {
    if (!node) {
      return new Node(value);
    }
    if (value > node.value) {
      if (!node.right) {
        node.right = new Node(value);
      } else {
        this.insert(node.right, value);
      }
    }
    if (value < node.value) {
      if (!node.left) {
        node.left = new Node(value);
      } else {
        this.insert(node.left, value);
      }
    }
    return node;
  }

  static getTreeInOrder(node: (Node | undefined)) {
    if (!node) {
      return;
    }

    this.getTreeInOrder(node.left);
    JL('BinaryTree.InOrder').info(node.value);
    this.getTreeInOrder(node.right);
  }

  static getTreePreOrder(node: (Node | undefined)) {
    if (!node) {
      return;
    }
    JL('BinaryTree.PreOrder').info(node.value);
    this.getTreePreOrder(node.left);
    this.getTreePreOrder(node.right);
  }

  static getTreePostOrder(node: (Node | undefined)) {
    if (!node) {
      return;
    }
    this.getTreePostOrder(node.left);
    this.getTreePostOrder(node.right);
    JL('BinaryTree.PostOrder').info(node.value);
  }
}

export class Node {
  public value: number;
  public left?: Node;
  public right?: Node;

  constructor(value: number) {
    this.value = value;
  }
}
