# Git Handbook 

## Table of contents 


## Downloading and setting up  
Git is a free software which you can download to almost any platform. Git is primarily used via the command-line interface, which we can access with our system terminals.
However, we first need to make sure that we have Git installed on our computers.

> You can download Git from here: https://git-scm.com/downloads

After installing it, start your terminal/command prompt and type the following command to verify that Git is ready to be used on your computer. 

```bash
git --version 
```

If you are using a Mac or Linux machine, then you can utilize the default Bash terminal that comes pre-installed on your machine.

If you are using Windows, you can use its built-in Powershell terminal, or the Git Bash terminal which is bundled with the Git installation. For detailed windows Git and Git Bash install instructions, check out this [blog post](https://zarkom.net/blogs/how-to-install-git-and-git-bash-on-windows-9140)

#### Configuring you name & email
In your terminal, run the following commands to identify yourself with Git:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

Replace the values inside the quotes with your name and email address.

## Repositories 

When working with Git, it's important to be familiar with the term **repository**. A Git repository is a container for a project that is tracked by Git.  

We can single out two major types of Git repositories:

- **Local repository** - an isolated repository stored on your own computer, where you can work on the local version of your project.
- **Remote repository** - generally stored outside of your isolated local system, usually on a remote server. It's especially useful when working in teams - this is the place where you can share your project code, see other people's code and integrate it into your local version of the project, and also push your changes to the remote repository.

In this video, we'll only work with local repositories.

## Initializing a repository

To create a new repository and start tracking your project with Git, use your terminal software and navigate to the main folder of your project, then type the following command:

```bash
git init
```

This command will generate a hidden **.git** directory for your project, where Git stores all internal tracking data for the current repository.

## Staging & Commiting 

Committing is the process in which the changes are *'officially'* added to the Git repository.

In Git, we can consider **commits** to be checkpoints, or snapshots of your project at its current state. In other words, we basically save the current version of our code in a commit. We can create as many commits as we need in the commit history, and we can go back and forth between commits to see the different revisions of our project code. That allows us to efficiently manage our progress and track the project as it gets developed.

Commits are usually created at logical points as we develop our project, usually after adding in specific contents, features or modifications (like new functionalities or bug fixes, for example).

> Before we can commit our code, we need to place it inside the **staging area**.

#### Checking Git Status 

While located inside the project folder in our terminal, we can type the following command to check the status of our repository:

```bash
git status
```

This is a command that is very often used when working with Git.  It shows us which files have been changed, which files are tracked, etc.

We can add the untracked project files to the **staging area** based on the information from the `git status` command.

At a later point, `git status` will report any modifications that we made to our tracked files before we decide to add them to the staging area again.

#### Staging Files 

From the project folder, we can use the **git add** command to add our files to the staging area, which allows them to be tracked.

We can add a specific file to the staging area with the following command:

```bash
git add file.js
```

To add multiple files, we can do this:

```bash
git add file.js file2.js file3.js
```

Instead of having to add the files individually, we can also add all the files inside the project folder to the staging area:

```bash
git add .
```

By default, this adds **all the files and folders** inside the project folder to the staging area, from where they are ready to be committed and tracked.

#### Making Commits 
A **commit** is a snapshot of our code at a particular time, which we are saving to the commit history of our repository. After adding all the files that we want to track to the staging area with the `**git add`** command, we are ready to make a commit.

To commit the files from the staging area, we use the following command:

```bash
git commit -m "Commit message"
```

Inside the quotes, we should write a **commit message** which is used to identify it in the commit history.

The commit message should be a descriptive summary of the changes that you are committing to the repository.

After executing that command, you will get the technical details about the commit printed in the terminal. And that's basically it, you have successfully made a commit in your project!

> To create a new commit, you will need to repeat the process of adding files to the staging area and then committing them after. Again, it's very useful to use the **git status** command to see which files were modified, staged, or untracked.

#### Commit History 
To see all the commits that were made for our project, you can use the following command:

```bash
git log
```

The logs will show details for each commit, like the author name, the generated hash for the commit, date and time of the commit, and the commit message that we provided.

#### Reverting Back to a Previous Version 
To go back to a previous state of your project code that you committed, you can use the following command:

```bash
git checkout <commit-hash>
```

Replace `<commit-hash>` with the actual hash for the specific commit that you want to visit, which is listed with the `git log` command.

To go back to the latest commit (the newest version of our project code), you can type this command:

```bash
git checkout master
```
## Branches 

A **branch** could be interpreted as an individual timeline of our project commits.

With Git, we can create many of these alternative environments (i.e. we can create different **branches**) so other versions of our project code can exist and be tracked in parallel.

That allows us to add new (experimental, unfinished, and potentially buggy) features in separate branches, without touching the '*official'* stable version of our project code (which is usually kept on the **master** branch).

When we initialize a repository and start making commits, they are saved to the **master** branch by default.

#### Creating a new branch 
You can create a new branch using the following command:

```bash
git branch <new-branch-name>
```
The new branch that gets created will be the reference to the current state of your repository.

> It's a good idea to create a **development** branch where you can work on improving your code, adding new experimental features, and similar. After development and testing these new features to make sure they don't have any bugs and that they can be used, you can merge them to the master branch.

#### Changing branches 

To switch to a different branch, you use the **git checkout** command:

```bash
git checkout <branch-name>
```

With that, you switch to a different isolated timeline of your project by changing branches.

> For example, you could be working on different features in your code and have a separate branch for each feature. When you switch to a branch, you can commit code changes which only affect that particular branch. Then, you can switch to another branch to work on a different feature, which won't be affected by the changes and commits made from the previous branch.

To create a new branch and change to it at the same time, you can use the **-b** flag:

```bash
git checkout -b <new-branch-name>
```

To list the branches for your project, use this command: `git branch`

To go back to the **master** branch, use this command:

```bash
git checkout master
```

#### Merging branches 
You can merge branches in situations where you want to implement the code changes that you made in an individual branch to a different branch.

For example, after you fully implemented and tested a new feature in your code, you would want to merge those changes to the stable branch of your project (which is usually the default **master** branch).

To merge the changes from a different branch into your current branch, you can use this command:

```bash
git merge <branch-name>
```

You would replace `<branch-name>` with the branch that you want to integrate into your current branch.

#### Deleting Branches 
To delete a branch, you can run the **git branch** command with the **-d** flag:

```bash
git branch -d <branch-name>
```
Read more about branching and merging [on this link](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging).

## Further Reading 
To learn more about Git, make sure to check the following resources:

- Git official documentation: [https://git-scm.com/doc](https://git-scm.com/doc)