import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { start } from '../redux/actions/customersActionsCreator';


function Customers() {

    const datas = useSelector((state => state));

    let dispatch = useDispatch();

    useEffect(() => {

        dispatch(start())

    }, [])

    console.log(datas)

    return (
        <>
            {datas.length ? (
                <>
                    <h1 className='customer-list'>Customer list</h1>

                    <table className="w3-table-all w3-centered">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Company Name</td>
                                <td>Contact Name</td>
                                <td>Contact Title</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            {React.Children.toArray(
                                datas.map(item => (
                                    <tr>
                                        <td>{item?.id}</td>
                                        <td>{item?.companyName}</td>
                                        <td>{item?.contactName}</td>
                                        <td>{item?.contactTitle}</td>
                                        <td>
                                            <button >Delete</button>
                                        </td>
                                    </tr>

                                ))
                            )
                            }

                        </tbody>
                    </table>
                </>
            ) :
                <h1 className='not-list'>Customer list is empty</h1>
            }

        </>
    )
}

export default Customers