#!/bin/bash

curl -X PUT -i http://localhost:3000/profiles/d5fa1a8e-e705-441e-9227-cc50212b4c49 \
-H "Content-Type: application/json" \
-d '{
  "name": "Sridinesh",
  "description": "Having a lot of skilll issues"
}'