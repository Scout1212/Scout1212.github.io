#!/bin/bash

#for now until camera.py is fixed
rpicam-still -o test.jpg

echo "$(pwd)"

scp ~/Images/processedImage.jpg robertzamora@Roberts-MacBook-Pro.local:~/Desktop set/