This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Libraries 

You need to install these libraries to make the project works

## Currency codes

`npm install currency-codes`

**More info** https://www.npmjs.com/package/currency-codes

## React select

`npm install react-select`

**More info** https://www.npmjs.com/package/react-select

## React Modal

`npm install react-modal`

**More info** https://www.npmjs.com/package/react-modal

## React Datepicker

`npm install react-datepicker`

**More info** https://www.npmjs.com/package/react-datepicker


## React google autocomplete

`npm install react-google-autocomplete`

**More info** https://www.npmjs.com/package/react-google-autocomplete

**Eslint rules**

I used general rules, Google rules and Airbnb rules. I combined them to have better suggestions but I deactivated some of them that I found useless.

**Good Practices**

- Extract colors and sizes variables on root scss file in order to normalize app styles
- Order scss class properties aphabeticaly
- Extract strings in a separated file and import it in the component
- Destructuring state and props
- Use of Smart and dumb pattern on Search Section for better separation of concerns


**Important**

Since it's a mocked page, not all links and functionality really works.
- Click on login: opens a mocked modal
- Menu Links on Navbar are mocked
- Currency select: displays currency and country list and allows user to select it. User can also type and it will search among all the list items 
- Search section: user can search for places, choose starting and ending date. User has to start typing on Search input so suggested places will appear. It will not allow user to choose past days nor will it allow the user to choose an end date prior to the initial date. When user clicks on search, it launches an alert.  After mimicking the search, the last one made loads in the bottom.
