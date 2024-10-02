//  * Callbacks are pretty good but their existed a problems with callbacks such as Readability and Inversion of Control

// TODO : Solving readability and Inversion Of Control Issues Using Promises

// * So we have Promises

// * Promises are great readability enhancers

// * Promises enhances the readability
// * Also Promises can also solve the problem of Inversion of Control

/*
 *In JS Promises are special type of object that get returned immediately when we call them

 *Promises act as a placeholder for data that we hope to get back sometime in future

 * Assume we have x = fetch(url) - and fetch downloads webpage from url and lets assume fetch is runtime function, JS won't wait for JS fetch call (non-native)

 ? Assume fetch is written using promises then it will be immediate;y return a promise object which would act as a placeholder

 * placeholder for the result, x will act as placeholder

 * In these promise objects we can attach a functionality we want to execute once the future task is done

 * Once the task is done, you want to execute some functionality, Promises will trigger this functionality

 * Same fetch in callbacks will look like this

 *fetch ("https://www.xyz.com", function exec(){console.log("Done")})

 ! We are attaching the callback exec() immediately then and their only but with promises we can attach it later
 */
