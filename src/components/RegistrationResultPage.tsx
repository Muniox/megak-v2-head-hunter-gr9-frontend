import React from 'react';

interface Props {
    isSuccessful: boolean
    reason: string
};

export const RegistrationResultPage = ({ isSuccessful, reason }: Props) => {

    const handleReturn = () => {
        console.log('return');
    };
    return (
    <div className="flex justify-center items-center h-screen">
        <div className="w-500 h-500 flex flex-col justify-center items-center bg-black shadow-lg p-8">
            {isSuccessful ?
                <h1 className="text-white text-5xl font-bold mb-10">Thank you for registration</h1> :
                <h1 className="text-white text-5xl font-bold mb-10">Registration unsuccessful, please {reason}</h1>
            }
            <button onClick={handleReturn} type="button" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4">
                Return
            </button>
        </div>
    </div>
    )
};




