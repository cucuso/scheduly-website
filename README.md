# Scheduly Website
[![Build Status](https://travis-ci.org/cucuso/scheduly-website.svg?branch=master)](https://travis-ci.org/cucuso/scheduly-website)
## Configuring project

install aws cli in order to quickly deploy to s3

`pip3 install awscli --upgrade --user`

configure local aws cli then run the following command to push to delete then push to s3

`aws s3 rm s3://www.scheduly.app --recursive`
`aws s3 cp . s3://www.scheduly.app --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --recursive`


## The project architecture

 the website(this project) is deployed to main s3 bucket, and app is deployed inside `app` directory.







