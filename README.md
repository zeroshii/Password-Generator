# Password-Generator

This is a password generator application that asks the user for a password length and to choose from the following character types: uppercase letters, lowercase letters, numbers, and symbols. The purpose of the application is to randomly generate a strong password that meets certain criteria in order to provide greater security for sensitive data.

The Link to the deployed application:
```
https://zeroshii.github.io/Password-Generator/
```

## Requirements

The user will be given a series of prompts for password criteria. The password length must be at least 8 characters and no more than 128 characters in length. The user must select at least one character type. If the inputs are invalid, the user will be alerted with an error message and be asked to try again with the correct input. When all prompts are answered and validated, a password matching the user's selected criteria will be generated which is then written to the page.

## Process

A variable `passwordLen` is first created to store user input for password length. Then the variable `validLen` is created to parse passwordLen into an integer so then we can check it for validation. If the user input is invalid, it will return the alert message. 

Next, the following `hasUpper`, `hasLower`,`hasNum`,`hasSymbols`variables were created for a series of confirm functions. For each true variable, their respective string of character type is appended to the array `charSet`. Afterwards, the `charSet.join('')` function will merge all charSet indexes into one string.
