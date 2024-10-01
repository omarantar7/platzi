 //qt nb 1
 const validateEmail = (email) => {
  // remove the spaces on the edge
  const emailNoSpaces = email.trim();
  // make sure it contain @ and .
  if (emailNoSpaces.includes("@") && emailNoSpaces.includes(".")) {
    //make sure the @ is not the first or the last char
    if (
      emailNoSpaces.charAt(0) === "@" ||
      emailNoSpaces.charAt(emailNoSpaces.length - 1) === "@"
    ) {
      return false;
    }
    const parts = emailNoSpaces.split("@");
    //make sure their no more then 2 @ symbol
    if (parts.length !== 2) {
      return false;
    }
    const part1 = parts[0];
    const part2 = parts[1];
    //make sure their is a . symbol after the @
    if (part2.indexOf(".") === -1) {
      return false;
    }
    //make sure the . symbol is not right after the @
    if (part2.indexOf(".") === 0) {
      return false;
    }
    const lastIndexOfDot = part2.lastIndexOf(".");
    //make sure their is more then 1 char after the . symbol
    if (part2.length - lastIndexOfDot <= 2) {
      return false;
    }
    return true;
  }
};
console.log(validateEmail("omarantar@gmail.com"));
console.log(validateEmail("omar@antar@gmail.com"));
console.log(validateEmail("omarantar@gmail.c"));
console.log(validateEmail("omarantar@.com"));

//qt nb 2
const data = [
  { Suit: "Hearts", Animal: "Lion", Fruit: "Apple", Result: true },
  { Suit: "Diamonds", Animal: "Fox", Fruit: "Bananas", Result: false },
  { Suit: "Spades", Animal: "Parrot", Fruit: "Mango", Result: true },
  { Suit: "Clubs", Animal: "Seal", Fruit: "Papaya", Result: true },
  { Suit: "Joker", Animal: "Snake", Fruit: "Watermelon", Result: false },
];

const probabilityToBeatBoss = (data, suit, animal, fruit) => {
  const filteredData = data.filter(
    (item) =>
      item.Suit === suit && item.Animal === animal && item.Fruit === fruit
  );
  if (filteredData.length === 0) {
    return 0.0;
  }
  const trueCount = filteredData.filter((item) => item.Result).length;

  return (trueCount / filteredData.length) * 100;
};

console.log(
  "Probability to beat the boss:" +
    probabilityToBeatBoss(data, "Hearts", "Lion", "Apple").toFixed(2) +
    "%"
);
//qt nb 3
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addNode(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  removeNode(x) {
    while (this.head && this.head.value > x) {
      this.head = this.head.next;
    }
    let current = this.head;
    while (current && current.next) {
      if (current.next.value > x) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}
const list = new LinkedList();
list.addNode(10);
list.addNode(5);
list.addNode(12);
list.addNode(7);
list.addNode(3);
list.addNode(9);
list.addNode(10);
list.removeNode(7);
console.log(list);

//qt nb 4
function isValidBracketSequence(brackets) {
  //initialize arr to add the brackets to it
  const arr = [];
  //define each opening bracket with his closing one
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  //go through each character in the brackets
  for (let bracket of brackets) {
    //make sure each bracket in the string is one of those 3 ([{
    if (pairs[bracket]) {
      //if it is one of them pushing the bracket into the arr
      arr.push(bracket);
    } else if (bracket === ")" || bracket === "]" || bracket === "}") {
      //make sure if the closing bracket doesn't match the opening one return false
      if (pairs[arr.pop()] !== bracket) {
        return false;
      }
    }
  }
  //if the arr is empty the return should be true otherwise it will be false
  return arr.length === 0;
}
console.log(isValidBracketSequence("([])]{}"));