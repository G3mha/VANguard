# VANguard - Firefox Web Security Extension

🇧🇷 Version in Portuguese: [click here](./README-pt_BR.md)

**Author**: Enricco Gemha  

## How to run the project

Navigate to the `build/firefox-mv2-prod` folder, where you will find a `manifest.json` file. In Firefox, go to the search bar and type `about:debugging#/runtime/this-firefox`. Over there you will see a button `Load temporary extension`, click on it, and select the aforementioned `manifest.json`. The extension is now loaded and you can access it via the extension bar.

## Overview

VANguard is a powerful Firefox extension designed to enhance user privacy and security during web browsing. It provides real-time insights into potentially harmful activities and privacy breaches. By monitoring and displaying various web activities, VANguard aims to empower users with the knowledge and tools to protect their online presence.

## Features

- **Domain Monitoring**: Tracks and displays all connections to third-party domains to help users see where their data might be going.

- **Cookie Management**: Identifies and categorizes cookies injected during page loading, differentiating between first-party and third-party cookies, as well as session versus persistent cookies.

- **Local Storage Detection**: Detects and reports HTML5 local storage use on the client's device, offering insights into data persistence.

- **Browser Hijacking Protection**: Monitors potential threats of browser hijacking and hooks, alerting users to unauthorized modifications.

- **Canvas Fingerprint Detection**: Detects the use of Canvas fingerprinting techniques used by websites to track users uniquely.

- **Privacy Scoring**: Implements a scoring system that evaluates how well a webpage respects user privacy based on predefined criteria.

## Objective

Our goal is to create an indispensable tool for everyday web users and privacy enthusiasts. VANguard alerts users to intrusive behaviors and potential security threats, fostering a safer browsing experience.

## Installation

Detailed instructions on how to install and configure VANguard will be provided here.

## Contributing

We welcome contributions from the community! Please read our contributing guidelines for information on how to submit pull requests, report bugs, or suggest new features.

## License

This project is licensed under *Affero GNU Public License* - see the LICENSE file for details.

## Acknowledgements

Thanks to Rodolfo Avelino and Joao Vieira, that proposed this project during the course of Hacker Technologies at Insper Learning Institution.
