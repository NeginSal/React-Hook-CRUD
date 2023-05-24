import UserList from "./UserList";


const Home = () => {
  return (
    <div>
      <blockquote className="text-2xl font-semibold italic text-center text-blue-900 my-10">
        <span className="mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-400 relative inline-block">
          <span className="relative text-white "> CRUD App </span>
        </span>
        with React Hooks
      </blockquote>
      <div className='flex justify-center my-10 mx-64 bg-slate-100'>
        <UserList />
      </div>
    </div>
  );
}

export default Home;