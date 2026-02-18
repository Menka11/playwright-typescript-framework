# HerokuApp - Playwright TypeScript Automation

A comprehensive TypeScript automation framework using Playwright to interact with and test various HTML controls and elements provided in the Heroku app.

## Overview

This project demonstrates automated testing and interaction with different UI controls commonly found in web applications. It leverages the power of Playwright for reliable browser automation and end-to-end testing.

## Features

- **Multiple Control Types**: Handles buttons, input fields, dropdowns, checkboxes, radio buttons, and more
- **Type-Safe Testing**: Built with TypeScript for enhanced type safety and better IDE support
- **Page Object Model**: Organized using the Page Object Model pattern for maintainability
- **Cross-Browser Support**: Run tests across Chromium, Firefox, and WebKit browsers
- **Screenshots & Videos**: Automatic capture of test artifacts for debugging
- **Detailed Reporting**: Comprehensive test reports with execution details

## Tech Stack

- **Playwright**: Modern browser automation framework
- **TypeScript**: Strongly-typed JavaScript for reliability
- **Node.js**: JavaScript runtime environment
- **npm**: Package management

## Project Structure
HerokuApp/
├── pages/ # Page Object Models
│ ├── basePage.ts # Base page class with common utilities
│ ├── homePage.ts # Home page interactions
│ └── ... # Additional page objects
├── tests/ # Test files
│ ├── controlTests.ts # Tests for various controls
│ └── ... # Additional test suites
├── utils/ # Utility functions
│ ├── helpers.ts # Helper functions
│ └── config.ts # Configuration settings
├── package.json # Project dependencies
├── tsconfig.json # TypeScript configuration
├── playwright.config.ts # Playwright configuration
└── README.md # This file


Supported Controls
This automation framework handles the following HTML controls:

Input Fields: Text input, email, password, number fields
Buttons: Click actions, button state validation
Dropdowns: Selection, option validation
Checkboxes: Check/uncheck operations, state verification
Radio Buttons: Selection and state validation
Text Areas: Multi-line text input
Links: Navigation and link verification
Forms: Form submission and validation
Tables: Data extraction and row/column operations
Alerts: Dialog handling and dismissal

Last Updated: February 2026