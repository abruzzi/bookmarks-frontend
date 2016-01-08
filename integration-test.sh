#!/bin/bash

export PORT=8100
bundle install

# launch the application
echo "launch the application"
ruby app.rb 2>&1 &
PID=$!

# wait for it to start up
sleep 3

# run the cucumber features and record the status
rspec
RES=$?

# terminate after cucumber
echo "terminate the application"
kill -9 $PID

# now we know whether the cucumber success or not
exit $RES
