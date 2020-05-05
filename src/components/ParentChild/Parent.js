import React, {useState} from 'react';
import Child from './Child';

const Parent = () => {
    const [value, setValue] = useState(1);

    const handleClick = () => setValue(value + 1);
  
    return(
       <Child value={value} onClick={handleClick} />
    )
  }
  
  export default Parent;