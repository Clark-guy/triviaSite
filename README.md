 # Trivia site for personal use

 This is a website I made just for fun to learn some javascript. I found some
 scraped jeopardy data from the internet as a csv and decided to make a game of
 it. In this repo there's several files that I've used to make this cool thingy
 happen. I'll list em below as well as their uses.


 ## Files

 ### JEOPARDY_CSV.csv
   This was the original, unedited data set that I found on kaggle. posted 
   originally by Bojan Tunguz in 2019.

 ### JEOPARDY_CSV.txt
   This is a converted version of the csv to be tab delimited so as to not mess 
   up questions with commas in them. Converted with excel.

 ### game.py
   This was an initial python implementation of the game I did before the js 
   version. You can run the game locally with just this file and the original
   csv if you'd like

 ### header.html
   I made this initially thinking you could use "include" statements in html
   before realizing that only php does that. I'm sure there must be some way
   to do this with javascript or something too, but I haven't gotten around to
   figuring that out yet.

 ### index.html
   Splash page. I put whatever I want here

 ### jeopardy.html
   jeopardy html page. has what you'd expect

 ### jeopardy.js
   script to make the jeopardy page load data. uses ajax to pull the data,
   which is why there's a little delay when you load the page. SQL would  
   likely be much faster and result in a better UX, maybe I'll do that later.

 ### style.css
   stylesheet for the website. Just made it look semi-presentable. I linked
   this in the nav section of the html, just for funsies.
