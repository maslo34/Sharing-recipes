import Link from "next/link";

const Header = () => {
  return (
    <header className="flex border h-20 content-center justify-around flex-wrap">
      <div className="content-center">
        <Link className="mr-10" href={'/'}>Главная страница</Link>
        <Link href={'/recipes'}>Рецепты</Link>
      </div>
      <div>
        <button className="mr-2">Поиск по сайту</button>
        <button className="mr-2">Моя книга рецептов</button>
        <button className="mr-2">Войти/выйти</button>
        <button className="mr-2 border h-10 p-2 rounded-md border-green-500">Добавить рецепт</button>
      </div>
      
    </header>
  );
};

export default Header;
