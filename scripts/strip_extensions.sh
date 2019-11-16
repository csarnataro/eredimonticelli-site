#!/bin/sh
cd ./out
for f in $(find . -name "*.html")
do
  mv "$f" "${f%.html}"
done