import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Button, Input, Label } from "reactstrap";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import swal from "sweetalert";
import { LiaUserEditSolid } from "react-icons/lia";

export default function CrudOperation() {
  //=========== For Input Data ==============
  let [data, setData] = useState("");
  // ======For Store Data in Array============
  let [dataArr, setDataArr] = useState([]);
  // =======For Verifie Button==============
  let [Verifie, setVerifie] = useState([]);
  // =======For CheckBox Button==============
  let [donechecked, setDonechecked] = useState([]);
  // console.log("--->", donechecked);
  // ============For Edit Data==============
  let [editData, setEditData] = useState(null);

 

  //========Use Effect ===========
  useEffect(() => {
    const storedDataArr = JSON.parse(localStorage.getItem("dataArr"));
    if (storedDataArr) {
      setDataArr(storedDataArr);
    }
  }, []);

  // =========Get Data On Input ============
  const getData = (ele) => {
    setData(ele.target.value);
  };
  // =============Move data From  Verifie Data  to Not Verifie Data on Verifie Button========
  const VerifieHandle = (index) => {
    let verifiedData = dataArr[index];
    let filterData = dataArr.filter((e, i) => i !== index);
    setDataArr(filterData);
    setVerifie([...Verifie, verifiedData]);
  };

  // =============reaturn data on Verifie Data in Verifie Button========
  const ReturnHandle = (index) => {
    let ReturnData = Verifie[index];
    let ReturnfilterData = Verifie.filter((e, i) => i !== index);
    setVerifie(ReturnfilterData);
    setDataArr([...dataArr, ReturnData]);
  };

  // ============== Add Data in Not verifie Data================
  const addData = () => {
    if (data !== "") {
      if (!dataArr.includes(data)) {
        setDataArr([...dataArr, data]);
        setData("");
        const updatedDataArr = [...dataArr, data];
        localStorage.setItem("dataArr", JSON.stringify(updatedDataArr));
      } else {
        alert("Already Entered This Data");
      }
    } else {
      alert("Please fill some data");
    }
  };

  //================Delete Data in Verifie Data================

  const deleteHandle = (index) => {
    swal({
      title: "Are you sure?",
      text: "Your Select Data has been Deleted?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let filterData = dataArr.filter((e, i) => i !== index);
        setDataArr(filterData);
        swal("Poof! Your Data has been Deleted!", {
          icon: "success",
        });
      } else {
        swal({
          icon: "info",
          text: "Your Data is safe!",
        });
      }
    });
  };

  //================Remove Data in Verifie Data================

  // const verifiedeleteHandle = (index) => {
  //   let filterData = Verifie.filter((e, i) => i !== index);
  //   setVerifie(filterData);
  // };

  const verifiedeleteHandle = (index) => {
    swal({
      title: "Are you sure?",
      text: "Your Select Data has been Deleted?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let filterData = Verifie.filter((e, i) => i !== index);
        setVerifie(filterData);
        swal("Poof! Your Data has been Deleted!", {
          icon: "success",
        });
      } else {
        swal({
          icon: "info",
          text: "Your Data is safe!",
        });
      }
    });
  };

  // ================CheckBox Handler==============================
  const checkboxHandle = (index, e) => {
    if (e.target.checked) {
      setDonechecked([...donechecked, index]);
    } else {
      let filterData = donechecked.filter((i) => i !== index);
      setDonechecked(filterData);
    }
  };

  // ===============Submit Button Handler For checkBox in Not Verfied Data====================

  const submitHandler = () => {
    let panddingChecked = dataArr.filter((e, i) => {
      return donechecked.includes(i);
    });
    // console.log(panddingChecked);

    Verifie = [...donechecked, panddingChecked];
    let notCheckedData = dataArr.filter((e, i) => {
      return !donechecked.includes(i);
    });
    // console.log("----restpandding-->",notCheckedData);

    setVerifie(panddingChecked);
    setDataArr(notCheckedData);
    setDonechecked([]);
  };

  // ===============Submit Button Handler For checkBox in Verfied Data====================
  const submitHandlerVerifie = () => {
    let panddingChecked = Verifie.filter((e, i) => {
      return donechecked.includes(i);
    });
    // console.log(panddingChecked);

    dataArr = [...donechecked, panddingChecked];
    let notCheckedData = Verifie.filter((e, i) => {
      return !donechecked.includes(i);
    });
    // console.log("----restpandding-->",notCheckedData);

    setDataArr(panddingChecked);
    setVerifie(notCheckedData);

    setDonechecked([]);
  };

  // ===========For Update Data =================
  const updateHandle = (data, index) => {
    setEditData(index);
    setData(data);
  };

  const updatedata = () => {
    if (editData !== null) {
      dataArr[editData] = data;
      setDataArr([...dataArr]);
      setData("");
      setEditData(null);
    }
  };

  // ===========Enter Data On Key Press "Enter Button"================
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addData();
      updatedata();
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      <div className="d-flex justify-content-center w-50 mt-4 ">
        <Input
          style={{
            borderRadius: "5px 0px 0px 5px",
            border: "2px solid black",
          }}
          value={data}
          onChange={(e) => getData(e)}
          onKeyPress={handleEnter}
        />
        {!editData ? (
          <Button
            className="bg-danger border border-0 "
            style={{
              borderRadius: "0px 5px 5px 0px",
            }}
            onClick={addData}
          >
            <FaPlus className="text-center border border-0" />
          </Button>
        ) : (
          <Button
            className="bg-danger border border-0 "
            style={{
              borderRadius: "0px 5px 5px 0px",
            }}
            onClick={() => updatedata()}
          >
            UPDATE
          </Button>
        )}
      </div>
      <div className="d-flex justify-content-center  gap-4 mt-4 w-100 px-5">
        <div className="border border-bottom-1  border-black px-3 py-2 w-50 ">
          <h4 className="px-3 text-center">Not Verified Data</h4>
          <Input type="checkbox" className="me-3 border border-black "
         
          />
          <Label check>Select All</Label>

          <hr />

          {dataArr.map((e, i) => {
            return (
              <div
                key={i}
                className="d-flex justify-content-around align-items-center gap-3 h5"
              >
                <input
                  type="checkbox"
                  className="me-3"
                  checked={donechecked.includes(i)} // Check if the index is included in donechecked
                  onChange={(e) => checkboxHandle(i, e)} // Use onChange instead of onClick
                />
                <span>{i + 1}</span>
                {e}
                <span className="d-flex justify-content-center gap-3 ">
                  <LiaUserEditSolid onClick={() => updateHandle(e, i)} />
                  <MdVerified onClick={() => VerifieHandle(i)} />
                  {/* <AiTwotoneDelete onClick={() => deleteHandle(i)} /> */}
                </span>
              </div>
            );
          })}
          <Button
            className="bg-danger w-100 border-0 mt-4 fw-bold text-uppercase "
            onClick={(e) => submitHandler(e)}
          >
            Submit
          </Button>
          <Button
            className="bg-danger w-100 border-0 mt-4 fw-bold text-uppercase "
            onClick={(e) => allSelectData(e)}
          >
            Move Data
          </Button>
        </div>
        <div className="border border-1  border-black px-3 py-2 w-50">
        <h4 className="px-3 text-center"> Verified Data</h4>
          <Input type="checkbox" className="me-3  border border-black"/>
          <Label check>Select All</Label>

          <hr />

          {Verifie.map((e, i) => {
            return (
              <li
                key={i}
                className="list-unstyled d-flex justify-content-around align-items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="me-3"
                  checked={donechecked.includes(i)} // Check if the index is included in donechecked
                  onChange={(e) => checkboxHandle(i, e)} // Use onChange instead of onClick
                />
                <span>{i + 1}</span>
                {e}
                <span className="d-flex justify-content-center gap-3 ">
                  <MdVerified onClick={() => ReturnHandle(i)} />
                  <AiTwotoneDelete onClick={() => verifiedeleteHandle(i)} />
                </span>
              </li>
            );
          })}
          <Button
            className="bg-danger w-100 border-0 mt-4 fw-bold text-uppercase "
            onClick={(e) => submitHandlerVerifie(e)}
          >
            Submit
          </Button>
         
        </div>
      </div>
    </div>
  );
}
