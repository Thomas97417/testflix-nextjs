"use client"
import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import PlayVideoModal from "./PlayVideoModal";
import { useState } from "react";
import { addToWatchlist, deleteFromWatchlist } from "../actions";
import { usePathname } from "next/navigation";

interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
  year: number;
  age: number;
  time: number;
}

const MovieCard = ({movieId, overview, title, watchList, watchListId, youtubeUrl, age, time, year}: iAppProps) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return (
    <>
      <button className="-mt-14" onClick={() => setOpen(true)}>
        <PlayCircle className="h-20 w-20" />
      </button>

      <div className="right-5 top-5 absolute z-10">
        {watchList ? (
          <form action={deleteFromWatchlist}>
            <input type="hidden" name="watchlistId" value={watchListId} />
            <input type="hidden" name="pathname" value={pathname} />
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form action={addToWatchlist}>
            <input type="hidden" name="movieId" value={movieId} />
            <input type="hidden" name="pathname" value={pathname} />
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </form>
        )}
      </div>

      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm">{year}</p>
          { age > 0 ? <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">{age}+</p> : null }
          { time > 0 && <p className="font-normal text-sm">{Math.floor(time)}h{Math.round((time - Math.floor(time)) * 60).toString().padStart(2, '0')}</p> }
        </div>
        <p className="line-clamp-1 text-sm text-gray-200 font-light">
          {overview}
        </p>
      </div>

      <PlayVideoModal
        youtubeUrl={youtubeUrl} 
        key={movieId} 
        title={title} 
        overview={overview} 
        state={open} 
        changeState={setOpen} 
        age={age}
        duration={time}
        release={year}
      />
    </>
  )
}

export default MovieCard