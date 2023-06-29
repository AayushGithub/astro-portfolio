---
title: Differential Equations Portfolio (React)
publishDate: 2020-11-01 00:00:00
img: /assets/diff-eq.jpg
img_alt: Examples of Differential Equations
description: |
  Differential Equations and Applications portfolio with React-based website built using Docusaurus, offering LaTeX editing, Markdown styling, and a user-friendly interface.
tags:
  - Data Analytics
  - JavaScript
  - React
  - Docusaurus
link: https://diffeqportfolio.netlify.app/
---
# Differential Equations and Applications Portfolio

This repository contains the code for my portfolio website created for the Differential Equations and Applications class (AS.110.302) in the Fall semester of 2020.

## Website Overview

The portfolio website serves as a showcase of my work and accomplishments throughout the Differential Equations and Applications class. It provides an enhanced user experience compared to the default tools provided by BlackBoard, offering additional features such as LaTeX editing, Markdown styling, and robust images.

By using Facebook's Docusaurus framework, the website is built with React JS, allowing me to practice my web development skills while creating a valuable resource for showcasing my class work.

## How to Use

To run the portfolio website locally or make any modifications, follow the steps below:

1. Clone this repository to your local machine using the command:
```
https://github.com/AayushGithub/Diff_EQ_Portfolio_Web_App
```
2. Navigate to the cloned directory:
```
cd Diff_EQ_Portfolio_Web_App
```
3. Install the required dependencies using a package manager like npm or yarn:
```
npm install
```
4. Start the development server:
```
npm run start
```

This will start a local development server and open the portfolio website in your default browser.

## Directory Structure

The directory structure of the project is as follows:

- `docs`: Contains the Markdown files representing the portfolio content.
- `src`: Contains the source code and configuration files for the website.
- `static`: Contains static assets like images and other resources.

Feel free to explore and modify the code to suit your needs.

## Contributing

If you would like to contribute to this project, you can fork the repository, make your desired changes, and submit a pull request. Contributions are always welcome!

## Algolia Search Integration

To enhance the search functionality of the portfolio website, I have integrated Algolia search. Algolia is a powerful search engine that provides fast and relevant search results.

The integration allows users to perform searches across all the data on the website, including the content of the portfolio artifacts, titles, and other relevant information. This enables users to quickly find specific content or information they are looking for.

The integration process involved the following steps:

1. Set up an Algolia account: I created an account on the Algolia website and set up a new index specifically for the portfolio website.

2. Configure search parameters: I defined the search parameters such as searchable attributes, custom ranking, and filtering options based on the requirements of the website.

3. Indexing data: I used the Algolia API to index the portfolio content and relevant information. This included parsing and extracting data from the Markdown files and other relevant sources.

4. Implement search UI: I integrated the Algolia search widget into the website's user interface, allowing users to input search queries and display the search results dynamically.

With the Algolia search integration, users can now easily search for specific topics, keywords, or artifacts within the portfolio. The search functionality provides a seamless and efficient way to navigate and locate desired information on the website.

Please note that to use Algolia search, you will need to set up your own Algolia account and configure the integration accordingly.
