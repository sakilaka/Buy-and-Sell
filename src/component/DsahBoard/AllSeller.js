import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const AllSeller = () => {
    const {
        data: users = [],
        isLoading,
        refetch
    } 
    = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const res = await fetch(`https://second-hand-server-nine.vercel.app/users`);
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <progress className="progress w-56"></progress>;
    }

    const seller = users.filter((user) => user.type === "Seller");
    console.log(seller);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://second-hand-server-nine.vercel.app/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount === 1) {
                            Swal.fire(
                                'user deleted',
                                'success'
                            )
                            refetch();
                        }
                    })

            }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto p-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            seller.map((s, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{s.displayName}</td>
                                <td>{s.email}</td>
                                <td>
                                    <button onClick={() => handleDelete(s._id)} className='btn btn-error'>Delete</button>

                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;