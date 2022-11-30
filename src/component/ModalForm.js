import React from 'react';
import Swal from 'sweetalert2';

const ModalForm = ({ buyItem, user }) => {

    console.log(buyItem);

    const handleBuying = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const bikeName = form.bikeName.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const price = form.price.value;

        // --------set object-------
        const buying = {
            bikeName,
            name,
            email,
            location,
            phoneNumber: phone,
            price,
            productImg: buyItem?.picture,
            sellerLocation: buyItem?.location,
        }
        console.log(buying)


        fetch('https://second-hand-server-nine.vercel.app/buying', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buying)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.acknowledged) {
                    Swal.fire(
                        'Successfully Buy.'
                    )
                    form.reset()
                } 
                else {
                    Swal.fire({
                        icon: 'error',
                        title: `${data?.message}`,
                        text: 'Something went wrong!',
                      })
                }

            })
    }

    return (
        <>
            <input type="checkbox" id="buy-modal" className="modal-toggle" />
            <div className="modal mt-[50px]">
                <div className="modal-box relative">
                    <label htmlFor="buy-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-center font-bold">Bike Zone : {buyItem?.name}</h3>
                    <form onSubmit={handleBuying} className='grid grid-cols-1 bg-slate-200 p-8 gap-3 mt-10'>
                        <input name='bikeName' type="text" disabled defaultValue={buyItem?.name} className="input w-full input-bordered " />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered " />
                        <input name="price" type="text" defaultValue={buyItem?.resalePrice} disabled placeholder="price" className="input w-full input-bordered" required />
                        <input name="location" type="text" placeholder="location" className="input w-full input-bordered" required />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
                        <br />
                        <input className='btn btn-error w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ModalForm;
