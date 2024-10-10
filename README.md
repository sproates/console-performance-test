# Console Logging Performance Test

## Installation

Just get the files from this repository, whether that be cloning or downloading.

## Running

Just open `index.html` in a browser. I am too lazy to do anything fancy like starting a web server.

## What does it do?

This tool shows the performance impact of logging to console.

It does this by:
* Generating some content.
  * At the moment this is either an array of strings, or an array of objects with strings of text as keys.
* Measure the time taken to iterate over the content and either log the content to console, or do nothing.
* It's done this way so we can ignore the time spent iterating, and just worry about the difference between logging and not logging.

## How do I use the interface?

* There is an input field to control the size of the content. Set this to an integer.
* There is a radio button to toggle between logging to console or 'doing a NOOP' i.e. not logging anything.
* There is a radio button to toggle between using an array of strings as content or an array of objects.
* Click the button to run a single instance of the test.
* The timing will appended to the page.


## Anything else?

* Try testing with the dev tools open vs. dev tools closed!

## What are you trying to achieve here?

* To show you that there is a performance cost to logging to console, and you should maybe think about that.

