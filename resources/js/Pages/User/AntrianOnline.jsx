const AntrianOnline = ({ auth }) => {
  const user = auth.user
  return (
    <div className="flex">  
      <aside className="h-screen w-72 bg-green-500 sticky top-0 left-0">

      </aside>

      <main className="h-[200vh] flex flex-col flex-grow bg-blue-300">
          <div className="h-screen bg-red-400 w-full"></div>
          <div className="h-screen bg-yellow-400 w-full"></div>
      </main>
    </div>
  )
}

export default AntrianOnline