import React, { useState } from 'react'
import { toast } from 'react-toastify';

function AddCustomers() {

    const [values, setValues] = useState({ companyName: "", contactTitle: "", contactName: "" });


    const submitForm = (event) => {
        event.preventDefault();
        const { companyName, contactTitle, contactName } = values;
        if (companyName.trim().length === 0 || contactTitle.trim().length === 0 || contactName.trim().length === 0) {
            toast.warn("Please fill in all the inputs")
        } else {
            fetch(`https://northwind.vercel.app/api/customers`, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify(values)
            })
                .then(() => {
                    toast.success("Item is added", { autoClose: 2000 })
                    setValues({ companyName: "", contactTitle: "", contactName: "" })
                })
        }

    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setValues({
            ...values,
            [name]: value,
        });
    };


    return (
        <>
            <div className='add-form'>
                <form onSubmit={(event) => submitForm(event)}>
                    <h1 >Add To List</h1>
                    <input name="companyName" required value={values.companyName} onChange={(e) => handleChange(e)} placeholder='Company Name' />
                    <input name='contactTitle' required value={values.contactTitle} onChange={(e) => handleChange(e)} placeholder='Contact Title' />
                    <input name='contactName' required value={values.contactName} onChange={(e) => handleChange(e)} placeholder='Contact Name' />
                    <button >Add</button>
                </form>

            </div>
        </>
    )
}

export default AddCustomers