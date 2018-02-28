# YAHTZEE!!!

This is a simple yahtzee game I built with React. 

You can play it [here](https://yatzee-ciifoqzuux.now.sh/)

## Score Validation

In its current state, Not every score field is validated. This might cause problems if you try to strike a score because you were unable to obtain it. More robust validation is coming soon. In the meantime, be honest when recording your score.

## Optmizations

* There is room for some serious optimization is the methods used to calculate scores. This was actually the purpose for creating this little game, to improve my functional programming skills and do some cool stuff with Array methods.

* There is also some room for optimization in the React render process. I'll be adding some conditions to `shouldComponentUpdate` to prevent unnecessary renders.

I hope you enjoy playing this digital version of Yahtzee.
