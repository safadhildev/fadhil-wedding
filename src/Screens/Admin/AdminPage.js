import {
  TableCell,
  Input,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Checkbox,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { isEmpty } from "lodash";
import { DataGrid } from "@mui/x-data-grid";

import { Button } from "../../components/common";
import AdminLogin from "./AdminLogin";

import { ADMIN_ROLES } from "./constants";

import "./styles.css";
import { app } from "../../firebase";

const db = getFirestore(app);

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "attend", headerName: "Attend", width: 70 },
  {
    field: "head_count",
    headerName: "Total Attendees",
    type: "number",
    width: 70,
  },
  {
    field: "mobile",
    headerName: "Phone Number",
    width: 100,
  },
];

const AdminPage = ({ role }) => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [checked, setChecked] = useState([]);

  const manageData = (snapshot) => {
    const sortedBySubmissionDate = snapshot?.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setData(sortedBySubmissionDate);
  };

  const getData = (queryCollection) => {
    onSnapshot(queryCollection, (querySnapshot) => {
      const rsvp = [];
      querySnapshot.forEach((doc) => {
        console.log("[DEBUG] :: ", { doc });
        rsvp.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      manageData(rsvp);
    });
  };

  const onChangeSearchValue = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    if (!value && value.length <= 0) {
      setFilteredData([]);
    }
    if (value && value?.length > 0) {
      const filterArr = data?.filter((item) =>
        item?.name?.toUpperCase()?.includes(searchValue?.toUpperCase())
      );
      setFilteredData(filterArr);
    }
  };

  const onSelectAllClick = () => {
    const mappedIds = data?.map((item) => item?.id);
    if (checked?.length === mappedIds?.length) {
      setChecked([]);
    } else {
      setChecked(mappedIds);
    }
  };

  useEffect(() => {
    // const q = query(collection(db, "cities"), where("state", "==", "CA"));
    const queryCollection = query(collection(db, "rsvp"));
    const unsubscribe = getData(queryCollection);

    return () => unsubscribe;
  }, []);

  const onPressMobile = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
  };

  const onCheckItem = (itemId) => {
    const isChecked = checked?.some((checkedItem) => checkedItem === itemId);
    if (isChecked) {
      setChecked((prev) => prev.filter((item) => item !== itemId));
    } else {
      setChecked([...checked, itemId]);
    }
  };

  const getValueByType = (key) => {
    switch (key) {
      case "total": {
        let total = 0;
        total = data?.length;
        return total;
      }
      case "total_checked": {
        let total = 0;
        total = checked?.length;
        return total;
      }
      case "head_count": {
        let total = 0;
        const mapped = data?.map((item) => item[key]);
        total = mapped?.reduce((partialSum, a) => partialSum + a, 0);
        return total;
      }
      case "head_count_checked": {
        let total = 0;
        const filteredData = data?.filter((item) =>
          checked?.some((checkedItem) => checkedItem === item?.id)
        );

        console.log("[DEBUG] :: data :: ", { filteredData });
        const mapped = filteredData?.map((item) => item?.head_count);
        total = mapped?.reduce((partialSum, a) => partialSum + a, 0);
        return total;
      }
      default:
        return 0;
    }
  };

  const renderItem = (item, index) => {
    const isChecked = checked?.some((checkedItem) => checkedItem === item?.id);
    return (
      <TableRow
        key={item.name}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            checked={isChecked}
            onClick={() => {
              onCheckItem(item?.id);
            }}
          />
        </TableCell>
        {/* <TableCell component="th" scope="row">
          {index + 1}
        </TableCell> */}

        <TableCell component="th" scope="row">
          {item.name}
        </TableCell>
        <TableCell align="right">{item?.attend ? "Yes" : "No"}</TableCell>
        <TableCell align="right">{item?.head_count}</TableCell>
        <TableCell
          align="right"
          style={{ color: "blue" }}
          onClick={() => {
            onPressMobile(item?.mobile);
          }}
        >
          {item?.mobile}
        </TableCell>
        <TableCell>{item.id}</TableCell>
      </TableRow>
    );
  };

  return (
    <div className="admin-page-container">
      <h2 className="admin-page-title">Welcome admin</h2>
      <div className="admin-page-stat-wrapper">
        <div className="admin-page-stat-card">
          <div>
            <p className="admin-page-stat-card-label">Total Respondents</p>
            <p className="admin-page-stat-card-value">
              {isEmpty(data) ? 0 : getValueByType("total")}
            </p>
          </div>
        </div>
        <div className="admin-page-stat-card">
          <div>
            <p className="admin-page-stat-card-label">Total Head Counts</p>
            <p className="admin-page-stat-card-value">
              {isEmpty(data) ? 0 : getValueByType("head_count")}
            </p>
          </div>
        </div>
      </div>
      <div className="admin-page-content-container">
        <Input
          value={searchValue}
          placeholder="Search"
          onChange={onChangeSearchValue}
          style={{
            backgroundColor: "#EEE",
            padding: "10px 20px",
            width: "95vw",
          }}
        />
        {checked?.length > 0 && (
          <div className="admin-page-stat-checked-container">
            <h4>Selected</h4>
            <div
              className="admin-page-stat-wrapper"
              style={{ margin: "10px 0 0 0" }}
            >
              <div className="admin-page-stat-card">
                <div>
                  <p className="admin-page-stat-card-label">
                    Total Respondents
                  </p>
                  <p className="admin-page-stat-card-value">
                    {isEmpty(data) ? 0 : getValueByType("total_checked")}
                  </p>
                </div>
              </div>
              <div className="admin-page-stat-card">
                <div>
                  <p className="admin-page-stat-card-label">
                    Total Head Counts
                  </p>
                  <p className="admin-page-stat-card-value">
                    {isEmpty(data) ? 0 : getValueByType("head_count_checked")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          style={{
            padding: "10px 0",
            display: "flex",
            flex: 1,
          }}
        >
          {/* <DataGrid
            rows={data}
            columns={columns}
            // pageSize={5}
            // rowsPerPageOptions={[5]}
            checkboxSelection
          /> */}

          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              //   size={dense ? "small" : "medium"}
            >
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      //   indeterminate={numSelected > 0 && numSelected < rowCount}
                      checked={
                        checked?.length > 0 && checked?.length === data?.length
                      }
                      onChange={onSelectAllClick}
                      inputProps={{
                        "aria-label": "select all desserts",
                      }}
                    />
                  </TableCell>
                  {/* <TableCell></TableCell> */}

                  <TableCell>Name</TableCell>
                  <TableCell align="right">Attend</TableCell>
                  <TableCell align="right">Total Attendees</TableCell>
                  <TableCell align="right">Phone Number</TableCell>
                  <TableCell>ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData?.length > 0
                  ? filteredData?.map(renderItem)
                  : data?.map(renderItem)}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
