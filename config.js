module.exports = {
  dash: {
    MAC_address: "fc:a6:67:4e:73:57"
  },
  // target: {
  //   name: "IFTTT",
  //   url: "https://maker.ifttt.com/trigger/dash_pressed/with/key/b1v0DKWan69uayGMBZh462"
  // }
  target: {
    name: "Status_Lunch",
    url: "https://slack.com/api/users.profile.set?token=xoxp-72229371188-72520190322-212130773778-df0dc78acb485e0c3f6ed19eb2678bef&profile=%7B%0D%0A++++%22status_text%22%3A+%22Lunch%22%2C%0D%0A++++%22status_emoji%22%3A+%22%3Afork_and_knife%3A%22%0D%0A%7D"
  }
};