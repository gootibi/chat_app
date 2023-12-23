import React from 'react';
import { auth } from '../firebase';

const style = {
    button: `bg-blue-500 text-white px-6 py-2 hover:bg-gray-100 hover:text-black rounded-sm`,
};

const LogOut = () => {

    const signOut = () => {
        signOut(auth);
    };

    return (
        <button
            onClick={() => auth.signOut()}
            className={style.button}
        >
            Log Out
        </button>
    );
};

export default LogOut;