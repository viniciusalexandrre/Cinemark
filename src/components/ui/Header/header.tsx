import Link from 'next/link';
import { Button } from '../Button/button';
import { pages } from './data';

interface headerProps {
  volume: number;
}

export function Header({ volume }: headerProps) {
  return (
    <header className="container ">
      <div className="flex justify-between container border-b-[1px]">
        <span className="text-xl text-[var(--color-font-1)] mb-2.5">
          11 de março de 2025
        </span>
        <span className="text-xl text-[var(--color-font-1)]">Vol.{volume}</span>
      </div>
      <h1 className="text-[70px] text-[var(--color-font-0)] mt-[30px] flex items-center mb-[30px]">
        Cinemark
      </h1>
      <nav className="container border-b-[1px] border-[#262626] border- flex justify-between">
        <div className="flex">
          {pages.map((props) => (
            <Button className="w-[120px] border-r-[1px]" key={props.id}>
              <Link
                className="container text-[var(--color-font-1)] text-[22px] px-[30px] py-[20px]"
                href={props.link}
              >
                {props.page}
              </Link>
            </Button>
          ))}
        </div>
        <Button
          className="flex text-[var(--color-font-0)] text-[22px] px-30 py-20"
          variant="page"
        >
          <Link
            href={''}
            className="container text-[var(--color-font-1)] text-[22px]"
          >
            Login
          </Link>
        </Button>
      </nav>
    </header>
  );
}
