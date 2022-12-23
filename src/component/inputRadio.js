import { useState } from "react";

const courses = [
    {
        id: 1,
        name: 'html/css'
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

function InputRadio() {
    const [checked, setChecked] = useState();
    console.log(checked);

    return (
        <div>
            {courses.map(course => (
                <div key={course.id}>
                    <input 
                        type='radio'
                        onChange={() => setChecked(course.id)}
                        checked={checked === course.id}
                    />
                    {course.name}
                </div>
            ))}
        </div>
    )

    // return (
    //     <>
    //         {courses.map(course => (
    //             <div key={course.id}>
    //                 <input
    //                     type='radio'
    //                     onChange={() => setChecked(course.id)}
    //                     checked={checked === course.id}
    //                 />
    //                 {course.name}
    //             </div>
    //         ))}
    //         <button>submit</button>
    //     </>
    // )
}

export default InputRadio;