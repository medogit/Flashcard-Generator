var fs = require("fs");

function ClozeCard (text, cloze) {
  if (this instanceof ClozeCard) {
    this.fullText = text;
    this.cloze = cloze;
    this.pattern = new RegExp(this.cloze, "gi");
    this.partialText = this.fullText.replace(this.pattern, "...");
    this.cardText = "===Cloze-Deletion Flashcard===\n+\n+  Full: " + this.fullText + "\n+\n+  Cloze: " + this.cloze + "\n+\n+  Partial: " + this.partialText + "\n+\n===End of Flashcard===\n";
    this.logText = "Cloze Card:@  Full: " + this.fullText + "@  Cloze: " + this.cloze + "@  Partial: " + this.partialText + "@";
    this.displayCard = function () {
      console.log(this.cardText);
    };
    this.writeCard = function () {
      fs.appendFile("log.txt", this.logText, function (err) {
        if (err) console.log("There was an error: " + err);
      });
    };
    this.test = function () {
      if (!text.toLowerCase().includes(cloze.toLowerCase())) {
        console.log("ERROR: The text\"" + cloze + "\" is not present in the main string.");
        return false;
      } else {
        return true;
      }
    };
  } else {
    return new ClozeCard(text, cloze);
  }
};

module.exports = ClozeCard;
