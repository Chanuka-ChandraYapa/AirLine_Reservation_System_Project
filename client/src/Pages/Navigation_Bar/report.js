import React from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Button } from '@mui/material';

class Report extends React.Component {

  constructor() {
    super();
    this.state = {
      people: [
        { name: "Keanu Reeves", profession: "Actor" },
        { name: "Lionel Messi", profession: "Football Player" },
        { name: "Cristiano Ronaldo", profession: "Football Player" },
        { name: "Jack Nicklaus", profession: "Golf Player" },
      ]
    }
  }

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "My Awesome Report";
    const headers = [["NAME", "PROFESSION"]];

    const data = this.state.people.map(elt=> [elt.name, elt.profession]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")
  }

  render() {
    return (
      <div>
        <Button type="submit"
              fullWidth
              variant="contained"             
              sx={{ mt: 3, mb: 2 }}onClick={() => this.exportPDF()}>Generate Report</Button>
      </div>
    );
  }
}

export default Report;