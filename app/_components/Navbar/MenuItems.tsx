import Link from "next/link";

const MenuItems = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center text-left ">
      <Link href="/">
        <span className="hover:text-gray-400">Home</span>
      </Link>
      <Link href="/about">
        <span className="hover:text-gray-400">About</span>
      </Link>
      <Link href="/shop">
        <span className="hover:text-gray-400">Shop</span>
      </Link>
    </div>
  );
};

export default MenuItems;
