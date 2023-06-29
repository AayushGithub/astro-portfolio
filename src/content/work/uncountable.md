---
title: Uncountable Inc. Data Dashboard
publishDate: 2022-09-15 00:00:00
img: /assets/stock-1.jpg
img_alt: Uncountable Inc. Logo
description: |
  Submission for the take home assignment for Aayush Gandhi for Uncountable
tags:
  - Data Analytics
  - Chemical Computation
  - Python
link: https://github.com/AayushGithub/uncountable-dashboard
---
### This is the submission for the take home assignment for Aayush Gandhi

The dataset is stored in **Uncountable Front End Dataset.json**, labelled as data.json internally. The dataset is a json dictionary with the outer keys being the name of the experiment, and containing information of their date. For each experiment there are two dictionaries “inputs” and “outputs” which have the actual data for each experiment.

The dashboard is built using Dash, a Python framework for building analytical web applications. The dashboard is hosted on Heroku, and the code can be made available.

The dashboard has four pages, the first page is the home page, which contains the information about the dashboard. The second page is the explore page, which allows uses to see the variance or 1 or more variables with time, with the ability to see local maximums, minimums, and averages for days with several experiment sets. The third page is the relationships page, which allows the user to select an input and output, and see the relationship between the two variables. The fourth page is the time/experiment query page, which allows the user to select a specific set of values, and see the relationship between them in a tabular format.