---
title: LinearRegressionWebApp
publishDate: 2022-12-15 00:00:00
img: /assets/lin-reg.png
img_alt: Image of Linear Regression Web App
description: |
 Web-based dashboard to demonstrate different Linear Regression techniques, built using Dash, a Python framework for building analytical web applications. 
tags:
  - Python
  - Data Analytics
  - Artificial Intelligence
link: https://github.com/AayushGithub/LinearRegressionWebApp
---
# LinearRegressionWebApp

This is a Linear Regression Application for EN.601.464/664

Current Deployment: https://ai-final-project-fall-22.onrender.com

This Application has multiple pages

## Explore Your Own Dataset

![plot](/assets/ExploreData.JPG)

You may upload a .csv file containing data points. It should be formatted as follows:
    
Each row contain the independent (x) and dependent (y) variable of a data point.
The first column contains the independent variable (x) of data points.
The second contains the dependent variable (y) of data points.
The data set should be of size nx2, where n is the total number of data points.
    
| Independent Variable | Dependent Variable |
|----------------------|--------------------|
| x<sub>1<sub>         | y<sub>1<sub>       |
| x<sub>2<sub>         | y<sub>2<sub>       |
 | ...                  | ...                |
| x<sub>n<sub>         | y<sub>n<sub>       |


This will plot the points and allow you to enter an equation of the line and get the errors of the line compared to the data set.

## Explore Relationships
![plot](/assets/ExploreCustom.JPG)
  Select from a variety of datasets from the dropdown menu

Each dataset is imported from Kaggle.com and contains a variety of data points.
The data is cleaned and formatted to be used in the app.
The data is then used to create a custom linear regression model.
![plot](/assets/CustomGraph.JPG)    

Current Datasets:
    
FIFA 2022 World Cup Data, Avocado Prices Data, World Happiness Report, Boston Housing Data
      
## Experiment With Custom Parameters

![plot](/assets/GradientDescent.JPG)

You may upload a .csv file containing data points. It should be formatted as follows:
    
Each row contain the independent (x) and dependent (y) variable of a data point.
The first column contains the independent variable (x) of data points.
The second contains the dependent variable (y) of data points.
The data set should be of size nx2, where n is the total number of data points.

This will plot your points and will run gradient descent allowing you to change the number of epochs and learning rate.
It also allows you to change the initial guesses for slope and intercept.
