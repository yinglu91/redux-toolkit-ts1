import { useAppSelector } from '../app/hooks';

const Profile = () => {
  const user = useAppSelector(state => state.auth.user)
  const themeColor = useAppSelector(state => state.theme.color)

  return (
    <div style={{color: themeColor}}>
      <h1>Profile Page</h1>

      <p>Name: {user.name}</p>
      <p>Age: {user.age && user.age }</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile


