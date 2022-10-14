import React, {useState, useCallback, useEffect} from 'react'  
import Tiltle from './Tiltle'
import Count from './Count'
import TestButton from './TestButton'
import Button from './Button'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)
    
    useEffect(() => {
        console.log('useEffet..............')
    })


    const incrementAge = useCallback(() =>{
        setAge(age + 1)
    },[age])

    const salaryIncrement = useCallback(() =>{
        setSalary(salary + 1000)
    },[salary])
    return (
        <div>
            <Tiltle />
            <Count text='Age' count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text='Salary' count={salary} />
            <TestButton handleClick={salaryIncrement}>Increment Salary</TestButton>
        </div>
    )
}

export default ParentComponent