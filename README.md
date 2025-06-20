Project Structure Overview:
index.html: The main landing page with form inputs and options.

script.js: Contains JavaScript for form handling, storing user data in localStorage, and page redirection.

second.html: Displays user data presumably submitted from index.html.

users.html: Displays a table of previously submitted user records.

style.css and styles/table.css: Contain styling for the application UI.

The application seems to simulate a small user data collection and listing system, likely for learning or demo purposes.

Here is a well-structured README.md file for this project:

markdown
Copy
Edit
# LabEval

**LabEval** is a simple frontend project that demonstrates basic web form handling, client-side data storage, and dynamic content rendering using HTML, CSS, and JavaScript. This project is ideal for learning and understanding the basics of web development.

## Features

- Collects user information through a form.
- Stores form data in the browser's `localStorage`.
- Displays submitted data on a separate page.
- Lists all previously submitted records in a table view.

## File Structure

labeval-main/
├── index.html # Main form interface
├── second.html # Displays individual user submission
├── users.html # Table view of all submissions
├── script.js # Core JavaScript logic
├── style.css # General styles
├── styles/
│ └── table.css # Styles for the user table
└── README.md # Project documentation

markdown
Copy
Edit

## How to Use

1. Open `index.html` in a browser.
2. Fill out the form and submit.
3. You will be redirected to `second.html` showing the entered data.
4. View all user entries by opening `users.html`.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Browser `localStorage`

## Use Cases

This project can be used to:
- Understand how data can persist across pages without a backend.
- Learn basic DOM manipulation and event handling.
- Practice working with multiple HTML pages in a single-page web app format.