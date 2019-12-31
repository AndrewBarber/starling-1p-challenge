# starling-1p-challenge

A quick hacked-together (31st Dec after a Baileys.. 🥃) script for Starling Bank customers to have something similar to [Monzos penny challenge](https://monzo.com/blog/2019/04/10/1p-savings-challenge-monzo).

## How to build your own....

Requirements:

- Personal Access Token - from the Starling Dev Site

Create a .env file with the following:

```
accessToken=<Your Personal Access Token>
accountUid=<The Account UID you'd like to use>
savingsGoalUid=<The Savings Goal UID you'd like to use>
```

Run

`npm install`

Setup Cron to run app.js every day. eg.

`0 9 * * * /usr/bin/node ~/starling-1p-challenge/app.js`
