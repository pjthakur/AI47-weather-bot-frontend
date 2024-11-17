import UserList from "@/components/layouts/users"

const AllUsers = () => {
  return (
    <div className="flex flex-col gap-12 justify-center items-center max-w-[800px] w-[100%] ">
      <h1 className="font-bold lg:text-3xl xl:text-3xl underline text-2xl ">Users Information</h1>
      <UserList/>
    </div>
  )
}

export default AllUsers