import React from 'react';
import PropTypes from 'prop-types';

const puppys = [
  {
    id: 1,
    name: "puppy",
    image: "https://images.mypetlife.co.kr/wp-content/uploads/2018/03/07153649/file_23230_coton-de-tulear.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "puppy",
    image: "https://cdn.crowdpic.net/list-thumb/thumb_l_F765F72F320703AA2833A5260D71732D.jpg",
    rating: 4.8
  }]

function Puppy({ name, picture, rating }) {
  return <div>
    <h2> I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

Puppy.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

// component : HTML을 반환하는 함수
function App() {
  return (
    <div className="App">
      { puppys.map(puppy => <Puppy key={puppy.id} name={puppy.name} picture={puppy.image} rating={puppy.rating}/>)}
    </div>
  );
}

export default App;
