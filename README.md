# iValidate README

## Overview

**iValidate** is a web application designed to validate email addresses using an external email validation API. The application is built with HTML, CSS, and JavaScript, providing a user-friendly interface for users to input their email addresses and receive validation results.

## Features

- **Responsive Design**: The application is designed to be responsive, ensuring a seamless experience across different devices and screen sizes.
- **Email Validation**: Utilizes an email validator API to check the validity of the provided email address.
- **Real-time Results**: Displays validation results instantly after submission.
- **User-friendly Interface**: Simple and intuitive design for ease of use.

## Technologies Used

- **HTML**: For structuring the web pages.
- **CSS**: For styling the application and ensuring a responsive design.
- **JavaScript**: For handling form submissions, making API requests, and displaying results.
- **Email Validator API**: To check the validity of email addresses.

## Preview:
https://github.com/VinayMalyala/iValidate/assets/111955986/914df3c6-3383-485e-936b-d9176f874600

## Getting Started

### Prerequisites

- A modern web browser.
- Internet connection for API access.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/iValidate.git
    ```
2. Navigate to the project directory:
    ```sh
    cd iValidate
    ```
3. Open `index.html` in your web browser to start the application.

## Usage

1. **Home Page**: The landing page contains a form where users can enter their email address for validation.
2. **Email Input**: Users enter their email address in the provided text input field.
3. **Submit**: Upon clicking the submit button, the application sends a request to the email validator API.
4. **Results Display**: The results are displayed on the same page under the "Your Results" section.

## Code Structure

- **index.html**: The main HTML file containing the structure of the web page.
- **style.css**: The CSS file for styling the application.
- **script.js**: The JavaScript file handling form submissions and API interactions.

## API Integration

The application uses the [Email Validation API](https://api.emailvalidation.io/) to validate email addresses. Ensure you have a valid API key to use this service. The API key is included in the JavaScript file for making requests.

## Customization

You can customize the application by modifying the HTML, CSS, and JavaScript files according to your needs. Ensure to update the API key in the `script.js` file if you have a different key.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.

---

Feel free to modify this README as per your specific needs or preferences.
