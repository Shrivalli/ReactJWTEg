import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../Context/App.context';
import { useNavigate } from 'react-router-dom';

const LoginwithToken = () => {
    const [loginobj, setLogin] = useState({ username: '', password: '' });
    const [username, setUsername] = useState('');
    const [password, setpwd] = useState('');
    const [Error, setError] = useState(false);
    const { user, setUser } = useContext(AppContext);

    const navigate = useNavigate();
    const handleUsername = (event) => {
        setUsername(event.target.value);
        //setLogin({...loginobj,username:event.target.value});
    }


    const handlepwd = (event) => {
        setpwd(event.target.value);
        //setLogin({...loginobj,password:event.target.value});
    }


    const handleSubmit = async (event) => {
        loginobj.username = username;
        loginobj.password = password;
        event.preventDefault();
        try {

            const response = await axios
                .post('https://localhost:44361/api/Authorization',
                    loginobj

                )
            setUser(response.data);
            console.log(response.data);
            if (response.data.user_Id === 'admin') {
                navigate('/customer');
            }

        }
        catch (error) {
            setError(true);
        }



    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Username: <input type="text" value={username} onChange={handleUsername} />
                </div>
                <div>
                    Password: <input type="password" value={password} onChange={handlepwd} />
                </div>
                <div>
                    <button type="submit"> Login </button>
                </div>
                {Error && <div>Invalid Details </div>}
            </form>
        </div>
    );
}

export default LoginwithToken;