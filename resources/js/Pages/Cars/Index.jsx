import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import WarningButton from '@/Components/WarningButton';
import Swal from 'sweetalert2';
/**
 * 
 * TODO: 
 * 1.continue watching tutorial from https://www.youtube.com/watch?v=bxX15LL_zE4 27:00 
 */
export default function Dashboard(props) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const [operation, setOperation] = useState(1);
    const MakeInput = useRef();
    const ModelInput = useRef();
    const ColorInput = useRef();
    const {data, setData, delete:destroy, post, put, processing, reset, errors} = useForm({
        id:'', name:'', model:'', color:''
    });
    const openModal = (op, id, name, model, color) => {
        setModal(true)
        setOperation(op)
        setData({name:name, model:model, color:color})
        if(op === 1) {
            setTitle('Add car');
        } else {
            setTitle('Edit car');
            setData({id:id, name:name, model:model, color:color})
        }
    }
    const closeModal = () => {
        setModal(false)
    }

    const save = () => {

    }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cars</h2>}
        >
            <Head title="Cars" />

            <div className="bg-white grid v-screen place-items-center">
                <div className='mt-3 mb-3 flex justify-end'>
                    <PrimaryButton onClick={()=> openModal(1)}>
                        <i className='fa-solid fa-plus-circle'>Add</i>
                    </PrimaryButton>
                </div>
            </div>
            <div className='bg-white grid v-screen place-items-center py-6'>
                <table className='table-auto border border-gray-400'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='px-2 py-2'>#</th>
                            <th className='px-2 py-2'>NAME</th>
                            <th className='px-2 py-2'>MODEL</th>
                            <th className='px-2 py-2'>COLOR</th>
                            <th className='px-2 py-2'></th>
                            <th className='px-2 py-2'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.cars.map((car, i) => (
                            <tr key={car.id}>
                                <td className='border border-gray-400 px-2 py-2'>{i + 1}</td>
                                <td className='border border-gray-400 px-2 py-2'>{car.name}</td>
                                <td className='border border-gray-400 px-2 py-2'>{car.model}</td>
                                <td className='border border-gray-400 px-2 py-2'>
                                    <i className={'fa-solid fa-car text-'+car.color+'-600'}></i>
                                </td>
                                <td className='border border-gray-400 px-2 py-2'>
                                    <WarningButton onClick={()=> openModal(2, car.id, car.name, car.model, car.color)}>
                                        <i className='fa-solid fa-edit'></i>
                                    </WarningButton>
                                </td>
                                <td className='border border-gray-400 px-2 py-2'>
                                    <DangerButton>
                                        <i className='fa-solid fa-trash'></i>
                                    </DangerButton>
                                </td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            
            <Modal show={modal} onClose={closeModal}>
                <form onSubmit={save} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                       {title}
                    </h2>
                    
                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <DangerButton className="ml-3" disabled={processing}>
                            Delete Account
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
