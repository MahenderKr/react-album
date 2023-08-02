import React, { useState } from 'react';

const AddAlbum = ({ setIsAdding, handleAddAlbum }) => {
  const [trackId, setTrackId] = useState('');
  const [title, setTitle] = useState('');

  //method will call the handleAddAlbum from parent component on click of add button
  const addAlbum = (event) => {
    setIsAdding(false);
    event.preventDefault();
    handleAddAlbum(trackId, title);
  }
  return (
    <div className="container-sm">
      <form onSubmit={addAlbum}>
        <h1>Add Album</h1>
        <label htmlFor="firstName">Track Id</label>
        <input
          className='form-control'
          id="firstName"
          type="text"
          name="firstName"
          value={trackId}
          onChange={e => setTrackId(e.target.value)}
        />
        <label htmlFor="lastName">Title</label>
        <input
          className='form-control'
          id="lastName"
          type="text"
          name="lastName"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input className='btn btn-primary' type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="btn btn-danger"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default AddAlbum;
