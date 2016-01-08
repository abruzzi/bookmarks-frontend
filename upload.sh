#!/bin/bash
aws s3 cp public/ s3://bookmarks-frontend \
	--recursive \
	--region us-west-2 \
	--acl public-read