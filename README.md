# Checkout the backend
https://github.com/varitantarora/heistquest


# HeistQuest

## Description

In this game, you'll be taking on the role of a member of the Professor's team, attempting to pull off the biggest heist in history. Your mission is to break into the Royal Mint of Spain and print billions of euros while avoiding detection from the authorities.

## Game Features

- 5 levels of game
- Soft skills accessed:
  - problem solving
  -focus
  -eye for detail
  -patience
  -reading skills
- Dead ends: 
  - if a user submits two wrong submissions at any level, then it is a deadend.
- User leaderboard:
  - user can see the score of all the participants and can compare them.
- Admin dashboard:
  - admin can view the time taken and score for every puzzle for every user and can analyze the data.
- Authentication features:
  - user sign in
  - user sign up
  - admin login
- Authorization: 
  - play game (only logged in user can play)
  - leaderboard (only logges in user can see), 
  - admin panel (admin only)

#Detailed view of the game
 The project is based on the central theme of money heist and has been developed as a way to test soft skills.
 
 ## Gameplay Rules

- You will have to solve a series of puzzles across 5 levels to progress through the game.
- If you enter the wrong answer for a particular question two times, you will encounter a dead end, and the game will be over.
- Each successfully solved puzzle earns you a score of 100 points.
- The game is won when you successfully complete all 5 levels of puzzles.

## Stage 1
  The Professor's Code: Participants receive a coded message from 'The Professor' and must decode it to get to the next level. Hint : QGL -> RIO Coded message: QYNQZF\
  **Answer** :- RAQUEL \
  **Solution** :- Shift first character by 1, second character by 2 and so on.....

## Stage 2
  The heist crew is planning to rob a bank that has three security checkpoints. Each checkpoint has a security code consisting of four digits. The crew knows that the first digit of each security code can be any number from 1 to 5 (inclusive), the second digit can be any even number from 2 to 8 (inclusive), the third digit can be any prime number from 2 to 7 (inclusive), and the fourth digit can be any odd number from 1 to 9 (inclusive). However, they don't know the exact combinations. How many different possible security codes do they need to try in order to cover all the possibilities?\

  **Answer** :- 400 \
  **Solution** :- permutation problem 5*4*4*5

## Stage 3
  In the midst of the Money Heist, the crew managed to secure a colossal haul of 158 million euros, symbolizing the ultimate prize they sought. With the crew comprising 13 members, each with their unique set of skills and ambitions, they faced the daunting task of dividing the fortune amongst themselves. Ensuring that no two crew members held the same amount, and with a minimum allocation of 5 million euros per person, they strived to maximize the contrast between the highest and lowest holders. Your mission is to determine the exhilarating maximum disparity in the amount of money between the crew member who claimed the lion's share and the crew member who secured the least, depicting the intense competition for wealth within the Money Heist's enigmatic realm.\

  **Answer** :- 12 \
  **Solution** :- distribution 5 6 7 8 9 10 11 12 13 14 15 16 17


## Stage 4
  During the intricate planning stage of the Money Heist, the crew devises a secret code using the letters of the word 'HEISTQUEST' However, they have a specific condition that all the alphabets before the letter H (from A to G) and those after the letter H (from I to Z) must always appear together as separate blocks in the code. How many different ways can they arrange the letters of the word 'HEISTQUEST' to fulfill this requirement, considering the unique constraints imposed by the Money Heist crew's code-making strategy?\

  **Answer** :- 3240 \
  **Solution** :- permutation (3!/2!)*(1!)*(6!/(2!*2!))*3!

## Stage 5
  The Professor's meticulously crafted plan for the ultimate heist involved a series of intricate steps, with each member of his carefully selected crew assigned a crucial role. Berlin, the charismatic leader, orchestrated the synchronized actions of the team with military precision. Nairobi, the brilliant forger, skillfully replicated intricate documents, ensuring flawless authenticity. Tokyo, with her fearless nature and expert marksmanship, provided cover during critical moments, keeping the crew hidden from prying eyes. Rio, the tech prodigy, utilized his expertise to manipulate security systems, gaining access to restricted areas. Moscow, the experienced veteran, demonstrated unmatched strength and agility, overcoming physical obstacles with ease. Helsinki and Oslo, the formidable brothers, acted as the crew's guardians, ensuring their safety during daring escapes. And finally, Denver, the quick-witted strategist, analyzed every move, adjusting plans on the fly to outsmart security measures. Now, the question is, who was assigned the task of cracking the bank's impregnable safe, which held the sought-after treasure the crew desired? \
  **Answer** :- RIO \
  **Solution** :- Rio is the one who can crack the bank's impregnable safe.

## Tech stack:
- Frontend
    - React.Js
    - TailwindCSS
    - JavaScript
- Backend
    - Express.js
    - NodeJS
- Database 
    - MySQL
- Hosting
    - Vercel (Frontend and Backend)
    - Planetspace(Database)
- Authentication using Json Web Tokens


# PROJECT SETUP

## Install Node

### Node installation on Windows
Just go to the official Node.js website (https://nodejs.org/) and download the installer. Make sure to have Git available in your PATH, as npm might need it. You can find Git here: [Git](https://git-scm.com/).

### Node installation on Ubuntu
You can easily install Node.js and npm with the apt package manager. Simply run the following commands in your terminal:
  ```bash
  $ sudo apt install nodejs
  $ sudo apt install npm 
  ```

## Install Backend
  ```bash
  $ git clone https://github.com/varitantarora/heistquest.git
  $ npm install
  $ npm start
  ```
  
## Install Frontend
  ```bash
  $ git clone https://github.com/varitantarora/heistquest_frontend.git
  $ npm install
  $ npm start
  ```
## Database
  Used MySQL database on planetscale for creating a online database server and link that with vercel .
