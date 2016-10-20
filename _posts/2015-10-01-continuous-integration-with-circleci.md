---
layout: article
title: Continuous integration with CircleCI
---
## {{ page.title }}

#### Continuous integration and continuous delivery

Developers might be pushing their code to the repo all the time. So it's very important to make sure the codes are free of bugs when pushing to the repo before getting pulled by other poeple.  Continuous Integration (CI) is to help you do unit tests and locate the problems early in the code.  Continuous delivery (CD) will send a build command to your machine and tell it to re-build the app automatically when you tell it do. 

#### Parallelism

When you upload your code to the cloud you might want to split the unit test cases because if you have too many test cases or you are tesing different things with difference environment variables or settings.  You can setup the tests to tests in parallel, or for CircleCI you can use the env variables `CIRCLE_NODE_TOTAL` and `CIRCLE_NODE_INDEX` to tell which test node you're in and do the tests separately.

#### Integration with EC2

The process is as follows:

* use git to push the code to github
* CircleCI will get a copy of code and do all the unit tests (that you wrote)
* CircleCI will tell CodeDeploy to do something when all the tests passed
* CircleCI will upload revision files to S3 based on circle.yml settings
* CodeDeploy will pull code from S3 and configure your EC2 and install dependencies

You can also set environment variables for CircleCI testing.

![](http://i.stack.imgur.com/QNjVW.jpg)

You need to tell CircleCI which S3 bucket to push revisions to.  And give it the correct permissions. 

![](http://i.stack.imgur.com/B1AF8.jpg)


#### things to watch out when configuring CircleCI with CodeDeploy.

* make sure EC2 instance region is the same as S3 bucket region
* appspec.yml has a special format (spacing), if the format of appspec.yml is not correct you will see errors for your deployment
* key_pattern is the relative path of your files (revision) in your S3 bucket. Make sure you enter the same key_pattern in both AWS and circle.yml
* when you create an EC2 instance you need to install CodeDeploy agent in it so the instance can communicate with CodeDeploy and S3
* need to watch out for the relative paths in appspec.yml

* permission issues
if scripes have insufficient permissions then EC2 will fail to execute the scripts.  you need to make sure those scripts have 755 permissions when copied to your instance. 

[http://stackoverflow.com/questions/9027584/how-to-change-the-file-mode-on-github](http://stackoverflow.com/questions/9027584/how-to-change-the-file-mode-on-github)

* bash scripts cannot run correctly
when you do `sudo apt-get install nodejs` there will be intermediate steps that ask if you want to install packages and used disk spaces and you have to type Y or N to proceed installation. those scripts would hang there and timeout resulting in failed deployment. So instead you do

`sudo apt-get -y install nodejs npm`

and then this script can terminate without raising errors.

#### sample circle.yml

```yaml
machine:
  node:
    version: 0.10.32
deployment:
  production:
    branch: development
    CodeDeploy:
      my-app:
        deployment_group: my-app-group
        revision_location:
          revision_type: S3
          s3_location:
            bucket: CodeDeploy.ami.com.tw
            key_pattern: apps/flipper-{BRANCH}-{SHORT_COMMIT}
```

#### sample appspec.yml

```yaml
version: 0.0
os: linux
files:
  - source: /
    destination: /home/ubuntu
permissions:
  - object: /home/ubuntu/scripts
    pattern: "**"
    mode: 777
    type:
      - file
hooks:
  BeforeInstall:
    - location: scripts/before.sh
      timeout: 3800
  Install:
    - location: scripts/setup.sh
      timeout: 3800
  ApplicationStart:
    - location: scripts/start.sh
      timeout: 3800
```

#### before.sh

```bash
#!/bin/bash
sudo apt-get -y install nodejs npm
```

#### setup.sh

```bash
#!/bin/bash
cd /home/ubuntu
npm install
```

#### start.sh

```bash
#!/bin/bash

user_data=`curl http://169.254.169.254/latest/user-data/`

% extract information from user_data
MONGODB_HOST=$MONGODB_HOST \
MONGODB_PORT=$MONGODB_PORT \
MONGODB_USER=$MONGODB_USER \
MONGODB_PASS=$MONGODB_PASS \
NODE_ENV=stage nodejs server.js
```

#### debugging EC2 instances

once CodeDeploy copies the revision files to the EC2 instance the rest of the work is done by processing `appspec.yml` file, when any errors occur in CodeDeploy it will output error messages in 

`/var/log/aws/CodeDeploy-agent/CodeDeploy-agent.log` 

there are additional logs at the following place, and you can see your revision files in this folder

`/opt/CodeDeploy-agent/deployment-root/xxxx/xxx/logs/scripts.log`

```
$ aws deploy get-deployment-instance --deployment-id d-I4N1GYCKF --instance-id i-1edac6c6
```

Also you can use aws cli to view the error logs. 

Most of the time this issue occur due to insufficient IAM Permission on the Instance and CodeDeploy Service. You need to check `/var/log/aws/codedeploy-agent/codedeploy-agent.log` file for detail information. Also in `/etc/codedeploy-agent/conf/codedeployagent.yml` file you can set `:verbose: true` to get more info in log file.

--

references:

* [http://stackoverflow.com/questions/33629930/amazon-ec2-code-deploy-no-hosts-succeeded](http://stackoverflow.com/questions/33629930/amazon-ec2-code-deploy-no-hosts-succeeded)
* [https://CircleCI.com/](https://CircleCI.com/)

{{ page.date | date_to_string }}





