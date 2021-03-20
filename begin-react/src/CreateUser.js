import React from 'react';

function CreateUser({username, email, onChange, onCreate}) {
    return (
        <div>
            <input 
                name="username" 
                placeholer="계정명" 
                onChange={onChange} 
                value={username}
            />
            <input 
                name="email" 
                placeholer="이메일" 
                onChange={onChange} 
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default CreateUser;