import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

export default function FormExample() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: null,
  });

  const cities = [
    { name: "Hyderabad", code: "HYD" },
    { name: "Mumbai", code: "MUM" },
    { name: "Delhi", code: "DEL" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    try {
      const response=await fetch("http://localhost:3000/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) })
      const data=await response.json()
      alert("Form Submitted!");


    } catch (error) {

    }

  };

  return (
    <div className="flex justify-content-center mt-5">
      <Card title="Registration Form" style={{ width: "25rem" }}>
        <form onSubmit={handleSubmit} className="flex flex-column gap-3">

          <div>
            <label>Name</label>
            <InputText
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your name"
              className="w-full"
            />
          </div>

          <div>
            <label>Email</label>
            <InputText
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full"
            />
          </div>

          <div>
            <label>Password</label>
            <Password
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              toggleMask
              className="w-full"
            />
          </div>

          <div>
            <label>City</label>
            <Dropdown
              value={formData.city}
              options={cities}
              onChange={(e) =>
                setFormData({ ...formData, city: e.value })
              }
              optionLabel="name"
              placeholder="Select a City"
              className="w-full"
            />
          </div>

          <Button label="Submit" icon="pi pi-check" />
        </form>
      </Card>
    </div>
  );
}