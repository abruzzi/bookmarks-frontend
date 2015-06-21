# bookmarks-frontend

There are some useful setup here for this project:

Tech stack here is:

1.  gulp
2.  browserify
3.  backbone.js
4.  handlebars
5.  less
6.  karma/jasmine

It's a typical front end project you can start working on without feel shame.

```sh
$ npm install
$ gulp dev
```

and since we're doing frontend and backend separation, I'm introducing the `sinatra` as a fake-server to do the tricks. So

```sh
$ bundle install
$ ruby app.rb
```

It's recommended that start a gulp `watch` in a terminal, and launch the sinatra in another one.
