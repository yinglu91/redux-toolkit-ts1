import { useAppSelector } from '../app/hooks';

const Profile = () => {
  const user = useAppSelector(state => state.auth.user)
  return (
    <div>
      <h1>Profile Page</h1>

      <p>Name: {user.name}</p>
      <p>Age: {user.age && user.age }</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile


