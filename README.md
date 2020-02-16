# employee-list-cli-generator

## description
The app generates an HTML page for a team roster of at least one manager with the potential to add engineers and interns, all based on user input.

## installation
Make sure to run npm install for the required dependencies: 
* inquirer
* chalk

In order to do this, node must be installed.

## usage
When entering employee data, you must fill out each field, and there's regex to check for email formatting.

Because of a while loop, when you enter several employees there is a warning message that says:
```
(node:9964) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 keypress listeners added to [ReadStream]. Use emitter.setMaxListeners() to increase limit
```

But the app is still usable. This will be fixed later.

## final thoughts
I found it really great practice to make a full-stack application, although I know it's far from optimized.

My next step will be to replace the while loop (which can cause more problems than it's worth) and further optimize my code.

Although I didn't take a lot of chances with vanilla CSS this time, I was happy for the opportunity to implement the bulma framework, which is completely new to me.

I also liked the opportunity to test with Jest, but in the future I'll practice making my own tests.