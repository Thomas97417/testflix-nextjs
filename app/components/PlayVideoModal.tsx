import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface iAppProps {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: any
  release: number;
  age: number;
  duration: number;
}

const PlayVideoModal = ({changeState, overview, state, title, youtubeUrl, age, duration, release}: iAppProps) => {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="line-clamp-3">{overview}</DialogDescription>
          <div className="flex gap-x-2 items-center">
            <p>{release}</p>
            {age > 0 && <p className="border py-0.5 px-1 border-gray-200 rounded">{age}+</p>}
            {duration > 0 && <p>{Math.floor(duration)}h{Math.round((duration - Math.floor(duration)) * 60).toString().padStart(2, '0')}</p>}
          </div>
        </DialogHeader>
        <iframe
          src={youtubeUrl}
          height={250}
          className="w-full"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  )
}

export default PlayVideoModal