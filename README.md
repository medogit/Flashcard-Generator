# Flashcard-Generator

This provides the backend for a basic flashcard application. The backend allows users to create two types of flashcards.

## Types of Flashcards
1. Basic flashcards, which have a front ("Who was the first president of the United States?"), and a back ("George Washington").

2. Cloze-Deleted flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.")

## Commands

1. Cloze "main string" "cloze phrase"  
  This will create a cloze-deletion flashcard. Built in test to ensure the provided cloze phrase is contained within the main string. This is not case sensitive.

2. Basic "front of the card" "back of the card"  
  This will create a basic flashcard.

3. Read  
  This will read the user created flashcards from a local log.txt file that is created upon the first flashcard.

4. No command  
  If no command is given, an example of each type of flashcard is given, along with their corresponding general command type.
