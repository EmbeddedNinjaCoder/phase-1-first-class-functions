const receivesAFunction = (aFunction) => { 
    aFunction();
}


function returnsANamedFunction() {
    function exampleFunction() { 
        console.log('HA');       
    } 
    return exampleFunction;
}


function returnsAnAnonymousFunction() {
    return function(){
      console.log("We are anonymous")
    }
  }

