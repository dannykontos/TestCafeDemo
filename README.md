# TestCafeDemo
A small setup of TestCafe framework with test cases organised using Page Object Model



## Getting Started

1. **Install** [Node 12](https://nodejs.org/en/) or newer.

      Verify version: `node -v`

2. **Install** [TestCafe](https://devexpress.github.io/) globally:

      Run: `npm install -g testcafe`

### Running a test

  1. Open a terminal
  2. Run:

    npm install -g testcafe

  3. Change directory to: 
  
    /e2e/tests/

  4. Run all tests in a browser: 

    testcafe {list_of_browsers} *.js

    #### e.g testcafe safari,edge *

  5. Run tests from one file: 

    testcafe {list_of_browsers} filename.js

  6. Run specific tests: 

    testcafe {list_of_browsers} ./filename.js/ -T "testname"


       
