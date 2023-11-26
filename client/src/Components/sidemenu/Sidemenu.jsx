import { useState, useContext, createContext } from "react";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { NavLink } from "react-router-dom";

const SidebarContext = createContext();
//coped web code
const Sidemenu = ({ children , emailID , firstName , lastName, profileImgLink}) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className={`h-screen bg-red-400 ${expanded ? " w-72" : "w-20"} `}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
                <h4 className="font-semibold">{`${firstName !== undefined ? firstName : "" } ${lastName !== undefined ? lastName : "" }`} </h4>
              <span className="text-xs text-gray-600">{emailID}</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export function SidebarItem({ icon, text }) {
  const { expanded } = useContext(SidebarContext);
  const ch1 = text.split(" ")[0].toLowerCase();
  const ch2 = text.split(" ")[1];
  let link = ch1;
  if (ch2 !== undefined) {
    link += ch2;
  }
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group "
          : "hover:bg-indigo-50 text-gray-600  relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group"
      }
     
    >

      {icon}
      <span
        className={`overflow-hidden transition-all  ${
          expanded ? "w-52 ml-3" : "w-0 h-6"
        }`}
      >
        {text}
      </span>
    

      {!expanded && (
        <div
          className={`
            
            absolute left-full  rounded-md px-2 py-1 ml-6
            bg-indigo-200 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
        >
          {text}
        </div>
      )}
    </NavLink>
  );
}

export default Sidemenu;
