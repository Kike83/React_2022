import './App.css';


import users from './assets/Mock-users.js'
import UserCard from './Components/UserCard/index.js'


function App() {
  console.log(users)
  const testUser = {
    gender: 'female',
    name: {
      title: 'Ms',
      first: 'Denise',
      last: 'Newman'
    },
    dob: {
      date: '1945-12-31T14:50:01.922Z',
      age: 76
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/84.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/84.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/84.jpg'
    }
  }
  return (
    <div className='App'>

      <div className="d-flex gap-3 flex-wrap">
        {
          users.map((user, index) => <UserCard cardData={user}/>)
        }
        
        
        

      </div>

    </div>

  )
}






export default App