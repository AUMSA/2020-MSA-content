# AI and Machine Learning

# Introduction

Welcome to the MSA 2019 module on AI and Machine Learning. This module hopes to teach you the fundamental ideas behind Machine Learning and give you a picture of what it looks like to use Machine Learning and why it's useful.
We'll be leveraging Python along with some of its powerful libraries into order to do our analysis on the dataset in Jupyter Notebooks run on Azure Notebooks. These powerful libraries which Python users have access to is one of the reasons that Python has become the dominant language for doing data analysis with machine learning.


### In this lesson, you'll learn how to:

- create an Azure Notebook
- find data to analyse
- wrangle data to prepare it for machine learning
- analyse it to get a gist of what's going on
- run a machine learning model on the data and use the model to make predictions

# Extra Resources

To help you along the way, here are some handy resources you can go to for extra info:

- The MS learn video on Machine Learning is a good place to start. It'll give you a basic understanding of what Machine Learning is so you can understand the concepts discussed in this video a little better. We recommend reading through it beforehand. https://docs.microsoft.com/en-gb/learn/paths/intro-to-ml-with-python/
- General Data Analysis information: https://github.com/wesm/pydata-book
- This Pandas cheat sheet is good to have by: https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf

# So what *is* Machine Learning anyway?

Machine Learning is a *very* broad topic, but usually the goal is the same. It's easier to see its use with an example.

Suppose I showed you two cars and told you that one weighed 1000 kg and had a fuel efficiency of 40 mpg, and the other weighed 3000 kg and had a fuel efficiency of 20 mpg. Then suppose I brought along another car that weighed 2000 kg. Would you be able to guess its fuel efficiency? I'll bet you can: it's 30 mpg, right in between the other two values just like the weight.

What we did just there was a very basic form of Machine Learning. We looked at the pattern of the data and saw that an increase in weight meant a decrease in efficiency. Using this observation we could predict what another car's efficiency was, just knowing its weight.

This is specifically what's known as a type of Supervised Learning. With Supervised Learning, we have an input data set and want an output data set, and we know what the outputs are when we're actually performing the learning. There are other types of Machine Learning, such as Unsupervised Learning or Reinforcement Learning. Unfortunately, they go beyond the scope of this lesson but it's good to know that they exist.

## Artificial Intelligence vs Machine Learning vs Deep Learning

You may have wondered what the difference between these three terms is. Well the truth is that Machine Learning is a subset of AI, and Deep Learning is a subset of Machine Learning.

AI is a very general term with no real formal definition. It really refers to any use of machines to mimic intelligence or human behaviour.

Machine Learning uses statistical models and algorithms to learn from data and uses the results to produce valuable insights, make predictions and take actions.

Deep Learning goes even further and uses artificial neural networks to analyse even more complex data. They have recently had a lot of success with looking at images and language.

## Linear Regression

In essence, you can think of supervised Machine Learning as trying to find a useful mathematical model that fits a set of data. There are input variables which we collect from the real world, and output variables which we're interested in predicting. In this lesson, we'll be looking at a specific kind of model called linear regression.

You should be familiar with the equation for a line: y = mx + c. x and y are the two variables being plotted, m is the gradient and c is the intercept. If you think back to the car example. We're wanting to find the fuel efficiency based on weight. So we might make fuel efficiency the y-axis and weight the x-axis. Now in order to predict the fuel efficiencies of other cars we'd like a nice function that describes the relationship between the two variables. Assuming the relationship is linear, we just need to find values for m and c to get a line of best fit - then we'll have our function. The Machine Learning you'll see in this lesson will do exactly that.

# Let's get started!

We're going to be doing all our work in this tutorial in Azure Notebooks. Azure Notebooks is a cloud-based version of Jupyter Notebooks, which "allows you to create and share documents that contain live code, equations, visualizations and explanatory text". It is widely used for sharing statistical studies, Machine Learning work etc.

## Setting up Azure Notebooks

First thing's first, go to notebooks.azure.com in your browser. Once you're there, click sign in. You can use your uni email address here even if you haven't logged into Azure or Microsoft with it before.
![alt text](https://raw.githubusercontent.com/NZMSA/2019-Phase-1/master/AI%20and%20Machine%20learning/Screenshots/AzureFrontPage.png "Front page of Azure Notebooks. Click sign in.")
![alt text](https://raw.githubusercontent.com/NZMSA/2019-Phase-1/master/AI%20and%20Machine%20learning/Screenshots/SignIn.png "Enter your uni email address")
If it's your first time signing in to Azure Notebooks, you'll need to create a userID. Make it whatever you want.
![alt text](https://raw.githubusercontent.com/NZMSA/2019-Phase-1/master/AI%20and%20Machine%20learning/Screenshots/CreateUserID.png "Put whatever you want for your userID")
Now let's create our first project and call it auto-mpg. Keep the notebook you submit public so that the markers can access your notebook using the link.
![alt text](https://raw.githubusercontent.com/NZMSA/2019-Phase-1/master/AI%20and%20Machine%20learning/Screenshots/ClickCreateProj.png "Click on 'create project'")
![alt text](https://raw.githubusercontent.com/NZMSA/2019-Phase-1/master/AI%20and%20Machine%20learning/Screenshots/CreateProject.png "Call the project auto-mpg and keep it public")


Create a notebook and call it auto-mpg. Choose Python 3.6.
![alt text](https://raw.githubusercontent.com/NZMSA/2019-Phase-1/master/AI%20and%20Machine%20learning/Screenshots/ClickAddNotebook.png "Hover over the plus and then click on Notebook")
![alt text](https://raw.githubusercontent.com/NZMSA/2019-Phase-1/master/AI%20and%20Machine%20learning/Screenshots/CreateNotebook.png "Type the notebook name, select Python 3.6")
# Retrieving data, analysing it, and performing linear regression

Now you've gotten your Azure Notebook ready, we can look for some data to analyse. We have written comments into [the notebook that you saw on the video](https://notebooks.azure.com/rivindu/projects/auto-mpg/html/auto-mpg.ipynb) so that you can refer back to it for the rest of the tutorial.

# Assignment

For your assignment, you will need to perform a similar analysis on another dataset like the one in the video / the notebook linked above.
Complete the following checklist:

- Complete the "intro-to-ml-with-python" exercises on the Microsoft Learn Platform https://docs.microsoft.com/en-gb/learn/paths/intro-to-ml-with-python/
- Create an Azure notebook (here: https://notebooks.azure.com/)
- Find another dataset (not the one used in this video) [There are some good ones here: https://archive.ics.uci.edu/ml/datasets.php]
- Clean it (remove bad data)
- Analyse it (plot histograms and scatter plots to see what the correlations are like)
- Run a machine learning model on the data
(e.g. Linear Regression, Random Forest, etc.)
- Add comments explaining why you performed each step and add comments about any notable observation you make.

You will need to submit a link to your Azure Notebook (make sure it's set to public) to us for marking.
