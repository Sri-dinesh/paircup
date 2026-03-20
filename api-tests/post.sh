#!/bin/bash

curl -X POST -i http://localhost:3000/profiles/ \
-H "Content-Type: application/json" \
-d '{
  "name": "Sridinesh",
  "description": "Just a dev who loves to code",
}'