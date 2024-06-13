

const Header = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto">
  <div className="flex-1 justify-between">
    <a className="btn btn-ghost text-2xl font-extrabold justify-start">Recipe Calories</a>
    <ul className="flex space-x-4 mr-20 ">
        <li>Home</li>
        <li>Recipes</li>
        <li>About</li>
        <li>Search</li>
    </ul>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control rounded-full">
      <input  type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-full" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="data:image/jpeg;base64,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" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default Header;