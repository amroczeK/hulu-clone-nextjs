function HeaderItem({ title, Icon }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-2 ml-1.5 mr-1.5 hover:text-white active:text-blue-300">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
