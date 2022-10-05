import { useState } from "react";
import Select from "react-select";
import "./App.css";

function App() {
  const handlesubmit = () => {
    alert("submitted");
    console.log(
      "submitted with following ",
      "region",
      region,
      "area",
      show,
      "subregion",
      selectedValue,
      "totalarea",
      sqft,
      "rooms",
      room,
      "balcony",
      bal,
      "bathrooms",
      bath
    );
     };
  const rooms = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
  ];
  const bathrooms = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
  ];
  const balconies = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
  ];
  const mumbai = [
    {
      value: 1,
      label: "Sion",
    },
    {
      value: 2,
      label: "matunga",
    },
    {
      value: 3,
      label: "andheri",
    },
    {
      value: 4,
      label: "dadar",
    },
    {
      value: 5,
      label: "byculla",
    },
    {
      value: 6,
      label: "chembur",
    },
  ];
  const navimumbai = [
    {
      value: 1,
      label: "Panvel",
    },
    {
      value: 2,
      label: "ghansoli",
    },
    {
      value: 3,
      label: "kharghar",
    },
    {
      value: 4,
      label: "nerul",
    },
    {
      value: 5,
      label: "airoli",
    },
  ];
  const reg = [
    {
      value: 1,
      label: "mumbai",
    },
    {
      value: 2,
      label: "navimumbai",
    },
  ];
  const [region, setRegion] = useState("mumbai");
  const [show, setShow] = useState(mumbai);
  const [selectedValue, setSelectedValue] = useState(1);
  const [bal, setBal] = useState(1);
  const [room, setRoom] = useState(1);
  const [bath, setBath] = useState(1);
  const [sqft, setSqft] = useState();
  const handleArea = (e) => {
    setSqft(e.target.value);
  };
  const handleRegion = (e) => {
    setRegion(e.label);
    if (region === "mumbai") {
      setShow(mumbai);
    } else if (region === "navimumbai") {
      setShow(navimumbai);
    }
  };
  const handleChange = (e) => {
    setSelectedValue(e.value);
  };
  const handleRoom = (e) => {
    setRoom(e.value);
  };
  const handleBathroom = (e) => {
    setBath(e.value);
  };
  const handleBalcony = (e) => {
    setBal(e.value);
  };

  return (
    <div className="App">
      <h1>House Price prediction</h1>
      <div className="row">
        <div className="column">
          <form>
            <div className="location inp">
              <label htmlFor="region">location</label>
              <Select
                placeholder="Select Option"
                value={reg.find((obj) => obj.label === show)} // set selected value
                options={reg} // set list of the data
                onChange={handleRegion} // assign onChange function
                className="newsel"
              />
            </div>
            <div className="subregion inp">
              <label htmlFor="subregion">sub-region</label>
              <Select
                placeholder="Select Option"
                value={show.find((obj) => obj.label === selectedValue)} // set selected value
                options={show} // set list of the data
                onChange={handleChange} // assign onChange function
                className="newsel"
              />
            </div>
            <div className="area inp">
              <label htmlFor="area">Enter the total sq.ft area</label>
              <input
                type="text"
                id="area"
                name="area"
                value={sqft}
                onChange={handleArea}
              />
            </div>
            <div className="size inp">
              <label htmlFor="size">Number of rooms</label>
              <Select
                placeholder="Select Option"
                value={rooms.find((obj) => obj.value === room)} // set selected value
                options={rooms} // set list of the data
                onChange={handleRoom} // assign onChange function
                className="newsel"
              />
            </div>
            <div className="bathroom inp">
              <label htmlFor="bathroom">Number of bathrooms</label>
              <Select
                placeholder="Select Option"
                value={bathrooms.find((obj) => obj.value === bath)} // set selected value
                options={bathrooms} // set list of the data
                onChange={handleBathroom} // assign onChange function
                className="newsel"
              />
            </div>
            <div className="balcony inp">
              <label htmlFor="balcony">Number of balconies</label>
              <Select
                placeholder="Select Option"
                value={balconies.find((obj) => obj.value === bal)} // set selected value
                options={balconies} // set list of the data
                onChange={handleBalcony} // assign onChange function
                className="newsel"
              />
            </div>
            <div className="submit">
              <input
                type="button"
                value="submit"
                className="sub"
                onClick={handlesubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
