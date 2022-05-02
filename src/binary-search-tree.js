const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

function addNode(root, newNode) {
  if (!root) {
    return new Node(newNode);
  }

  if (newNode < root.data) {
    root.left = addNode(root.left, newNode)
  } else if (newNode > root.data) {
    root.right = addNode(root.right, newNode);
  }

  return root;
}

function search(root, data) {
  if (!root) return null;

  if (root.data === data) {
    return root;
  } else if (root.data > data) {
    return search(root.left, data);
  } else {
    return search(root.right, data);
  }
}

function removeNode(root, data) {
  if (root === null) return null;

  if (data < root.data) {
    root.left = removeNode(root.left, data);

    return root;
  }

  if (data > root.data) {
    root.right = removeNode(root.right, data);

    return root;
  }

  if (!root.left && !root.right) {
    return null;
  }

  if (!root.left) {   
    root = root.right;

    return root;
  }

  if (!root.right) {
    root = root.left;

    return root;
  }

  let newNode = minNodeForRemove(root.right);

  root.data = newNode.data;
  root.right = removeNode(root.right, newNode.data);

  return root;
}

function minNodeForRemove(node) {
  if (!node.left) {
    return node;
  }

  return minNodeForRemove(node.left);
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = addNode(this._root, data);
  }

  has(data) {
    let result = search(this._root, data);
    
    return result ? (result.data === data) : false;
  }

  find(data) {
    return search(this._root, data);
  }

  remove(data) {
    this._root = removeNode(this._root, data);
  }

  min() {
    let node = this._root;

    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {  
    let node = this._root;

    while(node.right) {
      node = node.right;
    }
  
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};