import ChangeSettings from '@/components/layouts/changeSettings'

const AccountSettings = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center max-w-[600px] w-[100%] ">
      <h1 className='font-bold lg:text-3xl mb-4 xl:text-3xl underline text-2xl' >Account Settings</h1>
      <ChangeSettings/>
      
    </div>
  )
}

export default AccountSettings