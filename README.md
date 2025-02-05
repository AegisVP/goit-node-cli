# Homework #1

for GoIT Master of Science: Software Engineering #3

by Vladyslav Pysarenko

## Description

I've realized the full functionality required by the HW.

## Installation

run `npm install` to install all the dependencies

## Usage

- to test the **list** function, run `npm run test:list`
- to test the **get** function, run `npm run test:get`
- to test the **add** function, run `npm run test:add`
- to test the **remove** function, run `npm run test:remove`

## Manual usage

To test it by manually passing arguments, you can run the entry script, located at `/src/index.js` and pass it the required arguments, as outlined in the HW

**Accepted command line arguments:**

- `-a` - Action. One of `list`|`get`|`add`|`remove`
  - `list` - Prints a list of all contacts
  - `get` - Get a contact by id. Requires `-i` argument
  - `remove` - Deletes a contact by id. Requires `-i` argument
  - `add` - Adds a contact. Requires `-n`, `-e` and `-p` arguments
- `-i` - ID of a contact. Required for actions `get` and `remove`
- `-n` - Name of a contact. Required for action `add`
- `-e` - Email of a contact. Required for action `add`
- `-p` - Phone of a contact. Required for action `add`
