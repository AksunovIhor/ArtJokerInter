//binary tree
class Node {
    #value;
    #left;
    #right;

    constructor() {
        this.#value = null;
        this.#left = null;
        this.#right = null;
    };

    insert( value, node ) {
        node = node || this;

        if(node.#value === null){
            node.#value = value;
            return true;
        };

        if (node.#value > value) {
            if (node.#left === null) {
                node.#left = new Node();
            }
            return this.insert(value, node.#left);
        };

        if (node.#value < value) {
            if (node.#right === null) {
                node.#right = new Node();
            }
            return this.insert(value, node.#right);
        };
    };

    search(value, node) {
        node = node || this;
        if(arguments[0] === undefined){
            return null;
        };

        if(node.#value === value){
            return node.#value;
        };

        if(node.#value > value) {
            if(node.#left === null) {
                return null;
            }
            return this.search(value, node.#left);
        };

        if(node.#value < value) {
            if(node.#right === null) {
                return null;
            }
            return this.search(value, node.#right);
        };
    };

    remove(value, node, linkParent, flag){
        if(arguments[0] === undefined){
            return null;
        }
        if(!this.search(value)){
            return null;
        }
        node = node || this;
        linkParent = linkParent || this;
        flag = flag || false;
        if(flag) {
          if (node.#right !== null) {
          return this.remove(value, node.#right, node, flag);
          } else {
            linkParent.#right = null;
            return node.#value;
          }
        }
        if(node.#value === value) {
          if (node.#left === null && node.#right === null){
              if(linkParent.#left && linkParent.#left.#value === node.#value){
                linkParent.#left = null;
              } else{
                linkParent.#right = null;
              }
          }
          if(node.#left === null && node.#right){
              node.#value = node.#right.#value;
              node.#right = node.#right.#right;
          }
          if(node.#left && node.#right === null){
              node.#value = node.#left.#value;
              node.#left = node.#left.#left;
          }
          if(node.#left && node.#right) {
            if(node.#left.#right) {
              flag = true;
              node.#value = this.remove(value, node.#left, node, flag);
              flag = false;
            } else {
              node.#value = node.#left.#value;
              node.#left = node.#left.#left;
            }
          }
        } else {
          if(node.#value < value) {
              return this.remove(value, node.#right, node, flag);
          }
          if(node.#value > value) {
              return this.remove(value, node.#left, node, flag);
          }
        }
    }

};

//bubble sort
Array.prototype.bubbleSort = function(compare){
    for(let i = 0; i < this.length; i++){
        for(let j = 0; j < this.length; j++){

            if(compare(this[j], this[j + 1])){
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
};

//selection sort
Array.prototype.selectionSort = function (compare){
    for(let i = 0; i < this.length; i++){
        let minValue = this[i];

        for(let j = i + 1; j < this.length; j++){
            if(compare(this[j], this[minValue])){
                minValue = j;
            }

            if (minValue !== i) {
                let temp = this[i];
                this[i] = this[minValue];
                this[minValue] = temp;
            }
        }
    }
};