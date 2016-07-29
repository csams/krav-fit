#!/usr/bin/bash

WEB_ROOT=/var/www/html
sudo rm -rf $WEB_ROOT/*
cp index.html $WEB_ROOT
cp -r images $WEB_ROOT
cp -r styles $WEB_ROOT
cp -r fragments $WEB_ROOT
