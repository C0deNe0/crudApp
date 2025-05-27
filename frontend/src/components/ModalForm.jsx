import React, { useState } from "react";

const ModalForm = ({ isOpen, onClose, mode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(false);
  const [rate, setRate] = useState('');
  const [job,setJob] = useState('');

  const handleStatusChange = (e)=>{
    setStatus(e.target.value == 'Active'); //set status as boolean
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    onClose()
  }

  return (
    <>
      <dialog id="my_modal_3" className="modal " open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {" "}
            {mode === "edit" ? "Edit client" : "Client Detail"}
          </h3>
          <form method="dialog" onSubmit={handleSubmit}  >
            <label className="input file-input-accent my-4 w-full flex items-center gap-2 ">
              Name 
              <input type="text" className="grow" placeholder="Add Names" value={name} onChange={(e)=>{setName(e.target.value)}} />
            </label>
            <label className="input file-input-accent my-4 flex  w-full items-center gap-2">
              Email
              <input type="text" className="grow" placeholder="Add Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </label>
            <label className="input file-input-accent w-full flex my-4 items-center gap-2">
              Job
              <input type="text" className="grow" placeholder="Add Jod"  value={job} onChange={(e)=>{setJob(e.target.value)}}/>
            </label>

            <div className="flex mb-4 justify-between">
              <label className="input input-bordered mr-4 flex items-center gap-2">
                Rate
                <input type="text" className="grow" placeholder="something" value={rate} onChange={(e)=>{setRate(e.target.value)}} />
              </label>
              <select value={status ? 'Active' : 'Inactive'} className="select select-bordered w-full  max-w-xs" onChange={handleStatusChange}>
                  <option >InActive</option>
                  <option >Active</option>

              </select>


            </div>

            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
            <button className="btn btn-success">
              {mode === "edit" ? "save changes" : "add client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
