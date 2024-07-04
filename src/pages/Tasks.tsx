import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskFormObject';
import { fetchTasks, addTask, deleteTask } from '../services/fetchTasks';
import ITask from '../interfaces/ITask';
import Taskrow from '../components/TaskRow';


const Tasks: React.FC = () => {
    const [listTasks, setListTasks] = useState<ITask[]>([]);

    const [modalDeleteStyle, setModalDeleteStyle] = useState('modalDeleteHidden');
    const [idTaskToDelete, setIdTaskToDelete] = useState('');

    const addTaskInComponentTasks = async (taskToAdd: ITask) => {
        let task = await addTask(taskToAdd);
        console.log(task);
        //maj de la liste
        await getAllTasks()
    }

    useEffect(() => {
        getAllTasks()
    }, []);

    //montre le modal de suppression
    const deleteTaskInComponentTasks = (idRowTask: string) => {
        //ouvrir modal de validation
        setModalDeleteStyle('modalDeleteVisible');
        setIdTaskToDelete(idRowTask);
    };
    //cache le modal de suppresion
    const hideModalDelete = () => {
        setModalDeleteStyle('modalDeleteHidden');
        setIdTaskToDelete('');
    }

    //supprimer la lignet 
    //affiche la liste maj
    //cache le modal
    const validateDeleteTaskInDb = async () => {

        //ajouter une tâche
        let task = await deleteTask(idTaskToDelete);
        console.log(task);
        //afficher la liste 
        await getAllTasks();

        hideModalDelete();
    }


    const getAllTasks = async () => {
        let list = await fetchTasks();
        setListTasks(list);
    };
    //let tasks= fetchTasks();
    // console.log(tasks)
    return (
        <div>
            <TaskForm addTaskInComponentTasks={(taskToAdd: ITask) => addTaskInComponentTasks(taskToAdd)} />
            <div id="supprimerflorian" className={modalDeleteStyle}>
                <div id="popup">
                    <div id="title">Etes-vous sûr de vouloir supprimer la tâche ?</div>
                    <button id="buttonannuler" onClick={() => hideModalDelete()}>
                        <div id="text">
                            <div id="clear">Annuler</div>
                        </div>
                    </button>
                    <button id="buttonsvalider" onClick={() => validateDeleteTaskInDb()}>
                        <div id="text2">
                            <div id="go">Valider</div>
                        </div>
                    </button>
                </div>
            </div>
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
                return <Taskrow taskRow={taskRow} deleteTaskInComponentTasks={(id: string) => deleteTaskInComponentTasks(id)} />
            })
            }</div>

        </div>

    );
}

export default Tasks;
