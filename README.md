# Memory Match

## Goal For This Project

Welcome from Memory Match, an intuitive game that anyone can play.

## Table of Contents

## UX

Memory Match is a minimally styled game created for anyone with a little time on their hands that wants to test their memory skills. Through visiting Memory Match, it was important to create a positive user experience.

### Player Goals

- Play a fun game
- Easy to play
- Clear and intuitive gameplay without instructions
  - Not a lot of buttons or areas to distract and only one main area to click
- Not distracting on the eyes or busy
  - simple colours and shapes
- Visually keeps you intrested
  - sleek design

### User Stories

- Visual icons that arent distracting and easy to tell apart
- visual feedback when choosing cards to be able to tell what is happening
- clear buttons to press so not confused

### Game Creator Goals

- a project that is interesting and requires some thought to code

### Wireframes

- The wireframes were created using [Balsamiq] (http://www.balsamic.com) during the design and planning part of this project.
- [Wireframes](link): A 6 page website.

### Design Choices

- The game is meant to feel neat and mature so as to not feel infantile.

### Fonts

- The goal was an overall cohesive feeling so I decided not to use multiple fonts, choosing the font 'Roboto'.
- I wanted something contemporary but also clean & clear. The font was chosen from [Google Fonts](https://fonts.google.com/) to make sure it worked across browsers/devices.

### Icons

- the cards themselves use icons that should feel familiar. The icons were meant to be similiar enough that the those playing wouldn't find it too easy to remember where each card was.

### Colours

- The colour theme included two main colours that complimented one another. Two complimentary blue colours where used so that there was a link to one another but also enough contrast so that everything didn't blend together.

### Styling

- The cards themselves were given rounded corners so that the game didn't seem too sharp or rigid. The buttons and win message shared the rounded corners to give a unifying feeling.

## Features

- Responsive on all device sizes
- Interactive elements

### Reset Button

- The reset button is a button that stands out so that its easy to find
- The reset button resets the cards on the board in random order and changes all the statistics back to zero.

### Matches Display

- The matches display shows how many pairs the player has found.

### Moves Display

- The moves display shows how many times the player has flipped over any card.

### Hard/Easy Button

### Timer

- With the other stats there is a timer that keeps track of how long it has taken for the player to find all the card.
- the timer starts when the player flips over their first card

### Congratulations Modal

- Once the player has found all the matches a popup shows letting the player know they've won.
- The popup lets the player know they've found all the pairs, how many moves it's taken, and how much time they've taken.
- The popup lets the player choose to close the modal or replay the game.

# Gameboard & Cards

- The gameboard is where the cards are laid out so the player can choose one.
- the grid is set out in rows of 4.

### Features Left to Implement

- An extemely hard version of the game
- high stats which everyone can compare their stats with others.

## Technologies Used

### Languages

- HTML5
  - The base of the code for the overall structure of the site.
- CSS3
  - For the styling of the site
- Javascript

### Libraries, Frameworks & Tools

- [Font Awesome](https://fontawesome.com/)
  - The icons were used for the images for the cards
- [Bootstrap](https://getbootstrap.com/)
  - Was used for added styling and responsiveness of the project
- [Google Fonts](https://fonts.google.com/)
  - Used to import the main font for the styling of the project
- [Github](https://github.com/)
  - Used to store and push the code
- [Visual Studio Code](https://code.visualstudio.com/)
  - used to code and push the code
- [Google Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
  - Used to debug code and show styling changes before changing the actual code
- [Balsamiq](https://balsamiq.com/)
  - Used for creating the wireframes in the planning stage
- [W3C HTML Validator](https://validator.w3.org/)
  - Used as a HTML validator
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
  - Used as a CSS validator

## Testing

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) & [W3C HTML Validator](https://validator.w3.org/)
  - Were used to validate the CSS & HTML code respectively.
- **As a user, User Story**

### Reset Button

1. Plan
2. Implementation
3. Test
4. Verdict

### Score

1. Plan
2. Implementation
3. Test
4. Verdict

### Moves

1. Plan
2. Implementation
3. Test
4. Verdict

## Bugs

### Bug Cards Not Shuffling after reset

#### Bug

- The cards weren't randomising after the reset button was pushed

#### Fix

- Found that I had put the sorting of the cards outside of the create board function

### Can match same square

#### Bug

- If you click twice on the same square you get a match.

#### Fix

- added an if statement so can't click on same square twice

### Match matched cards

#### Bug

- If you click twice on a pair of cards you've already matched then you can match them again.

#### Fix

- added a non-playable array.

## Deployment

This project has been deployed using GitHub pages and I have used the following process to do so:

### Publishing

-

### Forking

You can fork a project to make a copy without it affecting the main branch with this process:

- Log in to GitHub and find the repository that you wish to fork
- Clicked on the repository and on the top right-hand side you will see three options: 'unwatch' 'star' and 'fork'
- Once the fork button has been clicked, a copy of the repository will be in your Github account

### Cloning

You can clone the repository to your local device following these steps:

- Choose the Github repository that you'd like
- Click the 'code' button at the top right next to 'add file'
- Copy the link that pops up
- Open your terminal and choose the directory you would like the clone to be in
- Type 'git clone' and paste the URL you copied afterwards and then click enter

### Version Control

## Credits

- [Javascript.info](https://javascript.info/task/shuffle)
  - radomising the array for different cards

### Content - Media -Inspiration

I have used the following websites to get info & images for my website.

### Acknowledgements

- Add
