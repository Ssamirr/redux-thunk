import { DELETE, START } from "./customers.actions"


export const start = () => {
    return async (dispatch) => {
        fetch('https://northwind.vercel.app/api/customers')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'START', payload: data })
            })
    }
}

// export const deleteItem = (payload) => {
//     return {
//       type: DELETE,
//       payload
//     };
//   };