import { useState } from "react";
import { v4 as uuidv4 } from "uuid"
import EditTodoList from "./EditTodoList";


const TodoList = () => {

    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(() => JSON.parse(localStorage.getItem('jobs')) ?? []);
    const [showEdit, setShowEdit] = useState(false);
    const [editValue, setEditValue] = useState();

    const addJob = () => {
        setJobs(prev => {
            let jobObj = {
                id: uuidv4(),
                name: job
            }
            const jobsNew = [...prev, jobObj];

            // set to localstores
            localStorage.setItem('jobs', JSON.stringify(jobsNew));

            return jobsNew;
        });
        setJob('');
    }

    const deleteJob = (id) => {
        console.log(id);
        setJobs(prev => prev.filter(item => item.id !== id))
    }

    const editJob = (job) => {
        // show input edit
        if (!showEdit) {
            setEditValue(job)
            setShowEdit(true);
        }
        // thực hiện edit
        else {
            setShowEdit(false);
        }
    }

    return (
        <div>
            <input
                value={job}
                onChange={e => setJob(e.target.value)}
                type='text'>
            </input>
            <button onClick={addJob}>Add</button>

            <ul>
                {jobs.map(((job) => (
                    <li key={job.id} id={job.id}>
                        {job.name}
                        <button onClick={() => editJob(job)}>Edit</button>
                        <button onClick={() => deleteJob(job.id)}>Delete</button>
                    </li>
                )))}
            </ul>

            {
                showEdit && (<EditTodoList job={editValue} />)
            }
        </div>
    )
}

export default TodoList;