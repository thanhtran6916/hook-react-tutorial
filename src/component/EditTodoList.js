const EditTodoList = ({show, job}) => {
    console.log(job);
    return (
        <div>
            <h2>{job.name}</h2>
            <input defaultValue={job.name} />
            <button>Edit</button>
            <button>Exit</button>
        </div>
    )
}

export default EditTodoList;