# Setting up Azure Notebook

## Lesson Outcome
After completing this module, you will be able to:
1. Create an Azure Notebook 
2. Find data to analyze 
3. Wrangle data to prepare it for machine learning 
4. Analyze it to get a gist of what's going on 
5. Run a machine learning model on the data and use the model to make predictions 
6. Work with Azure Notebooks, Python, Kera 

## Introduction to Machine Learning
### Basic Concepts 
Autonomous and adaptive. Who would have ever imagined that those two adjectives would describe computers? However, now, especially through the advent of Machine Learning, Artificial Intelligence is more than ever close to be able to understand, analyse or even predict the workings of our world.  
OK those are broad statements and you might have heard about this a thousand times. In this bootcamp, you will really get into what is Machine Learning, understand how it works, and even get a sense of how to build and improve such algorithms. 
#### What exactly is Machine Learning?
Let’s say you want to know the price of a 75m2 apartment in Sydney. You already know that a 50m2 apartment is worth $500,000 and that a 100m2 apartment is worth $1,000,000 by looking at some ads on the net. You can easily extract the price of 1m2 in Sydney and conclude that your budget must be around $750,000. 
This example illustrates the principle of linear regression which is the basis of Machine Learning concept. By using a set of data, the computer learns about the environment. It extrapolates and comes out with a model that fits the pattern and is robust enough to predict valid outputs. This is what is called Supervised Learning. 
There are other types of Machine Learning: 
1. _Unsupervised Learning_: the algorithm isn’t given instructions about the characteristics of the data i.e. it has to find out by itself what makes an apartment worth its price. 
2. _Reinforcement Learning_: the algorithm isn’t given any inputs or outputs but has to measure the impacts of its actions on a certain environment through a reward system 

We will focus today on the Supervised Learning. 

### Artificial Intelligence? Machine Learning? Deep Learning?  
- **Artificial Intelligence (AI)** is a broad topic intending to provide machines with human skills. 
- **Machine Learning (ML)** is a tool to reach the ultimate goals of AI, using statistical models and algorithms. 
- **Deep Learning (DL)** is a way of effectively operate ML based on the natural model of neuronal networks. 

### And why learn ML? 
Machine Learning is all about finding ways to teach computers to extrapolate and find trends in a dataset to facilitate decision making, image recognition, or even translations… It is the basis of state-of-the-art technologies such as autonomous vehicles, but it is also implemented in anti-fraud algorithms or personalization interfaces such as Facebook timelines. 
Already essential to a lot of our technologies, Machine Learning is however still a research topic.	Indeed, there is a lot to improve to perfectly mimic our brain! So YES, it is and will definitely be a significant source of employment and a critical tool for all the industries in the future. 

## Testing a final ML model
The machine learning model that we use to make predictions on new data is called the final model. That is, given new examples of input data, you want to use the model to predict the expected output. This may be a classification (assign a label) or a regression (a real value). For example, whether the photo is a picture of a dog or a cat, or the estimated number of sales for tomorrow. The goal of the machine learning project is to arrive at a final model that performs the best, where “best” is defined by: 

**Data**: the historical data that you have available. 
**Time**: the time you have to spend on the project. 
**Procedure**: the data preparation steps, algorithm or algorithms, and the chosen algorithm configurations. 

In your project, you gather the data, spend the time you have, and discover the data preparation procedures, algorithm to use, and how to configure it. The final model is the pinnacle of this process, the end you seek in order to start actually making predictions. 

Now, the question is why do we use train and test sets? 

Creating a train and test split of your dataset is one method to quickly evaluate the performance of an algorithm on your problem. The training dataset is used to prepare a model, to train it. We pretend the test dataset is new data where the output values are withheld from the algorithm. We gather predictions from the trained model on the inputs from the test dataset and compare them to the withheld output values of the test set. Comparing the predictions and withheld outputs on the test dataset allows us to compute a performance measure for the model on the test dataset. This is an estimate of the skill of the algorithm trained on the problem when making predictions on unseen data. 

Whenever working on a data set to predict or classify a problem, we tend to find accuracy by implementing a design model on first train set, then on test set. If the accuracy is satisfactory, we tend to increase accuracy of data-sets prediction either by increasing or decreasing data feature or features selection or applying feature engineering in our machine learning model. But sometime our model maybe giving poor result. The poor performance of our model maybe because, the model is too simple to describe the target, or may be model is too complex to express the target. Hence come the idea of **overlifting** and **underlifting**.

![img01](https://github.com/AUMSA/2020-MSA-content/blob/master/AI%20%26%20Advanced%20Analytics/Setting%20up%20Azure%20Notebook/img/img01.png)

By looking at the graph on the left side we can predict that the line does not cover all the points shown in the graph. Such model tend to cause underfitting of data .It also called High Bias. Where as the graph on right side, shows the predicted line covers all the points in graph. In such condition you can also think that it’s a good graph which cover all the points. But that’s not actually true, the predicted line into the graph covers all points which are noise and outlier. Such model are also responsible to predict poor result due to its complexity. It is also called High Variance. Now, Looking at the middle graph it shows a pretty good predicted line. It covers majority of the point in graph and also maintains the balance between bias and variance. 

In machine learning, we predict and classify our data in more generalized way. So in order to solve the problem of our model that is overfitting and underfitting we have to generalize our model. Statistical speaking how well our model fit to data set such that it gives proper accurate results as expected. 

## Setting up Azure notebook: 
1. First thing's first, go to notebooks.azure.com in your browser. Once you're there, click sign in. You can use your university email address. 

![img02](https://github.com/AUMSA/2020-MSA-content/blob/master/AI%20%26%20Advanced%20Analytics/Setting%20up%20Azure%20Notebook/img/img02.png)


2. Click on try it now 

![img03](https://github.com/AUMSA/2020-MSA-content/blob/master/AI%20%26%20Advanced%20Analytics/Setting%20up%20Azure%20Notebook/img/img03.png)


3. Write down your university email here and press enter. It will redirect you to your university login page. 

![img04](https://github.com/AUMSA/2020-MSA-content/blob/master/AI%20%26%20Advanced%20Analytics/Setting%20up%20Azure%20Notebook/img/img04.png)


4. After login in click on my projects 

![img05](https://github.com/AUMSA/2020-MSA-content/blob/master/AI%20%26%20Advanced%20Analytics/Setting%20up%20Azure%20Notebook/img/img05.png)


5. Then click on new project from top right. Name your project and make sure you tick the public field. 

![img06](https://github.com/AUMSA/2020-MSA-content/blob/master/AI%20%26%20Advanced%20Analytics/Setting%20up%20Azure%20Notebook/img/img06.png)


6. You will see a new README.md file. Now click on New to create a new notebook. 

![img07](https://github.com/AUMSA/2020-MSA-content/blob/master/AI%20%26%20Advanced%20Analytics/Setting%20up%20Azure%20Notebook/img/img07.png)


7. Select Python 3.6 as your language 

![img08](https://github.com/AUMSA/2020-MSA-content/blob/master/AI%20%26%20Advanced%20Analytics/Setting%20up%20Azure%20Notebook/img/img08.png)


8. You will see your new notebook as a .ipynb file 

![img09](https://github.com/AUMSA/2020-MSA-content/blob/master/AI%20%26%20Advanced%20Analytics/Setting%20up%20Azure%20Notebook/img/img09.png)


## Assignment
For your assignment, you will need to perform a similar analysis on another dataset like the one in the video / the notebook linked above. Complete the following checklist: 
 
- Complete the "intro-to-ml-with-python" exercises on the [Microsoft Learn Platform](https://docs.microsoft.com/en-gb/learn/paths/intro-to-ml-with-python/)
- Create an Azure notebook [here](https://notebooks.azure.com/) 
- Find another dataset (not the one used in this video) [There are some good ones here]( https://archive.ics.uci.edu/ml/datasets.php)
- Clean it (remove bad data) 
- Analyze it (plot histograms and scatter plots to see what the correlations are like) 
- Run a machine learning model on the data (e.g. Linear Regression, Random Forest, etc.) 
- Add comments explaining why you performed each step and add comments about any notable observation you make. 
- Finally! Submit it to us. You will need to submit a link to your Azure Notebook (make sure it's set to public) to us for marking. 
