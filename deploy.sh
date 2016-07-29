#!/usr/bin/bash

WEB_ROOT=/var/www/html
sudo rm -rf $WEB_ROOT/*
cp index.html $WEB_ROOT
cp -r images $WEB_ROOT
cp -r styles $WEB_ROOT
cp -r fonts $WEB_ROOT
cp -r partials $WEB_ROOT
cp -r app $WEB_ROOT
