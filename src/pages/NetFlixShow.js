import React from "react";
import Row from "../components/Row/Row";
import api from "../api/api";
import Banner from "../components/Banner/Banner";
import Nav from "../components/Nav/Nav";

const NetFlixShow = () => {
  return (
    <div>
     <Nav/>
    <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={api.fetchNetflixOriginals}
        isLargeRow
      />
        <Row
        title="Trending Now"
        fetchUrl={api.fetchTrending}
       
      />
           <Row
        title="Upcoming Movies"
        fetchUrl={api.fetchUpcomingMovies}
       
      />
  
         <Row
        title="Science Fiction"
        fetchUrl={api.fetchScienceFictionMovies}
       
      />
         <Row
        title="Action Movies"
        fetchUrl={api.fetchActionMovies}
       
      />
            <Row
        title="Documentaries"
        fetchUrl={api.fetchDocumentaries}
       
      />
    </div>
  );
};

export default NetFlixShow;
