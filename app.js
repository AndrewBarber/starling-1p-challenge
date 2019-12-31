const Moment = require("moment");
const Starling = require("starling-developer-sdk");
const uuidv1 = require("uuid/v1");
require("dotenv").config();

const dayOfYear = Moment().dayOfYear();
const uuid = uuidv1();

const client = new Starling({
  accessToken: process.env.accessToken,
  accountUid: process.env.accountUid,
  savingsGoalUid: process.env.savingsGoalUid,
  transferUid: uuid,
  amount: dayOfYear,
  currency: "GBP"
});

client.savingsGoal
  .addMoneyToSavingsGoal()
  .then(({ data }) => console.log(data))
  .catch(err => console.log(err));
