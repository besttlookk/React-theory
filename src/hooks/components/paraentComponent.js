import React, { useState, useCallback } from 'react'
import Count from './count'
import Button from './button'
import Title from './title'

function ParentComponent() {
	const [age, setAge] = useState(25)
	const [salary, setSalary] = useState(50000)

	// calling useCallback function[takes two argument]{first argument: callback function}{second: array of dependencies}
	const incrementAge = useCallback(() => {
		setAge(age + 1)
	}, [age])

	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	}, [salary])

	return (
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>
		</div>
	)
}

export default ParentComponent

// har re-render ke baad same function ka refrence change ho jata memory me...jiske karan ager wo funtion kisi child component ke props me hai to wo v re-render ho jata..chahe koi change hua ho ki nhi