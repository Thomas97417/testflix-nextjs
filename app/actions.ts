"use server"
import { revalidatePath } from "next/cache"
import prisma from "./utils/db"
import { getServerSession } from "next-auth"
import { authOptions } from "./utils/auth"

export const addToWatchlist = async (formData: FormData) => {
  const movieId = formData.get('movieId')
  const session = await getServerSession(authOptions)
  const data = await prisma.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId)
    }
  })

  // revalidate the cache when a new movie is added to the watchlist
  const pathname = formData.get('pathname') as string
  revalidatePath(pathname)
}

export const deleteFromWatchlist = async (formData: FormData) => {
  const watchlistId = formData.get('watchlistId') as string
  const data = await prisma.watchList.delete({
    where: {
      id: watchlistId
    }
  })

  // revalidate the cache when a new movie is added to the watchlist
  const pathname = formData.get('pathname') as string
  revalidatePath(pathname)
}