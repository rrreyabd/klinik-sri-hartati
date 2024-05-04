const AntrianOnline = ({ auth }) => {
  const user = auth.user
  return (
    <div> { user.name } </div>
  )
}

export default AntrianOnline