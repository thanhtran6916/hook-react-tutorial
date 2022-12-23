import { useState } from "react";

const courses = [
    {
        id: 1,
        name: 'html'
    },
    {
        id: 2,
        name: 'javascript'
    },
    {
        id: 3,
        name: 'reactjs'
    }
]
const CheckBox = () => {
    const[checked, setChecked] = useState([]);
    console.log(checked);

    const handleCheck = (id) => {
        setChecked((prev) => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        });
    }
    
    return (
        <div>
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type='checkbox'
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}
        </div>
    )
}

export default CheckBox;