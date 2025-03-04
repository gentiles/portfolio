import links from "../data";
const Navbar = () => {
  const link = links.map((item) => {
    const { id, href, text } = item;
    return (
      <a
        key={id}
        href={href}
        className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
      >
        {text}
      </a>
    );
  });
  return (
    <nav className="bg-emerald-100">
      <div className="align-element flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Web<span className="text-emerald-600">Dev</span>
        </h2>
        <div className="flex gap-x-3 ">{link}</div>
      </div>
    </nav>
  );
};
export default Navbar;
