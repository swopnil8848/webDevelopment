import React from 'react'

const Test1 = () => {
    const numberArray = [30, 20, 5, 200];
    function compareNumbers(a, b) {
        console.log("the value of a is::: ", a)
        console.log("the value of b is::: ", b)
        return a - b;
      }
    numberArray.sort(compareNumbers);
    console.log("array after sort:: ",numberArray)
  return (
    <div>
        i am tes1 jsx
    </div>
  )
}

export default Test1