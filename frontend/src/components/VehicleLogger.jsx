import React, { useState } from "react";

function VehicleLogger() {
  const [entries, setEntries] = useState([]);
  const [pastEntries, setPastEntries] = useState([]);
  const [idCounter, setIdCounter] = useState(1); // 🔹 Counter for IDs
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    vehicleNumber: "",
    timeIn: new Date().toLocaleString(),
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Register new vehicle entry
  const registerEntry = () => {
    const newEntry = {
      id: idCounter, // 🔹 Use counter for ID
      ...formData,
      timeOut: null,
    };
    setEntries([...entries, newEntry]);
    setIdCounter(idCounter + 1); // 🔹 Increment counter
    setFormData({
      fullName: "",
      phoneNumber: "",
      vehicleNumber: "",
      timeIn: new Date().toLocaleString(),
    });
  };

  // Mark vehicle as exited
  const exitVehicle = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    const exitedEntry = entries.find((entry) => entry.id === id);
    if (exitedEntry) {
      exitedEntry.timeOut = new Date().toLocaleString();
      setPastEntries([...pastEntries, exitedEntry]);
    }
    setEntries(updatedEntries);
  };

  return (
    <div className="container mt-3">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <div className="d-flex align-items-center">
          <span className="me-2">🚗</span>
          <div>
            <h5 className="mb-0 fw-bold">Vehicle Entry-Exit Logger</h5>
            <small className="text-muted">Track vehicle entries and exits</small>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <small className="me-3">🚘 {entries.length} Active</small>
          <small className="me-3">⏱ {pastEntries.length} Exited</small>
          <button className="btn btn-outline-primary btn-sm">⬇ ExportCSV</button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="row text-center mb-4">
        <div className="col-md-4">
          <div className="card text-white bg-success">
            <div className="card-body">
              <h5 className="card-title">{entries.length}</h5>
              <p className="card-text">Active Vehicles</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-danger">
            <div className="card-body">
              <h5 className="card-title">{pastEntries.length}</h5>
              <p className="card-text">Total Exits</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-primary">
            <div className="card-body">
              <h5 className="card-title">
                {entries.length + pastEntries.length}
              </h5>
              <p className="card-text">Total Entries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Entry Form */}
      <div className="card mb-4">
        <div className="card-header bg-primary text-white">Vehicle Entry</div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange} // ✅ uses handleChange
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange} // ✅ uses handleChange
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Vehicle Number"
                name="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={handleChange} // ✅ uses handleChange
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                value={formData.timeIn}
                disabled
              />
            </div>
          </div>
          <div className="mt-3">
            <button
              className="btn btn-primary"
              onClick={registerEntry} // ✅ uses registerEntry
            >
              Register Vehicle Entry
            </button>
          </div>
        </div>
      </div>

      {/* Active Vehicles */}
      <h5>Active Vehicles ({entries.length})</h5>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Vehicle Number</th>
            <th>Time In</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td>#{entry.id}</td>
              <td>{entry.fullName}</td>
              <td>{entry.phoneNumber}</td>
              <td>{entry.vehicleNumber}</td>
              <td>{entry.timeIn}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => exitVehicle(entry.id)}
                >
                  Exit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Past Entries */}
      <h5>Past Entries ({pastEntries.length})</h5>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Vehicle Number</th>
            <th>Time In</th>
            <th>Time Out</th>
          </tr>
        </thead>
        <tbody>
          {pastEntries.map((entry) => (
            <tr key={entry.id}>
              <td>#{entry.id}</td>
              <td>{entry.fullName}</td>
              <td>{entry.phoneNumber}</td>
              <td>{entry.vehicleNumber}</td>
              <td>{entry.timeIn}</td>
              <td>{entry.timeOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VehicleLogger;
