# Problem: The drunken walk

## Getting started

Clone the repo and install the dependencies:

```bash
git clone https://github.com/accuser/the-drunken-walk.git
cd the-drunken-walk
npm install
```

To run the simulation with defaults:

```bash
node index.js
```

To specify the number of simulation iterations:

```bash
node index.js --iterations 10000
```

## Background

Bob is drunk. He is trying to climb a flight of three stairs: starting from the floor, step 1, step 2, and step 3 is the last one.
Here's the problem: whenever Bob is at step 1 or step 2, there is a 50% chance he will stumble upwards, and a 50% chance he will stumble downwards!
(When he is on the floor, he can only go up; when he reaches step 3, his journey stops.)

## Problem

Use a simulation with repeated trials to estimate the probability that Bob takes less than 10 steps to reach step 3? (E.g. UDUDUDUDUUU is 11 steps to get to step 3, so this is a fail.)

## Simulation? Like The Matrix?!

It's difficult (but possible) to answer this question with algebra. It's much easier to use a computer to model the situation and run the simulation very many times (1,000 or 10,000 or more). For example, what is the probability of getting Tails when we flip a coin? Let's write a program to randomly choose H or T and count how many T's we get. If we get 494 T's in 1000 trials, we can say the probability is 49.4% (which is very close to the real value of 50%). This technique is known as Monte Carlo simulation. This is used very widely in several industries to cope with randomness.

## Extensions

There is no reason to choose <10 steps. Write a function to let the user change 10 for n and estimate the answer.
Also let us change the number of trials.
Find the average number of steps required to reach the top.
