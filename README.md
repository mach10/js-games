###JS-GAMES
A small repo holding some problems to be solved with javascript

All commands to be run from within the root directory

Run `npm install` to install Jest

We're trying to do TTD here, so pay attention to how the candidate communicates while doing the test
Make a branch named after the candidate first, and pushed back to that branch after. 

## Roman Numerals
Convert decimal numbers into their roman equivalents
#### testing
```bash
npm run test-roman
```
There are tests already written. Hide all but the first. Run it (see above). It will fail. Ask the candidate to 
fix it in the easiest way possible. 
Once the test passes, make the next test visible. Run the tests. One will pass, one will fail.  
Keep going exposing one more test
each iteration, running all the tests before a solution (so at least one test fails)
Ignore the numbers 4, 9, 40 etc
### too easy?
Introduce the numbers 4, 9, 40 etc 

## divisor
Write a function which will find all such numbers which are divisible by 7 but are not a multiple of 5, 
between 2000 and 3200 (both included). 
The numbers obtained should be printed in a comma-separated sequence on a single line.
#### running
```bash
npm run run-divisor
```
This is to be run ideally from your IDE. No test as such. Just view the output and check some of the 
values output on the console. One of the things to check is that the candidate read the instructions correctly. 
```bash
node divisor/divisor.js
```
### too easy?
Get the candidate to accept any range, sanity check the range first 
Get the candidate to accept any numbers and divisors, multiples of etc

## factorial
Write a function that produces the factorial of any given number.  
```bash
npm run test-factorial
```
One solution should fix all tests but you can introduce a test at a time as in the roman numeral's example

## fibonacci
The classic 
```bash
npm run test-fibonacci
```
Introduce the tests one at a time

## Noughts And Crosses
```bash
npm run test-xo
```
We work for a company that is building a tic-tac-toe game. There are several other teams working on various parts of the product: one team is building the AI, another is creating the user interface, yet another is building a system that handles the gameplay mechanics, and so on. 

We need you to build a system that will evaluate a game board and determine if there is a winner or if there is no winner. You will specify how the data should be given to the system you create. The other teams will conform to whatever API you devise. For output, the other teams expect the strings: “X wins”, “O wins”, or “No winner”.

Assume we’re only caring about three-by-three boards. You don’t have to worry about validating the board. It’s entirely possible there’s a version of the game that handicaps one player by giving extra turns or squares. You only have to determine whether a winner is present.

You should assume your code is going to be deployed to production and at some later date someone will have to maintain that code. So have empathy for that future engineer. That someone could be you.

For this project you can use any programming language you wish. You can access any reference material online or locally. Feel free to make notes on paper, if you like. Finally, this is meant to be collaborative, and I’m your product manager. You can ask me any questions, and while we’re working, I may ask you questions to clarify decisions you’ve made. 
### too easy?
Modify the code to handle an arbitrary-size square grid.
If the candidate used a “brute-force” method of checking for wins, ask them how to do it without brute-forcing.
If the candidate is very comfortable and has completed the exercise, consider asking them to also return a “Draw” response if there is no winner and there are no winning moves remaining for either player.
Did they write tests? If not, suggest they give it a try.    
