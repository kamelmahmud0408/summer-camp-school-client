import React, { useEffect, useState } from 'react';

const PaymentHistory = () => {

    const [paymentHistory, setPaymentHistory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/payments')
            .then(res => res.json())
            .then(data => {
                setPaymentHistory(data)
            })
    }, [])

    return (
        <div className='w-full h-full my-10'>
        <div className="overflow-x-auto ">
            <table className="table ">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>image</th>
                        <th>Class Name</th>
                        <th>Name</th>
                        <th>Transaction Id</th>
                        <th>Price</th>
                        <th>Payment Date</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        paymentHistory.map((rowData, index) => <tr key={rowData._id} >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <img className='w-14 h-14 rounded-full' src={rowData.image} alt="" />
                            </td>
                            <td>
                                {rowData.className}
                            </td>
                            <td>
                            {rowData.email} 
                            </td>
                            <td>{rowData?.transactionId}</td>
                            <td>${rowData.price}</td>
                            <td>
                               {rowData.date}
                            </td>
                            
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
);
    
};

export default PaymentHistory;