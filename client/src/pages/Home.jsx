import {useSelector} from 'react-redux';

function Home() {
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <div className="flex items-start justify-center min-h-screen px-4 py-12">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-lg text-gray-600 mt-4">
          {currentUser?`Welcome, ${currentUser.username}!`:'Welcome to our authentication app!'}
        </p>
      </div>
    </div>
  );
}

export default Home;
