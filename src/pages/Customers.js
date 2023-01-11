import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { start } from '../redux/actions/customersActionsCreator';
import { add } from '../redux/actions/favoritesActionsCreator';


function Customers() {

    const datas = useSelector((state => state.customerReducer));
    let favorites = useSelector((state => state.favoritesReducer));
    console.log(favorites)

    let dispatch = useDispatch();

    useEffect(() => {

        dispatch(start())
        // eslint-disable-next-line
    }, [])

    const deleteFromApi = (id) => {
        fetch(`https://northwind.vercel.app/api/customers/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                toast.error("Item is deleted", { autoClose: 2000 })
                dispatch(start())
            })
    }

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
                                <td>Add to Favorites</td>
                            </tr>
                        </thead>
                        <tbody>
                            {React.Children.toArray(
                                datas.map(item => (
                                    <tr>
                                        <td>{item?.id}</td>
                                        <td>{item?.companyName}</td>
                                        <td>{item?.contactTitle}</td>
                                        <td>{item?.contactName}</td>
                                        <td>
                                            <button onClick={() => deleteFromApi(item?.id)}>Delete</button>
                                        </td>
                                        <td>
                                            <div className='large-font text-center top-20'>
                                                <ion-icon onClick={() => dispatch(add(item))} style={{ fill: favorites.filter(q => q.id === item.id).length !== 0 && "red" }} name="heart">
                                                    <div className='red-bg'></div>
                                                </ion-icon>
                                            </div>
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