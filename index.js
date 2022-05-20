const { returns } = require("chai-spies")

function receivesAFunction (callBackFunc1){
    callBackFunc1()
}

function returnsANamedFunction(){
    return function named(){
    }
}

function returnsAnAnonymousFunction(){
    return () => {
    }
}
