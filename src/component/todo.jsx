// import React from 'react';
// import PropType from 'prop-type';

// eslint-disable-next-line react/prop-types
function Todo ({task, isDone}){
    // Conditional Rendering option 1
    
    /* if(isDone){
        return(
            <li>Task: {task}</li>
        )
    }
    else{
        return(
            <li>Work on: {task}</li>
        )
    } */
    // Conditional Rendering option 2
    /* if(isDone === true){
        return(
            <li>Task: {task}</li>
        )
    }
    else{
        return(
            <li>Work on: {task}</li>
        )
    }*/

// Conditional Rendering option 3

/* return(
    <>
    <li>{isDone ? "Finished" : "Work on"}: {task}</li>
    </>
) */

/* // Conditional Rendering option 4
return(
    <>
    <li>{task}{isDone && ": Done"}</li>
    </>
) */

/* // Conditional Rendering option 5
return(
    <>
    <li>{task}{isDone || ": Do it"}</li>
    </>
) */

// Conditional Rendering option 6
let ListItem;
if(isDone){
    ListItem = <li>Finished : {task}</li>
}else{
    ListItem = <li>Work on : {task}</li>
}
return ListItem;

// Todo.prototype = {
//     task: PropTypes.string.isRequired,
// }
}

export default Todo;