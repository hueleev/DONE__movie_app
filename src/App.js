import React from 'react';


function Puppy({ name , picture }) {
  return <div>
    <h1> I like {name}</h1>
    <img src={picture} />
  </div>
}

const puppys = [
  {
    name: "puppy",
    image: "https://images.mypetlife.co.kr/wp-content/uploads/2018/03/07153649/file_23230_coton-de-tulear.jpg"
  },
  {
    name: "puppy",
    image: "https://cdn.crowdpic.net/list-thumb/thumb_l_F765F72F320703AA2833A5260D71732D.jpg"
  }]

// component : HTML을 반환하는 함수
function App() {
  return (
    <div className="App">
      { puppys.map(puppy => <Puppy name={puppy.name} picture={puppy.image}/>)}
    </div>
  );
}

export default App;
