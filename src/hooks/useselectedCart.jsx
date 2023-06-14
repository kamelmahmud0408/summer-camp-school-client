import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useselectedCart = () => {

    const { user,loading } = useContext(AuthContext)
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: selectedData = [] } = useQuery({
        queryKey: ['selected', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`https://summer-camp-learning-school-server-kamelmahmud0408.vercel.app/selected?email=${user.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json()
        // }

        queryFn: async () => {
            const res = await axiosSecure(`/selected?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [refetch, selectedData]
};

export default useselectedCart;
