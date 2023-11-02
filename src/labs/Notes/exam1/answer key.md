### Q1.
    1. q
    2. map
    3. parseInt(a)
    4. 3
    5. 6
    6. a


### Q4.
```javascript
<_label_ _type_="email">Email</_label_>
<input
 _value_="alice@wonderland.com"
 _placeholder_="john@doe.com"
 _type_="email"
 _title_="Type your email"/>
```
Fill in the blanks above so that
the input field has an initial value of alice@wonderland.com
when you click on Email, the input field get focus
when you delete the text in the input field, it shows a grayed hint that says john@doe.com
when you hover of the input field, a tooltip appears hovering on the input field that says Type your email

### TEXT FIELDS
```javascript 
<label for="Name">Name</label>
<input value="Alice" placeholder="Jane" id="Name" title="tooltip">
```

### ADDING ONTO EXISTING ARRAYS
```javascript 
const y = [123,234,345,456]
const z = [234, ...y]
[234, 123, 234, 345, 456]
```



### Q6.

##### Jkl.js
```javascript
import React from "react";
import { useParams } from "react-router-dom";
function Jkl({ asd = [9, 2, 8, 3] }) {
    const { dsa } = _useParams_();
    const __6__ = [__2__, ...__7__];
    return (
        <div>
            <h2>{ewq}</h2>
        </div>
    );
}
export default Jkl;
```


##### Bnm.js
```javascript 
import { Link, Route, Routes } from "react-router-dom";
import Jkl from "./Jkl";
function Bnm({ sdf = _4_ }) {
    return (
        <div>
            <Link to={`/q11/${_sdf_}`}>BUTTON</Link>
            <Routes>
                <Route path="/q11/:__2__" _element_={<Jkl />} />
            </Routes>
        </div>
    );
}
export default Bnm;
```
        

    1. sdf
    2. dsa
    3. element
    4. 4
    5. useParams
    6. ewq
    7. asd

### Q7.
    1. ...q
    2. c
    3. 456
    4. 345

### Q8.
    1.
    2. qwe
    3. asd
    4. Rew
    5. Asd
    6. Link

### Q9.

```javascript 
const _w_ = ["ewq", "dsa", "asd", "tre", "zxc"]
const r = w._find_((a, b) => _a_ === _"asd"_)
```

    we want r to equal "asd"
    if we want it to return an array we use filter instead of _find_

### Q10. CHECKBOXES
    Consider the following set of buttons. If a user clicks on the text, the button on its left is selected.
    Fill in the blanks below to implement the behavior described

```javascript
<_Label_><_Input_ type="_checkbox_" name="radio" id="ABC"/>ABC</_Label_>
<_Label_><_Input_ type="_checkbox_" name="radio" id="DEF"/>DEF</_Label_>
<_Label_><_Input_ type="_checkbox_" name="radio" id="GHI"/>GHI</_Label_>
```
     


### Q11.
    return [321, 432, 999, 654, 765]

```javascript
function Asd() {
    const ewq = [321, 432, 543, 654, 765];
    const tre = (_ytr, uyt) => {
        const _poi_ = _ewq_._map_(
            (_iuy_) => (iuy === ytr ? _uyt_ : iuy));
        console.log(poi);
    };
    return (
        <div>
            <button _onClick_={() => _tre_(_543, 999)}>
                BUTTON
            </button>
        </div>
    );
}
export default Asd;
```
    


### Q12.
    make q = 2

```javascript
const _w_ = [51, 42, 33, 24, 15]
const q = w._findIndex_(_b_ => b === _33_)
```
    


### RADIO BUTTONS
Radio Button (2 mutually exclusive groups): 
```html
<input type="radio" name="color"/>Yellow
<input type="radio" name="color"/>Blue
<input type="radio" name="color"/>Green
<input type="radio" name="genre"/>Horror
<input type="radio" name="genre"/>Comedy
```

### Q15.
    clicking on the BUTTON twice, the console displays 20.

```javascript
import React from "react";
function Xyz({ _qwe_ = _10_ }) {
    let _rew_ = qwe;
    const _ert_ = (ewq) => {
        rew = ewq;
    };
    const _asd_ = () => {
        ert(rew + 5);
        console.log(rew);
    };
    return (
        <div>
            <button _onClick_={asd}>BUTTON</button>
        </div>
    );
}
export default Xyz;
```
    

### Q16.
    console prints 456 and then 234

```javascript
const qwe = { _asd_: 123, _sdf_: 234 }
const zxc = { _sdf_: 345, ...qwe,
            _asd_: 456, zxc: 567 }
const { sdf, asd } = _zxc_
console.log(asd)
console.log(sdf)
```
    


### Q17.
    Fill in the blanks so that the text is guaranteed to render as follows:

    Consider the following HTML code snippet

```html
<h1 _id_="qwe" _class_="wer">I'm white on red</h1>
```

    Now consider the following CSS code snippet

```css
#qwe { background-color: red }
#wer { background-color: blue }
.qwe { background-color: red; color: white }
.wer { background-color: blue; color: white }
```

### Q18.

```javascript
const qwe = _234_
const asd = 321
const _zxc_ = [321, qwe, 432, asd, 543]
const [_ewq_, _rew_] = zxc
console.log(ewq)
console.log(rew)
```

    Fill in the blanks above so that the console prints 321 and then 234

### Q19.

    Consider the following code snippet

```javascript
Qwe.js
const Qwe = ({_asd_, zxc}) => <h1>{asd * zxc}</h1>
export default Qwe
```
    
```javascript
App.js
import Qwe from "./Qwe"
const App = () => <Qwe _zxc_="9" asd="_2_"/>
```

    Fill in the blanks above so that the browser renders 18.

### Q20.

    Consider the following code snippet

```javascript
const b = [1, 2, 3, 4, 5];
const w = _b_._filter_(q => _q_ > _1_);
```
    

    Fill in the blanks so that q contains the following values [2, 3, 4, 5]


### ACRONYMS
    SPA = single page application
    URL = uniform resource locator
    API = application programming interface
    http = hypertext transfer protocol
    DOM = document object model
    CSS = cascading style sheets

### MAP

Syntax: `array.map(function(currentValue, index, array), thisValue)`

Description: Creates a new array by applying a function to each element of the original array.
```javascript 
const array = [1, 2, 3, 4, 5];
const mappedArray = array.map((x) => x * 2);
// mappedArray: [2, 4, 6, 8, 10]
```


### FIND

Syntax: `array.find(function(currentValue, index, array), thisValue)`

Description: Returns the value of the first element in the array that satisfies the provided testing function.
```javascript 
const array = [5, 12, 8, 130, 44];
const found = array.find((element) => element > 10);
// found: 12
```

### FIND INDEX

Syntax: `array.findIndex(function(currentValue, index, array), thisValue)`

Description: Returns the index of the first element in the array that satisfies the provided testing function.
```javascript
const array = [5, 12, 8, 130, 44];
const foundIndex = array.findIndex((element) => element > 10);
// foundIndex: 1
```

### FILTER

Syntax: `array.filter(function(currentValue, index, array), thisValue)`

Description: Creates a new array with all elements that pass the test implemented by the provided function.
```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArray = array.filter((x) => x % 2 === 0);
// filteredArray: [2, 4, 6, 8, 10]
```

### USE STATE

##### Counter
```javascript
import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}
export default Counter;
```

##### Object
```javascript
import React, { useState } from "react";
function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: "Peter", age: 24 });
  return (
    <div>
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <input
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <input
        value={person.age}
        onChange={(e) => setPerson({ ...person,
                                     age: parseInt(e.target.value) })}
      />
    </div>
  );
}
export default ObjectStateVariable;
```