import { getServerSession } from "next-auth"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation"
import MovieVideo from "../components/MovieVideo"
import RecentlyAdded from "../components/RecentlyAdded"

const HomePage = async () => {
  const sessions = await getServerSession(authOptions)
  if(!sessions) return redirect('/login')
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1 className="text-3xl font-bold">Recently Added</h1>
      <RecentlyAdded />
    </div>
  )
}

export default HomePage