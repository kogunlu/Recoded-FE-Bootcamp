# JS Arrays & Loops Lab 0

## Overview

We have all be through the multiplications table. Some liked it. Some hated it. But, I think we can all agree we can use a calculator to make our lifes easier. So in this activity, you are going to create a function that returns the multiplication table of a number.

## Instructions

1. Create a function called `getMultiplicationTable` that accepts one argument, `number.
2. Inside the function, create a loop that logs the multiplication of the argument number times every number from 1 to 20.
3. Bonus1: Add another argument called `step` that gives you the ability to jump over numbers in the multiplication table. Look at the test cases for more input.
4. Bonus2: Reconstruct the loop so that it gives you the multiplication table of all numbers up to the argument number. Look at the test cases for more input. Would only one loop work? 🤔

## Test cases

### First use case

| Input |           Output            |
| :---: | :-------------------------: |
|   2   |  2,4,6,8,10,12,14,16,18,20  |
|   4   | 4,8,12,16,20,24,28,32,36,40 |

Please note that the comma is simply used here as separation.

### Bonus1 use case

We used step as an extra argument so that we jump over every other number
So if the input is 2 then it will be multiplied by 1,3,5,7,9 (notice how we jump 2 steps)
| Input | Step | Output |
|:-----:|:-----:|:---------------------------:|
| 2 | 2 | 2,6,10,14,18 |
| 4 | 2 | 4,12,20,28,36 |

Please note that the comma is simply used here as separation.

### Bonus2 use case

If we input 3 then we want the mutliplication tables of 1, 2, and 3.
| Input | Output |
|-------|---------------------------------------------------------------------------|
| 2 | 1,2,3,4,5,6,7,8,9,10 2,4,6,8,10,12,14,16,18,20 |
| 3 | 1,2,3,4,5,6,7,8,9,10 - 2,4,6,8,10,12,14,16,18,20 - 3,6,9,12,15,18,21,24,27,30 |

Please note that the comma is simply used here as separation.
