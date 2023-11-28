import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { toast } from "react-toastify";

const InputWithEdit = ({type,  placeholder , validationObj , error , value }) => {
  const [showEdit, setShowEdit] = useState(false);
  function toggleEdit() {
    setShowEdit(prev => !prev)
  }

  return (
    <div className='flex flex-col gap-1 '>

    <div className= "border-black border-2 h-12 text-md rounded-md w-96 flex justify-between items-center">
      <input
      type= {type}
      readOnly = {!showEdit ? true : false}
      placeholder={placeholder}
      className="w-96 h-full !outline-none pl-3  font-semibold  "
      {...validationObj}
      onClick={() => !showEdit && toast.warn("Please click on the edit button to edit the fields.",{position : toast.POSITION.TOP_RIGHT})}
      />
      
      <div onClick={toggleEdit} className="border-2 border-l-black border-r-white border-y-white h-full px-1 flex justify-center items-center">
        {
          showEdit ?
          <FaSave size={20}  />
          :
        <MdModeEdit size={20} />
        }
      </div>
    </div>
    <p className='text-red-500  font-medium text-base text-center'> {error}</p>
      
    </div>
  );
};

export default InputWithEdit;
