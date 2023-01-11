import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, deleteAll } from '../redux/actions/favoritesActionsCreator';

function Favorites() {

    const favorites = useSelector((state => state.favoritesReducer));

    const dispatch = useDispatch();

    return (
        <>
            {favorites.length ? (
                <>
                    <h1 className='customer-list'>Favorites list</h1>

                    <table className="w3-table-all w3-centered">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Company Name</td>
                                <td>Contact Name</td>
                                <td>Contact Title</td>
                                <td style={{padding:"0"}}>
                                    <button onClick={()=>dispatch(deleteAll())} className='remove-all'>Remove All</button>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {React.Children.toArray(
                                favorites.map(item => (
                                    <tr>
                                        <td>{item?.id}</td>
                                        <td>{item?.companyName}</td>
                                        <td>{item?.contactTitle}</td>
                                        <td>{item?.contactName}</td>
                                        <td>
                                            <div className='large-font text-center top-20'>
                                                <ion-icon onClick={() => dispatch(add(item))} style={{ fill: favorites.includes(item) && "red" }} name="heart">
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
                <h1 className='not-list'>Favorites list is empty</h1>
            }

        </>
    )
}

export default Favorites