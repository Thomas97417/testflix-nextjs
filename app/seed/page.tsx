import { Button } from '@/components/ui/button'
import React from 'react'
import prisma from '../utils/db'

const SeedDatabase = () => {
  async function postData(){
    "use server"
    await prisma.movie.createMany({
      data: [
        {
          id: 11,
          title: "Oppenheimer",
          age: 10,
          duration: 3.01,
          imageString:
            "https://www.themoviedb.org/t/p/original/boAUuJBeID7VNp4L7LNMQs8mfQS.jpg",
          overview:
            "In 1942, during World War II, U.S. Army Colonel Leslie Groves recruits Oppenheimer to lead the Manhattan Project to develop an atomic bomb. Oppenheimer, who is Jewish, is particularly driven by the concern that the German nuclear research program, led by Heisenberg, might yield a fission bomb for the Nazis.",
          release: 2023,
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/watch?v=bK6ldnjE3Y0",
        },
        {
          id: 12,
          title: "Drive",
          age: 12,
          duration: 1.40,
          imageString:
            "https://www.themoviedb.org/t/p/original/mUKm5eaYm30KYyaudRn5tA204ua.jpg",
          overview:
            "A mysterious Hollywood action film stuntman gets in trouble with gangsters when he tries to help his neighbor's husband rob a pawn shop while serving as his getaway driver.",
          release: 2011,
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/watch?v=KBiOF3y1W0Y",
        },
        {
          id: 13,
          title: "The Godfather",
          age: 12,
          duration: 2.55,
          imageString:
            "https://www.themoviedb.org/t/p/original/wnDNKCeBQzioXYQrXcSyrmRHVxf.jpg",
          overview:
            "In late summer 1945, guests are gathered for the wedding reception of Don Vito Corleone's daughter Connie (Talia Shire) and Carlo Rizzi (Gianni Russo). Vito (Marlon Brando), the head of the Corleone Mafia family, is known to friends and associates as \"Godfather\".",
          release: 1972,
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/watch?v=Ew9ngL1GZvs",
        },
        {
          id: 14,
          title: "The Office",
          age: 0,
          duration: 0,
          imageString:
            "https://www.themoviedb.org/t/p/original/2dApsoX4bd98szjrbj5i3syYOh2.jpg",
          overview:
            "A mediocre paper company in the hands of Scranton, PA branch manager Michael Scott. This mockumentary follows the everyday lives of the manager and the employees he \"manages\". The crew follows the employees around 24/7 and captures their quite humorous and bizarre encounters as they will do what it takes to keep the company thriving.",
          release: 2005,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/watch?v=mfokPqeSNcw",
        },
        {
          id: 15,
          title: "Cyberpunk: Edgerunners",
          age: 17,
          duration: 0,
          imageString:
            "https://www.themoviedb.org/t/p/original/74Oo4hRy9xadpDZGqsWu2XqoNje.jpg",
          overview:
            "In a dystopia riddled with corruption and cybernetic implants, a talented but reckless street kid strives to become a mercenary outlaw — an edgerunner.",
          release: 2023,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/watch?v=JtqIas3bYhg",
        },
        {
          id: 16,
          title: "Rick and Morty",
          age: 18,
          duration: 0,
          imageString:
            "https://www.themoviedb.org/t/p/original/kKsdvIOfWhqw5ZfAepi5EZqhrsP.jpg",
          overview:
            "The series follows the misadventures of alcoholic scientist Rick and his overly nervous grandson Morty, who split their time between domestic family life and intergalactic travel.",
          release: 2013,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/watch?v=jerFRSQW9g8",
        },
        {
          id: 17,
          title: "Dune",
          age: 13,
          duration: 2.35,
          imageString:
            "https://www.themoviedb.org/t/p/original/qpyaW4xUPeIiYA5ckg5zAZFHvsb.jpg",
          overview:
            "Year 10191. Summoned by the emperor to take over the stewardship of the arid, inhospitable planet Arrakis--the only source of Spice, the sacred hallucinogen--Duke Leto of the noble House Atreides and his family travel to the peril-laden exoplanet. But there, beset by indecipherable visions, the duke's gifted son, Paul Atreides, finds himself caught between two worlds as the grotesque Baron Vladimir of the brutal House Harkonnen plots revenge. Now, the road to legend leads deep into the desert. Can Paul fulfil his destiny in far-off Dune, the home of the mysterious, blue-eyed Fremen?",
          release: 2021,
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/watch?v=n9xhJrPXop4",
        },
        {
          id: 18,
          title: "The Boy and the Heron",
          age: 11,
          duration: 2.04,
          imageString:
            "https://www.themoviedb.org/t/p/original/pqCsZON3RbMYw97KK9SKeYfnL4J.jpg",
          overview:
            "After losing his mother during the war, young Mahito moves to his family's estate in the countryside. There, a series of mysterious events lead him to a secluded and ancient tower, home to a mischievous gray heron.",
          release: 2023,
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/watch?v=f7EDFdA10pg",
        },
        {
          id: 19,
          title: "Parasite",
          age: 14,
          duration: 2.15,
          imageString:
            "https://www.themoviedb.org/t/p/original/7hLSzZX2jROmEXz2aEoh6JKUFy2.jpg",
          overview:
            "Min-hyuk, a university student, gives the family a scholar's rock meant to promise wealth. Leaving to study abroad, he suggests that the Kims' son, Ki-woo, pose as a university student to take over his job as an English language tutor for Da-hye, the daughter of the rich Park family.",
          release: 2019,
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/watch?v=SEUXfv87Wpk",
        },
        {
          id: 20,
          title: "Arcane",
          age: 16,
          duration: 0,
          imageString:
            "https://www.themoviedb.org/t/p/original/ypS7R36Vjcn51zZsXsta5onnaCo.jpg",
          overview:
            "In the cities of Piltover and Zaun, tensions rise as inventors, hooligans, politicians, and crime lords grow increasingly dissatisfied with the constraints of a devastated society. With the situation on the verge of being unsustainable, two sisters steal an artifact of immeasurable power. Discovery and danger collide as heroes are born and bonds are broken. Will this power change the world? Or will it lead to ruin? This is the world of Arcane.",
          release: 2021,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/watch?v=fXmAurh012s",
        },
      ],
    });
  }
  return (
    <div className='m-5'>
      <form action={postData}>
        <Button type='submit'>Seed Database</Button>
      </form>

    </div>
  )
}

export default SeedDatabase