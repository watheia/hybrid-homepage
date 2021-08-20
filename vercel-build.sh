#!/usr/bin/env bash

export PATH="$PATH:${HOME}/bin"

# Setup bit cli
npm i -g @teambit/bvm
bvm install
bit config set analytics_reporting false

# install dependencies using bit
bit init --harmony
bit compile
bit install


# Build App
./node_modules/.bin/nx build app \
  --extractCss \
  --extractLicenses \
  --optimization \
  --outputHashing=all \
  --no-sourceMap \
  --statsJson

