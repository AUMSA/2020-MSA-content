# MNIST demo using Azure Notebook
In this tutorial we will be using Azure Notebook for the MNIST training demonstration.

## SSH Setup
When we are creating our compute on AzureML, we want to enable SSH access, just incase we need it. [Here](https://github.com/beauwilliams/MSA-AUS-2020-AzureML/blob/master/Notes/SSHSetup.md) is the tutorial for setting up SSH access to your compute (Mac/Linux users only, Windows users please refer to this [tutorial](https://docs.microsoft.com/en-gb/azure/virtual-machines/linux/ssh-from-windows)).

## ZSH Users
When running a command such as

`pip install --upgrade azureml-sdk[notebooks,contrib] scikit-image tensorflow tensorboardX --user`

You will get the error

`zsh: no matches found: azureml-sdk[notebooks,contrib]`

This is due to ZSH globbing function. In order to fix it, please refer to this [tutorial](https://github.com/beauwilliams/MSA-AUS-2020-AzureML/blob/master/Notes/Links.md).


Click [here](https://github.com/beauwilliams/MSA-AUS-2020-AzureML/blob/master/Notes/Links.md) for more resources.
