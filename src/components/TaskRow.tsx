import React from 'react';
import ITask from '../interfaces/ITask';


type Props = {
  taskRow: ITask;
  
}

const Taskrow: React.FC<any> = (props: Props) => {
  const updateTaskCheckbox = async (value: boolean) => {

  }
  <div className="header"><p >Liste des tâches</p></div>

  return (
    <tr>
      <td>
        <input type="checkbox" id="done" checked={props.taskRow.done}
          onChange={(event) => updateTaskCheckbox(event.target.checked)}
          name="done" />
      </td>
      <td>
        {props.taskRow.title}
      </td>
      <td>
        {props.taskRow.description}
      </td>
      <td>
        {props.taskRow.date}
      </td>
      <td><button className="otherButtonValidate">Supprimer</button></td>
      <td><button onClick={() => deleteTaskInComponentTasks} className="otherButtonValidate">Supprimer</button></td>

    </tr>



  );
}

export default Taskrow;