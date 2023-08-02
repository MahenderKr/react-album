import React from 'react';

const Header = ({ setIsAdding }) => {
    return (
        <header>
            <h1>Album List</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button className='btn btn-success' onClick={() => setIsAdding(true)}>Add Album</button>
            </div>
        </header>
    );
};

export default Header;