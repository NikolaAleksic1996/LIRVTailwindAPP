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

export default function Dashboard(props) {
    console.log(props)
    return (
        <AuthenticatedLayout
            // user={auth.user}
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cars</h2>}
        >
            <Head title="Cars" />

            <div className="bg-white grid v-screen place-items-center">
                <div className='mt-3 mb-3 flex justify-end'>
                    <PrimaryButton>
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
                    <tbody> console.log('test')
                        {props.cars.map((car, i) => (
                                <tr key={car.id}>
                                <td className='border border-gray-400 px-2 py-2'>{i + 1}</td>
                                <td className='border border-gray-400 px-2 py-2'>{car.name}</td>
                                <td className='border border-gray-400 px-2 py-2'>{car.model}</td>
                                <td className='border border-gray-400 px-2 py-2'>
                                    <i className={'fa-solid fa-car text-'+car.color+'-600'}></i>
                                </td>
                                <td className='border border-gray-400 px-2 py-2'></td>
                                <td className='border border-gray-400 px-2 py-2'></td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
