FROM node:4.0.0
MAINTAINER Ainsley Chong <ainsley.chong@gmail.com>

# scripts
ADD scripts/run.js /sbin/run.js

# start
ENV HOME /root
CMD ["/sbin/run.js"]
