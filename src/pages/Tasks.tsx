import React, { useState } from 'react';
import TaskForm from '../components/TaskFormObject';
import { fetchTasks, addTask, deleteTask } from '../services/fetchTasks';
import ITask from '../interfaces/ITask';
import Taskrow from '../components/TaskRow';


const Tasks: React.FC = () => {
    const [listTasks, setListTasks] = useState<ITask[]>([]);

    const addTaskInComponentTasks = async (taskToAdd: ITask) => {
        let task = await addTask(taskToAdd);
        console.log(task);
        //maj de la liste
        await getAllTasks()
    }
    
    const deleteTaskInComponentTasks = async (id: string) => {
        //ajouter une tâche
        let task = await deleteTask(id);
        console.log(task);
        //afficher la liste 
        await getAllTasks();
    };

    const getAllTasks = async () => {
        let list = await fetchTasks();
        setListTasks(list);
    };
    //let tasks= fetchTasks();
    // console.log(tasks)
    return (
        <div>
            <TaskForm addTaskInComponentTasks={(taskToAdd: ITask) => addTaskInComponentTasks(taskToAdd)} />
            <table>
                <thead>
                    <th scope="col">Done</th>
                    <th scope="col">Titre</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date</th>
                    <th scope="col">Modifier</th>
                    <th scope="col">Supprimer</th>
                </thead>
            </table>
            <div>{listTasks.map((taskRow: ITask) => {
                return <Taskrow taskRow={taskRow} deleteTaskInComponentTasks={(id: string) => deleteTaskInComponentTasks(id)}/>
            })
            }</div>

        </div>

    );
}

export default Tasks;
