# startup

## Elevator Pitch
How often do you create new passwords? We sign up for things every day, and each new login \*should\* add a new password to the list of what we need to remember. It's often quite a challenge to come up with a new password for each account, and when we do, we can never remember it! Some sites will generate passwords for us, but they're just a blurb of random characters and symbols that we could never remember on our own. That's why my website, *PassPhrase*, will help you develop safe, secure passwords *that you can remember!* Your account will take centuries to hack--and your password never forgotten.

## Key Features
- Password Generator: Generates secure and memorable passpharases
- Toggle for numbers or capitalization
- Password strength meter
- Memorization tips: Rotates through a series of memorization tips that display with each new password that is generated
- Secure Login
- Stores and displays the number of passwords you have generated, and displays a leaderboard of all users

## Design
![20240914_185113](https://github.com/user-attachments/assets/b2fb8451-f767-4341-b859-74e89d6da22e)

## Technologies
I am going to use the required technologies in the following ways.

HTML - Uses correct HTML structure for application. Three HTML pages, one for login, one for password generation, and one for the leaderboard.
CSS - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
React - Provides login, choice display, applying votes, display other users votes, and use of React for routing and components.
Service - Backend service with endpoints for:
  - Login
  - Measuring password strength
  - Retreiving Leaderboard stats
DB/Login - Store users and # of passwords generated in database. Register and login users. Credentials securely stored in database. Can't vote unless authenticated.
WebSocket - As each user votes, their votes are broadcast to all other users.

# HTML Deliverable
For this deliverable I built out the structure of my application using HTML.

- [x] HTML pages - Four HTML pages that represent login, password generation, Leaderboard, and new User Creation.
- [x] Links - The login page automatically links to the Home(password generation) page. The login page also has a link to the New User page, and all pages hav navigation to Home, Leaderboard, and Login
- [x] Buttons - Added (nonfunctional XD) buttons for user interactions like passPhrase generation, login, and new user creation
- [x] Text - Each of the voting choices is represented by a textual description.
- [x] DB - Input box and submit button for login and user creation. The Leaderboard data and login info will be stored in the database
- [x] WebSocket - Leaderboard will dynamically update as users generate/test passwords


# CSS Deliverable
For this deliverable I properly styled the application into its final appearance.

- [x] Header, footer, and main content body styled with bootstrap and flexed using CSS
- [x] Navigation elements - added highlighting for the active page and made a horizontal menu
- [x] Responsive to window resizing for most screen sizes
- [x] Application elements - Used good contrast and whitespace, styled leaderboard table to prep for websocket
- [x] Home Page - added cards to hold the main site features
- [x] Application text content - Consistent fonts using bootstrap
- [x] Application images - Added and formatted image of a trophy to the leaderboard.


## NOTE: All submissions beginning with the Service deliverable are being deployed over ungraded deliverables. I have tried to be as detailed as I can here in my README to ensure easier grading.

# React Deliverable

For this deliverable I ported over my multi-page website into a component-driven single-page React website. I did this by using JavaScript to inject React coponents into my index.html page, which starts with only a "root" div element. The JavaScript injects my main App page, which contains my header, footer, and a React Router to handle navigation between the different main components. I then added the following functionality:

  - [x] Password strength bar updates dynamically (using React hooks) as you type with password strength, time to crack, and feedback
  - [x] Generate password button loads a passphrase with random words (mock up pulling from a local file, will be an api call in the future) and allows the user to change word delimiter and capitalization
  - [x] Leaderboard remains the same, just a mockup until I add websocket
  - [x] Changed the login and newUser `form` elements to React components that use the `onSubmit` listener instead of an `action` tag to allow me to control the login info and navigation after form submission.


# Startup Service Deliverable

