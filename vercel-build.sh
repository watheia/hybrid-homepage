#!/usr/bin/env bash

export PATH="$PATH:${HOME}/bin"
# echo 'export PATH="$PATH:${HOME}/bin"' >> ~/.bashrc

# Setup bit cli
npm i -g @teambit/bvm
bvm install
${HOME}/bin/bit config set analytics_reporting false

# install dependencies using bit
${HOME}/bin/bit init --harmony
${HOME}/bin/bit compile
${HOME}/bin/bit install


# Build App
NODE_ENV=production ./node_modules/.bin/nx build app \
  --extractCss \
  --extractLicenses \
  --optimization \
  --outputHashing=all \
  --no-sourceMap \
  --statsJson \
  --prod

