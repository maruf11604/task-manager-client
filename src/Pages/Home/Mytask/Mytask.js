import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import TaskDetails from './TaskDetails';

const Mytask = () => {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/addtask?email=${user?.email}`;

    const { data: addedtask = [] } = useQuery({
        queryKey: ["addtask", user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {},
            });
            const data = await res.json();
            return data;
        }
    })
    console.log(addedtask);
    return (
        <div>
            <p className='font-bold text-3xl text-center py-2'>My-Task</p>
            <hr />

            <div className='grid py-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 '>
                {
                    addedtask.map(add => <TaskDetails key={add._id} add={add}></TaskDetails>)
                }
            </div>

        </div>
    );
};

export default Mytask;