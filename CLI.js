var fs = require("fs");
var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");
var typeCard = process.argv[2];
var mainText = process.argv[3];
var secondaryText = process.argv[4];

function mainCheck () {
  if (typeCard === undefined) {
    typeCard = "no input";

    mainLogic();
  } else {
    typeCard = typeCard.toLowerCase();

    mainLogic();
  }
};

function mainLogic () {
  switch (typeCard) {
    case "cloze":
      cloze(mainText, secondaryText);
      break;
    case "basic":
      basic(mainText, secondaryText);
      break;
    case "read":
      read();
      break;
    default:
      example();
      break;
  }
};

function cloze (text, cloze) {
  if (testArg()) {
    var newCloze = ClozeCard(text, cloze);

    if (newCloze.test()) {
      newCloze.displayCard();

      newCloze.writeCard();
    }
  }
};

function basic (front, back) {
  if (testArg()) {
    var newBasic = BasicCard("What is my name?", "Ross");

    newBasic.displayCard();

    newBasic.writeCard();
  }
};

function testArg () {
  if (mainText === undefined || secondaryText === undefined) {
    console.log("In order to create a Cloze-deletion flashcard, the main text, as well as the cloze phrase, are required.");

    console.log("In order to create a Basic flashcard, the front and back of the card are required.");

    console.log("Please try again and place quotes around each string.");

    return false;
  } else {
    return true;
  }
};

function read () {
  fs.readFile("./log.txt", (err, data) => {
    if (err) throw err;

    data = String(data);

    var output = data.split("@");

    for (var i = 0; i < output.length; i++) {
      console.log(output[i]);
    }
  });
};

function example () {
  console.log("Here is an example of both types of flashcards:\n");

  var exampleCloze = ClozeCard("A hotdog is a type of sandwich", "sandwich");

  var exampleBasic = BasicCard("R + L = ", "J");

  if (exampleCloze.test()) {
    console.log("Command: Cloze \"Main string\" \"Cloze phrase\"");

    exampleCloze.displayCard();
  }
  console.log("Command: Basic \"Front of the card\" \"Back of the card\"");

  exampleBasic.displayCard();
};

mainCheck();
