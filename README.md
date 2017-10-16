# tab-tracker
A Vue.js / Express.js web application for keeping track of guitar tabs

YouTube tutorial: Full Stack Web App using Vue.js & Express.js
- Part 1 Intro: https://www.youtube.com/watch?v=Fa4cRMaTDUI (DONE)
- Part 2 Sequelize: https://www.youtube.com/watch?v=xZMwg5z5VGk (DONE)
- Part 3 Login: https://www.youtube.com/watch?v=H6hM_5ilhqw
- Part 4: https://www.youtube.com/watch?v=1NSPAz1Qc-I&t=1
- 0' Part 5 View Song: https://www.youtube.com/watch?v=3zw5LgKDMhg&t=2
- Part 6 Search:
- Part 7 Wrapping Up:

GitHub source: https://github.com/codyseibert/tab-tracker

# setup development environmnet

* install node v8.5.0 (tutorial uses 8.2.1)
* install vue-cli
  * npm install -g vue-cli

## using Postman

* you can install the tool from https://www.getpostman.com/
* you can also install chrome extension chrome://extensions

* login using dragan.d.nikolic@gmail.com
* use Tab Tracker collection

# server

* start server: `npm start`

for more info refer to server's package.json

# client
tab-tracker> vue init webpack client
- this creates Vue app in the client folder, refer to its Readme for info how to use it

- use vuetify to make nice UI ;)
  - npm install --save vuetify

- use vuex to keep track about the app state