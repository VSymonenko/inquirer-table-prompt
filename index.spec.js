const inquirer = require("inquirer");
const plugin = require("./index");

const table = {
  type: "table",
  name: "table",
  message: "Choose your workout plan for next week",
  columns: [
    {
      name: "Arms",
      value: "arms"
    },
    {
      name: "Legs",
      value: "legs"
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
    }
  ]
};

describe("multiple choices", () => {
  beforeEach(() => {
    inquirer.registerPrompt("table", plugin);
  });
  it("should be registred plugin", () => {
    expect(inquirer.prompt.prompts.table).toBeDefined();
  });
});
