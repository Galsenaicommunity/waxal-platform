FROM debian:stable

RUN apt update --fix-missing -y
RUN apt install curl -y
RUN apt install python3-pip -y
RUN apt install python3 -y
RUN echo 'alias python=python3'  >> ~/.bashrc

# Allow exposing HTTP endpoint
EXPOSE 9000

WORKDIR /app

# AWS configuration
RUN pip3 install awscli --upgrade
COPY configure_aws.sh /usr/local/bin/
RUN ln -s /usr/local/bin/configure_aws.sh
RUN chmod +x /usr/local/bin/configure_aws.sh

# Add project source
COPY . /code

# Setup work directory
WORKDIR /code

# Create directory for storing logs
RUN mkdir /code/logs

# install nodejs
RUN curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt install nodejs -y

# Install dependencies
RUN apt-get update && \
    apt-get install -y apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install --no-install-recommends -y yarn ffmpeg

# Install yarn dependencies
RUN yarn

# Run build
RUN yarn build

# Default command to start the server
CMD /usr/local/bin/configure_aws.sh && yarn start 2>&1 | tee /code/logs/voice-server.log
