import { Button } from '@/components/ui/Button/button';
import Image from 'next/image';

interface movieTrailerBannerProps {
  title: string;
  description: string;
  age: number;
  hours: string;
  theme: string;
}

export function MovieTrailerBanner({
  title,
  description,
  age,
  hours,
  theme,
}: movieTrailerBannerProps) {
  return (
    <div>
      <div>
        <div>
          <Image
            height={410}
            width={706}
            alt="Trailer do filme"
            src={'/banner-exemple.jpg'}
          />
        </div>
        <div>
          <h2>{title}</h2>
          <div>
            <div>{age}</div>
            <p>
              {hours} - {theme}
            </p>
          </div>
          <p>{description}</p>
          <Button text="Assistir trailer" />
        </div>
      </div>
      <div>
        <Button>
          <Image
            height={30}
            width={30}
            alt="Seta para de movimentação do botão da esquerda"
            src={'/seta-pequena-esquerda.svg'}
          />
        </Button>
        <Button>
          <Image
            height={30}
            width={30}
            alt="Seta para movimentação do botão para direita"
            src={'/seta-pequena-esquerda.svg'}
          />
        </Button>
      </div>
    </div>
  );
}
