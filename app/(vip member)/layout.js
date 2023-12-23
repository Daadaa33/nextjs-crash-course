
const layout = ({children}) => {
  return (
    <div className='p-20'>
        <div className='bg-yellow-800 font-bold my-4'>
            <span>you'r vip member</span>
        </div>
        {children}
    </div>
  )
}

export default layout