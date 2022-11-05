import './App.css';
import React from 'react';
import Row from './Row';
import request from './requests';
import Banner from './banner';
function App() {
  return (
    <div>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.netflixOriginal} largeone="true"/>
      <Row title="TRINDING NOW" fetchUrl={request.Trending} />
      <Row title="ACRION " fetchUrl={request.actionMovie}/>
      <Row title="COMEDY " fetchUrl={request.comedyMovie} />
      <Row title="HORROR" fetchUrl={request.horrorMovie}/>
      <Row title="DOCUMENTARIES" fetchUrl={request.documentaries} />
    </div>
  );
}

export default App;
