---
description: Guide to deploying the application to Vercel
---

# Deploying to Vercel

Since this is a Next.js application, the best way to host it is on [Vercel](https://vercel.com), the creators of Next.js.

## Prerequisites

1.  A [GitHub](https://github.com) account.
2.  A [Vercel](https://vercel.com/signup) account.

## Step 1: Initialize Git

First, we need to turn your project into a Git repository.

// turbo
1.  Initialize git:
    ```bash
    git init
    ```

// turbo
2.  Add all files to staging:
    ```bash
    git add .
    ```

3.  Commit the changes:
    ```bash
    git commit -m "Initial commit"
    ```

## Step 2: Push to GitHub

1.  Go to [GitHub.com/new](https://github.com/new) and create a new repository.
2.  Name it `selshiya-portfolio` (or similar).
3.  **Do not** initialize with a README, .gitignore, or license (you already have files).
4.  Copy the commands under "**…or push an existing repository from the command line**". They will look like this:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git branch -M main
    git push -u origin main
    ```
5.  Run those commands in your terminal.

## Step 3: Deploy on Vercel

1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Select **"Import"** next to your new GitHub repository.
4.  In the "Configure Project" screen, Vercel automatically detects Next.js.
5.  Click **"Deploy"**.

## Alternative: Vercel CLI (No GitHub required)

If you don't want to use GitHub, you can deploy directly from your terminal:

1.  Install Vercel CLI:
    ```bash
    npm i -g vercel
    ```
2.  Run the deploy command:
    ```bash
    vercel
    ```
3.  Follow the prompts to log in and deploy.
