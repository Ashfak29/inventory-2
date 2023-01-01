import React, {useEffect, useState} from 'react';

const Login = () => {
    const [input, setInput] = useState({})
    const [error, setError] = useState('')
    const handleLogin = () => {
        if ((input.email == undefined || input.email == '') || (input.password == undefined || input.password=='')){
            setError('All fields are required')
        }else{
            if(input.email != 'admin@admin.com'|| input.password != '123456'){
                setError('Invalid email or password')
            }else{
                localStorage.user = true
                setError('')
                window.location.href = window.location.origin
                //window.location.reload()
            }
        }
    }
    const handleInput = (e) => {
        setInput(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    useEffect(() => {
      if (localStorage.user != undefined && localStorage.user == 'true'){
          window.location.href = window.location.origin
      }
    }, []);

    return (
        <div className='login-form'>
            <form className='form-width'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input className="form-control" onChange={handleInput} name={'email'} value={input.email} type={'email'}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input className="form-control" onChange={handleInput} name={'password'} value={input.password} type={'password'}/>
                </div>
            </form>
            <p>{error}</p>
            <button onClick={handleLogin} className='login-btn'>Login</button>
            {/*<input onChange={handleInput} name={'email'} value={input.email} type={'email'}/>*/}
            {/*<input  onChange={handleInput} name={'password'} value={input.password} type={'password'}/>*/}

        </div>
    );
};

export default Login;
