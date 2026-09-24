## 1) Even or Odd

### Requirement

**Write an arrow function that takes a number and returns `"Even"` if the number is even, otherwise `"Odd"`.**

**Use the modulo operator.**

### Sample test data

**check(4) → "Even"**

**check(7) → "Odd"**

**check(0) → "Even"**

---

## 2) Result Evaluator — Pass or Fail

### Requirement

**Write a function that takes student marks (0–100).**

**Return:**

- **"Pass" if marks ≥ 50**
- **"Fail" if marks < 50**

**If marks are outside 0–100, log "Invalid marks" and return null.**

### Sample test data

**evaluateResult(75) → "Pass"**

**evaluateResult(40) → "Fail"**

**evaluateResult(120) → Invalid marks**

---

## 3) Maximum Finder — Largest of Three Numbers

### Requirement

**Write an arrow function that takes three numbers and returns the largest number.**

**Do not use built-in Math helpers.**

### Sample test data

**findMax(10, 25, 15) → 25**

**findMax(5, 3, 8) → 8**

**findMax(9, 9, 2) → 9**

---

## 4) Accumulator — Sum from 1 to N

### Requirement

**Write a function that takes a positive number `n` and returns the total sum from 1 to `n` using a loop.**

### Sample test data

**sumToN(5) → 15**

**sumToN(10) → 55**

---

## 5) Multiplication Table Generator

### Requirement

**Write a function that prints the multiplication table of a given number from 1 to 10 using a loop.**

### Sample test data

**printTable(3)**

### Expected output

**3 x 1 = 3**

**3 x 2 = 6**

**3 x 3 = 9**

**3 x 4 = 12**

**3 x 5 = 15**

**3 x 6 = 18**

**3 x 7 = 21**

**3 x 8 = 24**

**3 x 9 = 27**

**3 x 10 = 30**

---

## 6) Digit Counter — Number Length Finder

### Requirement

**Write a function that counts the number of digits in a number using a loop.**

**Do not use string conversion.**

### Sample test data

**countDigits(1234) → 4**

**countDigits(9) → 1**

**countDigits(10000) → 5**

---

## 7) Number Reverser

### Requirement

**Write a function that reverses the digits of a number using mathematical operations.**

### Sample test data

**reverseNumber(1234) → 4321**

**reverseNumber(500) → 5**

**reverseNumber(91) → 19**

---

## 8) Factorial Engine

### Requirement

**Write a function that calculates the factorial of a number using a loop.**

### Rule

**n! = n × (n - 1) × ... × 1**

### Sample test data

**factorial(5) → 120**

**factorial(3) → 6**

**factorial(1) → 1**

---

## 9) Prime Validator

### Requirement

**Write a function that checks whether a number is prime.**

**Return `true` for a prime number and `false` for a non-prime number.**

**Use a loop to test divisibility.**

### Sample test data

**isPrime(7) → true**

**isPrime(10) → false**

**isPrime(2) → true**

---

## 10) Pattern Builder — Star Triangle

### Requirement

**Write a function that prints a star pattern based on the input using nested loops.**

### Sample test data

**printPattern(4)**

### Expected output

```text
*
**
***
****
