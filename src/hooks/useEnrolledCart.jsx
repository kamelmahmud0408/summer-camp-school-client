import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useEnrolledCart = () => {
   const {user}=useContext(AuthContext)
   const {refetch, data: enrolledData=[]}=useQuery({
    queryKey:['enrolled', user?.email],
    queryFn: async()=>{
        const res = await fetch(`http://localhost:5000/enrolled?email=${user.email}`)
        return res.json()
    }
   })
   return [refetch,enrolledData]
};

export default useEnrolledCart;
