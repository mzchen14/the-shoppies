# The Shoppies

> Movie Awards for Entrepreneurs
> Shopify Web Developer Intern Challenge 2021

## Technologies Used
Javascript, React, MaterialUI, Axios, Netlify(Deployment)

## Getting Started##

1. `git clone` this repository to your local computer.
2. Run `yarn install` in your computer's terminal.
3. Run `yarn start` to open application in your browser.

## Technical Requirements

- [x] Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
- [x] Each search result should list at least its title, year of release and a button to nominate that film.
- [x] Updates to the search terms should update the result list
- [x] Movies in search results can be added and removed from the nomination list.
- [x] If a search result has already been nominated, disable its nominate button.
- [x] Display a banner when the user has 5 nominations.

## Extras

- [x] Added CSS Styling
- [x] Added Loading animation for Results

## Notes
I chose to use load results on search click/submition of the form in order to prevent unneccesary API calls. I felt that a pop-up banner after a user nominates 5 movies was more intuitive and better for user experience. Currently, users can still remove from their nominations and add different movies to reach 5 nominations again. However, this function can also be turned off by adding the case to the button disabled logic.

To further improve optimization, I would like to look into React.memo and see how I can optimize the re-rendering speed of the application. I noticed that the input field has gotten a bit slow as I continued building out the application.

Overall, really enjoyed this challenge!

Credits:
Created by Ming Chen

Title styling inspired by [Thomas Trinca](https://codepen.io/Trinca/pen/NAvpWa)
