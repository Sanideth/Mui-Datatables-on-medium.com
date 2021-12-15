import { Check, Clear } from "@mui/icons-material";
import Chip from "@mui/material/Chip";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";

const columns = [
  {
    name: "city",
    label: "ქალაქი",
    options: {
      customBodyRender: (value: string) => {
        return <div style={{ paddingLeft: "15px" }}>{value}</div>;
      },
    },
  },
  {
    name: "population",
    label: "მოსახლეობა",
    options: {
      customBodyRender: (value: string) => {
        return <div style={{ paddingLeft: "15px" }}>{value}</div>;
      },
    },
  },
  {
    name: "area",
    label: "ფართობი (კვ.კმ)",
    options: {
      customBodyRender: (value: string) => {
        return <div style={{ paddingLeft: "15px" }}>{value}</div>;
      },
    },
  },
  {
    name: "subway",
    label: "მეტრო",
    options: {
      customBodyRender: (value: boolean) => {
        return (
          <div style={{ paddingLeft: "15px" }}>
            <Chip
              label={value === true ? "კი" : "არა"}
              // color={value === true ? "success" : "error"}
              // sx={{ width: "50px" }}
            />
          </div>
        );
      },
    },
  },
];

const options: MUIDataTableOptions = {
  selectableRows: "none",
  textLabels: {
    body: {
      noMatch: "მსგავსი ჩანაწერი არ იძებნება",
      toolTip: "სორტირება",
      columnHeaderTooltip: (column) => `${column.label}-ის სორტირება`,
    },
    pagination: {
      next: "შემდეგი გვერდი",
      previous: "წინა გვერდი",
      rowsPerPage: "მწკრივების რაოდენობა გვერდზე:",
      displayRows: "of",
    },
    toolbar: {
      search: "ძებნა",
      downloadCsv: "ცხრილის გადმოწერა",
      print: "ბეჭდვა",
      viewColumns: "სვეტები",
      filterTable: "ფილტრი",
    },
    filter: {
      all: "ყველა",
      title: "ფილტრები",
      reset: "გასუფთავება",
    },
    viewColumns: {
      title: "სვეტების ჩვენება",
      titleAria: "სვეტების ჩვენება/დამალვა",
    },
  },
};

const data = [
  { city: "London", population: 9002488, area: 1572, subway: true },
  { city: "Skopje", population: 506926, area: 571.46, subway: false },
  { city: "Bucharest", population: 1883425, area: 228, subway: true },
  { city: "Tbilisi", population: 1171100, area: 504.2, subway: true },
];

const App = () => {
  return (
    <div>
      <MUIDataTable
        title="ქალაქების ცხრილი"
        columns={columns}
        data={data}
        options={options}
      />
    </div>
  );
};

export default App;
