const scoreHelpers = {
  extractValues: (dice) => {
    return dice.map(die => die.val);
  },
  getFrequency: (diceValues, num) => {
    return diceValues.filter((value) => value === num).length;
  },
}

export default scoreHelpers;
