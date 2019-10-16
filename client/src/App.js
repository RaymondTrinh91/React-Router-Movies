import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = (props) => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

console.log(props.location);
  return (
    <div>
      <SavedList list={savedList} />
      <Route 
        exact path='/' 
        render={props => 
          <MovieList {...props}/>}
        />
      <Route 
        path='/movie/:dataID' 
        render={props => 
          <Movie 
            {...props} 
            addToSavedList={addToSavedList}/>}
        />
    </div>
  );
};

export default App;
