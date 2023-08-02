import React from 'react';

const AlbumList = ({ albums, handleEdit, handleDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Track Id</th>
          <th>Album Title</th>
          <th colSpan={2} className="text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {albums.length > 0 ? (
          albums.map((album, i) => (
            <tr key={album.id}>
              <td>{album.id}</td>
              <td>{album.userId}</td>
              <td>{album.title}</td>
              <td className="text-right">
                <button
                  onClick={() => handleEdit(album.id)}
                  className="btn btn-primary"
                >
                  Edit
                </button>
              </td>
              <td className="text-left">
                <button
                  onClick={() => handleDelete(album.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={7}>No Albums To Show</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default AlbumList;
