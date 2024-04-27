// ProfilePage.js
import React, { useState } from "react";
import { EditDetailsModal } from "../../../Modal/EditDetailsModal";

export default function ProfilePage() {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    console.log("Toggling modal:", !modal);
    setModal(!modal);
  };

  console.log("Modal state:", modal);

  return (
    <div>
      <div className="w-[100%] h-[100%] px-20 py-10">
        <EditDetailsModal isOpen={modal} toggle={toggle} />
        <div>
          <p className="text-5xl font-medium bg-[#83272954] px-8 py-2 text-[#000000a5]">Account OverView</p>
          <div className="border-[1px] border-black py-6 m-8 ">
            <span className="flex justify-between items-center bg-[#83272954] px-6 py-4">
              <p className="text-3xl text-[#000000a5]">Personal Information</p>
              <button
                className="w-25 bg-slate-100 border-[1px] border-[#832729] px-5 py-2 rounded-md text-lg font-medium bold hover:bg-[#832729] hover:text-white hover:ease-in duration-500"
                onClick={toggle}
              >
                Edit Details
              </button>
            </span>
            <div className="w-[100%] m-6">
              <table className="w-[50%] text-xl">
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Mr Krunal Padsala</td>
                  </tr>
                  <tr>
                    <td>Date of birth</td>
                    <td>30 December 2001</td>
                  </tr>
                  <tr>
                    <td>Phone number</td>
                    <td>9512540136</td>
                  </tr>
                  <tr>
                    <td>Email address</td>
                    <td>krunalpadsala30@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>Varachha Road, Surat - 395006</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}