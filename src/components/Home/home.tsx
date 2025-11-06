import { Header } from '../ui/Header/header';
import { MovieTrailerBanner } from './movieTrailerBanner/movieTrailerBanner';

export function HomeComponents() {
  return (
    <>
      <Header volume={1} />
      <main>
        <MovieTrailerBanner
          title="O telefone preto 2"
          age={16}
          hours="16h"
          description="dewugdyuewgdyugweyudgweyudgweyugdywegdyuwegdyd   yewgdyuge wyudgw eygdeyyyy yyyyyyyyyyy yyyyyy yhsuwqih suiqwhsuiqw hsu iqwhsuq iwhsuiqwhsu qiwhsuiqwhshqw ushqwus hqwushq wuhsqwuihsqwuihsqwuihsqwuhsw dgyewgduyewgd dyewgdy dgeyduywegdyuwegdywegdygwedygw gdyewduywe gdywegdweygdyuwegdwygdgdewdygwe"
          theme="Suspense"
        />
      </main>
    </>
  );
}
