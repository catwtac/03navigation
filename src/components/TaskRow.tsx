import React, { useState } from 'react';
import ITask from '../interfaces/ITask';


type Props = {
  taskRow: ITask;
  deleteTaskInComponentTasks: (id: string) => void;
  setTaskrow: React.Dispatch<React.SetStateAction<string>>;
}

const Taskrow: React.FC<any> = (props: Props) => {
  //récupérer le props.taskRow pour ensuite pouvoir modifier le checkebox
  const [taskRow, setTaskRow] = useState(props.taskRow);

  const updateTaskCheckbox = async (value: boolean) => {

    setTaskRow({ ...taskRow, done: value })
    console.log("change done value of task");
  }

  const deleteTaskInComponent = (value: string) => {
    props.deleteTaskInComponentTasks(taskRow._id!)
  }
  //  <div className="header"><p >Liste des tâches</p></div>

  return (
    <tr>
      <td>
        <input type="checkbox" id="done" checked={props.taskRow.done}
          onChange={(event) => updateTaskCheckbox(event.target.checked)}
          name="done" />
      </td>
      <td>
        {taskRow.title}
      </td>
      <td>
        {taskRow.description}
      </td>
      <td>
        {taskRow.date}
      </td>
      <td><button className="otherButtonValidate">Modifier</button></td>
      <td><button onClick={() => deleteTaskInComponent('remove')} className="otherButtonValidate">Supprimer</button></td>

    </tr>



  );
}

export default Taskrow;