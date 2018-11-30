import React from 'react';

export default props => (
    <div>
        <h1 className="center">Welcome to Movie Quotes</h1>
        <p>splice - remove items from the array
            * .splice( 2, 2 ) - at position 2, remove 2 items 
            * doesn’t include the third position.  
            * from position 2, remove that and the subsequent item. 
        slice - makes a copy of the array
            * .slice(1,3) - at position 1 and exclusive of 3 will be copied. 
            * doesn’t include the third position 
        pop - removes last item in the array
        shift - removes the first item in the array
        join - converts array into a string 
            * .join(‘’) - converts array into “FireWindRain”
            * .join( ) - converts array into “Fire,Wind,Rain”
        toFixed - fixes the number to specified length. 
            * toFixed(#) - The # will put out that many decimal places. 

        indexOf - returns the starting point of that index. 
            * var str = "Hello world, welcome to the universe.";
            * str.indexOf(‘welcome’) ==> 13 
        split - will convert a string into an array 
            * str.split(‘’) —> ‘h,o,w,,a,r,e’ // splits every letter 
            * str.split(‘ ‘) —> [how,are,you] 
        </p>
    </div>
)