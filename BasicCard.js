var fs = require("fs");

function BasicCard (front, back) {
  if (this instanceof BasicCard) {
    this.front = front;
    this.back = back;
    this.cardText = "===Basic Flashcard===\n+\n+  Front: " + this.front + "\n+\n+  Back: " + this.back + "\n+\n===End of Flashcard===\n";
    this.logText = "Basic Card:@  Front: " + this.front + "@  Back: " + this.back + "@";
    this.displayCard = function () {
      console.log(this.cardText);
    };
    this.writeCard = function () {
      fs.appendFile("log.txt", this.logText, function (err) {
        if (err) console.log("There was an error: " + err);
      });
    };
  } else {
    return new BasicCard(front, back);
  }
};

module.exports = BasicCard;
