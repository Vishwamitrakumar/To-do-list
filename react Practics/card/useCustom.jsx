import React, { useState } from 'react'

function useCustom() {
   
    const [count, setCount] = useState(0);
    
    const inc = () => {
        setCount(count + 1)
    }
    const dec = () => {
        setCount(count - 1);
    }
    

    return {
        inc, dec, count

    }
}

export default useCustom
