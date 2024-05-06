const Logo = ({ className }) => {
  return (
    <div className={` ${className} flex gap-2 items-center`}>
        <img src="/assets/logo.png" alt="Logo" width={36} />
        <p className="font-semibold">Klinik Sri Hartati</p>
    </div>
  )
}

export default Logo