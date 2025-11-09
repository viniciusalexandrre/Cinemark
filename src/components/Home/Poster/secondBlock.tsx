import { Button } from "@/components/ui/Button/button";
import Image from "next/image";
import Link from "next/link";

type SecondBlockProps = {
  genre: string;
  imageSrc: string;
  title: string;
};

function Carousel() {
    return (
        <div>
            <Button>
                <Image src={'seta_pequena_esquerda.svg'} alt="Seta pequena da esquerda" height={30} width={30} />
            </Button>
            <Button>
                <Link href={''}> Ver detalhes</Link>
            </Button>
            <Button>
                <Image src={'seta_pequena_direita.svg'} alt="Seta pequena da direita" height={30} width={30} />
            </Button>
        </div>
    )
}


export function SecondBlock({ genre, imageSrc, title }: SecondBlockProps) {
  return (
    <section>
      <span>{genre}</span>
      <Image src={imageSrc} alt={`Poster de ${title}`} width={395} height={364} />
      <p>{title}</p>
      <Button>Comprar ingresso</Button>
      <Carousel />
    </section>
  );
}