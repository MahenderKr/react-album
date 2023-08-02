import React, { useState } from 'react';

const EditAlbum = ({ album, setIsEditing, handleUpdate }) => {

  const [trackId, setUsername] = useState(album[0].userId);
  const [title, setTitle] = useState(album[0].title);

  //method to call handleupdate method from parent component
  const updateAlbum = (e) => {
    e.preventDefault();
    handleUpdate(album[0].id, trackId, title);
    setIsEditing(false);
  }

  return (
    <div className="container-sm">
      <form onSubmit={updateAlbum}>
        <h1>Edit Album</h1>
        <h5 htmlFor="firstName">Track Id</h5>
        <input
          className='form-control'
          id="firstName"
          type="text"
          name="firstName"
          value={trackId}
          onChange={e => setUsername(e.target.value)}
        />
        <h5 htmlFor="lastName">Title</h5>
        <input
          className='form-control'
          id="lastName"
          type="text"
          name="lastName"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" className='btn btn-primary' value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="btn btn-danger"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default EditAlbum;
