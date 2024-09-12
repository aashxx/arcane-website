import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Admin from './Admin';

const ProtectedAdmin = () => {
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const password = prompt("Enter passcode");
        if(password === "arcane") {
            setAuth(true);
        } else {
            alert("Incorrect Password");
            navigate('/');
        }

    }, [navigate]);

    return auth ? <Admin /> : null
}

export default ProtectedAdmin;