1. **Pig Latin**

- If using `findIndex`/`indexOf`, always consider no match (return `-1`).
- `slice()`:
  - First argument: Where to start?
  - Second argument: How many elements to take?
  - returns a new array with the specified elements and does not mutate the original array.

2. **Birthday countdown**

- `str.padStart(targetLength, padString)` adds characters to the beginning of a string until it reaches a specific length
- `getDay()` returns the day of the week (Sunday is 0), `getDate()` returns the day of the month.
- `new Date("2025-02-29")` will be normalized to `"2025-03-01T00:00:00.000Z"`
- `getTime()` returns the number of milliseconds for this date since the epoch (the midnight at the beginning of January 1, 1970, UTC.)
