import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
import AddAlbum from './components/AddAlbum';
import EditAlbum from './components/EditAlbum';

const API_URL = "https://jsonplaceholder.typicode.com/albums";

const App = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState({});


  useEffect(() => {
    fetchAllAlbums();
  }, []);

  //method to feth the list of objects from api
  const fetchAllAlbums = async () => {
    try {
      const response = await axios.get(API_URL);
      setAlbums(response.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  //method to add a record to list
  const addAlbumToList = async (userId, title) => {
    try {
      const response = await axios.post(API_URL, {
       title: title,
       userId: 1
      });
      setAlbums([...albums, response.data])
    }
    catch (error) {
      console.error("Error fetching album:", error);
    }
  }
 const handleAddAlbum = (trackId, title) => {
    addAlbumToList(trackId, title);
  }


  //method to set the album which will be edited
  const handleEdit = (id) => {
    let tempAlbum = albums.filter(x=>x.id==id)
    setAlbum(tempAlbum);
    setIsEditing(true);
  };

  //method to update the values of the album which was edited
  const handleUpdate = (id, trackId, title) =>
  {
    let tempAlbums = albums;
    tempAlbums.map((album)=>
    {
      if(album.id==id)
      {
        album.userId = trackId;
        album.title = title;
      }
    });
    setAlbums([...tempAlbums]);
  }

  //method to delete a record from a list as per the id
  const handleDelete = id => {
    setAlbums(albums.filter(x => x.id != id))
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
          />
          <AlbumList
            albums={albums}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <AddAlbum
          handleAddAlbum={handleAddAlbum}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <EditAlbum
          album={album}
          handleUpdate={handleUpdate}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default App;
