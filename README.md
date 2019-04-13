# Scheduly Website
[![Build Status](https://travis-ci.org/cucuso/scheduly-website.svg?branch=master)](https://travis-ci.org/cucuso/scheduly-website)
## Configuring project

install aws cli in order to quickly deploy to s3

`pip3 install awscli --upgrade --user`

configure local aws cli then run the following command to push to delete then push to s3

`aws s3 rm s3://www.unas.io --recursive`
`aws s3 cp . s3://www.unas.io --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --recursive`




