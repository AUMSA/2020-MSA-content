# Setting Up Azure Notebook

In this tutorial, you complete the end-to-end steps to get started with the Azure Machine Learning Python SDK running in Jupyter notebooks. This tutorial will cover Python environment setup and configuration, as well as creating a workspace to manage your experiments and machine learning models.

In this tutorial, you:
1. Create an Azure Machine Learning Workspace to use in the project.
2. Create a cloud-based compute instance with Azure Machine Learning Python SDK installed and pre-configured.

## Create a workspace
An Azure Machine Learning workspace is a foundational resource in the cloud that you use to experiment, train, and deploy machine learning models. It ties your Azure subscription and resource group to an easily consumed object in the service.

You create a workspace via the Azure portal, a web-based console for managing your Azure resources.

1. Sign in to [Azure portal](https://portal.azure.com/#home) by using the credentials for your Azure subscription.

![img01](img/img01.png)

2. In the upper-left corner of Azure portal, select + Create a resource.

![img02](img/img02.png)

3. Use the search bar to find Machine Learning and select "Machine Learning".

![img03](img/img03.png)

4. In the Machine Learning pane, select Create to begin.

![img04](img/img04.png)

5. Provide the following information to configure your new workspace. After you are finished configuring the workspace, select **Review ** + **Create**.
> **It can take several minutes to create your workspace in the cloud.**

![img05](img/img05.png)

6. To view the new workspace, select **Go to resource**.

![img06](img/img06.png)


## Run notebook in your workspace

1. Sign in to [Azure Machine Learning studio](https://ml.azure.com/).

2. Select your subscription and the workspace you created.

![img06b](img/img06b.png)

3. Select Notebooks on the left and click on the "create new file".

![img07](img/img07.png)

4. Provide the following information to configure your new file.

![img08](img/img08.png)

5. Click on the "Create new compute".

![img09](img/img09.png)

6. Follow the configuration shown in the picture below.

![img10](img/img10.png)

7. Wait for several minutes to get the new compute ready.

![img11](img/img11.png)

8. Once the compute is ready , click on the "Edit" and "Edit in Jupyter".

![img12](img/img12.png)

9. Then you are ready to use Jupyter notebook in your workspace.

![img13](img/img13.png)