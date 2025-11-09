import Image from "next/image";


export function FirstBlock() {
  return (
    <section>
      <div>
        <Image src={"poster.svg"} alt="Em cartaz" width={278} height={88} />
      </div>
      <div>
        <Image
          src={"em-cartaz.png"}
          alt="Imagem da camera"
          width={435}
          height={307}
        />
      </div>
    </section>
  );
}