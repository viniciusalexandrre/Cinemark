import Image from "next/image";
import { MovieComingSoon } from "./data";
import { Button } from "@/components/ui/Button/button";

export function Shortly() {
  return (
    <section>
      Em breve
      <nav>
        {MovieComingSoon.map((movie) => (
          <div key={movie.id}>
            <div>
              <span>{movie.movieGenre}</span>
              <Image
                src={movie.img}
                alt={`Image${movie.id}
                    `}
                    width={189}
                    height={374}
              />
              <div>
                <span>{movie.title}</span>
                <p>{movie.description}</p>
                <Button text={movie.description} />
              </div>
            </div>
          </div>
        ))}
      </nav>
    </section>
  );
}
