
import React, { Component } from "react";
import BasicCard from "../card/card";
import { Button} from "react-bootstrap";

export class ClassComponent extends Component {
  state = {
    card: [
      { name: "Tulasi", salary: 10000, role: "Angular dev" },
      { name: "Ranjith", salary: 20000, role: "React dev" },
      { name: "ravi", salary: 10000, role: "Angular dev" },
      { name: "krishna", salary: 20000, role: "React dev" },
    ],
  };

  clickHandler = () => {
    const newData = { name: "Mukesh", role: "Next.js dev", salary: 2000 };
    const updatedData = [...this.state.card, newData];

    this.setState({
      card: updatedData,
    });
  };

  removeHandler = (id) => {
    const filteredData = this.state.card.filter((_, index) => index !== id);
    this.setState({
      card: filteredData,
    });
  };

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.clickHandler}>
          Add Data
        </Button>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
            justifyContent: "center",
          }}
        >
          {this.state.card.map((eachEmployee, index) => (
            <BasicCard
              key={index}
              title={eachEmployee.name}
              role={eachEmployee.role}
              salary={eachEmployee.salary}
              removeHandler={() => this.removeHandler(index)}
            />
          ))}
        </div>
      </>
    );
  }
}
