import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {
    const {
        data: users = [],
        isLoading,
    } = useQuery({
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
                                <td>Delete</td>
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