# inquirer-table-multiple [![npm version](https://badge.fury.io/js/inquirer-table-multiple.svg)](https://badge.fury.io/js/inquirer-table-multiple)

> A table-like prompt for [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)

<!-- FIXME replace git -->
<!-- ![Screen capture of the table prompt](screen-capture.gif) -->

## Installation

```
npm install --save inquirer-table-multiple
```

## Usage

After registering the prompt, set any question to have `type: "table"` to make use of this prompt.

The result will be an array, containing the value for each row.

```js
inquirer.registerPrompt("table", require("./index"));

inquirer
  .prompt([
    {
      type: "table",
      name: "workoutPlan",
      message: "Choose your workout plan for next week",
      columns: [
        {
          name: "Arms",
          value: "arms"
        },
        {
          name: "Legs",
          value: "legs"
        },
        {
          name: "Cardio",
          value: "cardio"
        },
        {
          name: "None",
          value: undefined
        }
      ],
      rows: [
        {
          name: "Monday",
          value: []
        },
        {
          name: "Tuesday",
          value: []
        },
        {
          name: "Wednesday",
          value: []
        },
        {
          name: "Thursday",
          value: []
        },
        {
          name: "Friday",
          value: []
        },
        {
          name: "Saturday",
          value: []
        },
        {
          name: "Sunday",
          value: []
        }
      ]
    }
  ])
  .then(answers => {
    // do something
  });
```

### Options

- `columns`: Array of options to display as columns. Follows the same format as Inquirer's `choices`
- `rows`: Array of options to display as rows. Follows the same format as Inquirer's `choices`
- `pageSize`: Number of rows to display per page
