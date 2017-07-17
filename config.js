module.exports = {
    dash: {
        MAC_address: "68:37:e9:d3:a2:71"
    },
    getProfile: {
        name: "Get Profile",
        requestOptions: {
            host: "slack.com",
            path: "/api/users.profile.get?token=xoxp-72229371188-72520190322-213112437684-ee90cf3cecbc9f1708751320a7c95fbd",
            method: "GET"
        }
    },
    statusLunch: {
        name: "Status Lunch",
        requestOptions: {
            host: "slack.com",
            path: "/api/users.profile.set?token=xoxp-72229371188-72520190322-213112437684-ee90cf3cecbc9f1708751320a7c95fbd&profile=%7B%0D%0A++++%22status_text%22%3A+%22Lunch%22%2C%0D%0A++++%22status_emoji%22%3A+%22%3Afork_and_knife%3A%22%0D%0A%7D",
            method: "POST"
        }
    },
    resetStatus: {
        name: "Reset Status",
        requestOptions: {
            host: "slack.com",
            path: "/api/users.profile.set?token=xoxp-72229371188-72520190322-213112437684-ee90cf3cecbc9f1708751320a7c95fbd&profile=%7B%0A%20%20%20%20%22status_text%22%3A%20%22%22%2C%0A%20%20%20%20%22status_emoji%22%3A%20%22%22%0A%7D",
            method: "POST"
        }
    }
};