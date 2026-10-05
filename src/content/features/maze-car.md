---
title: The Maze Runner
reel: 2
logline: An Arduino robot car with a LEGO body that drives itself through a wooden maze using its sensors.
status: Now showing
released: Feb – Mar 2025
genres: [Robotics, Electrical, Arduino]
poster:
  src: /media/maze-car/build.jpg
  alt: The maze robot — a LEGO chassis with an Arduino, breadboard, wiring and sensors mounted on top
trailer:
  src: /media/maze-car/run-blue.mp4
  poster: /media/maze-car/run-blue-poster.jpg
  alt: The robot driving itself through a blue wooden maze
  caption: Run through the blue maze.
credits:
  - { role: Brain, value: Arduino }
  - { role: Senses, value: Distance sensor · photoresistors · flex sensor }
  - { role: Drive, value: 2× DC motors }
  - { role: Body, value: LEGO · breadboard }
  - { role: Power, value: 9V battery }
gallery:
  - src: /media/maze-car/sketch.jpg
    alt: Hand-drawn plans showing the robot from the side and from underneath, with every component labeled
    caption: The storyboard — side and underside views, planned before a single brick went on.
  - src: /media/maze-car/build.jpg
    alt: The finished robot on a table, wires running from the Arduino to sensors on the LEGO frame
    caption: The finished build, mid-wiring.
  - src: /media/maze-car/run-red.mp4
    poster: /media/maze-car/run-red-poster.jpg
    alt: The robot navigating a red wooden maze
    caption: Run through the red maze.
note: The original code and write-up lived on a school account and didn't make it out, so this page is built from the photos and videos I kept.
---

## Synopsis

The challenge: build a car that gets itself through a maze — no remote control, no help. I built the body out of LEGO so I could rebuild it quickly every time something didn't fit, and wired everything to an Arduino on a breadboard.

## The storyboard

Before building anything, I drew the whole robot by hand from the side and from underneath: where the wheels and motors go, where the distance sensor points, where the wires come through the walls, and where the battery connector needs an opening. Having the layout on paper first made the LEGO build much faster.

## Behind the scenes

The car uses a front distance sensor to see walls coming, plus photoresistors and a flex sensor mounted around the frame. Two DC motors drive the wheels independently, so the car turns by spinning them at different speeds or in opposite directions.

It ran two different mazes — a red one and a blue one — which meant the logic couldn't just memorize a route. It had to react to the walls it actually saw.
