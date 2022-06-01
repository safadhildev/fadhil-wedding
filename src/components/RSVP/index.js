import React, { useEffect, useState } from "react";
import { Button, Modal } from "../common";
import { MenuItem, TextField, Typography } from "@mui/material";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../../firebase";

import "./styles.css";
import moment from "moment";

const db = getFirestore(app);

const initialRSVPValues = {
  name: "",
  head_count: 1,
  attend: false,
};
const initialAlertValues = {
  type: null,
  visible: false,
};

const headCountList = [
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
  {
    value: 5,
    label: "5",
  },
];

const attendList = [
  { value: true, label: "Hadir" },
  { value: false, label: "Tidak Hadir" },
];

const RSVP = ({ visible, onClose }) => {
  const [formValues, setFormValues] = useState(initialRSVPValues);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [alert, setAlert] = useState(initialAlertValues);

  const onCloseModal = () => {
    setFormValues(initialRSVPValues);
    onClose();
  };

  const onSubmitRSVP = async () => {
    try {
      setSubmitLoading(true);
      const docRef = await addDoc(collection(db, "rsvp"), {
        ...formValues,
        head_count: formValues?.attend ? formValues.head_count : 0,
        date: moment().format(),
      });
      if (docRef?.id) {
        onCloseModal();
        setAlert("");
      }
    } catch (err) {
      console.log("[ERROR] :: ", { err });
    } finally {
      setSubmitLoading(false);
    }
  };

  useEffect(() => {
    setFormValues(initialRSVPValues);
  }, [visible]);

  useEffect(() => {
    if (formValues?.name?.length > 0) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [formValues]);

  const getHeadCountValue = () => {
    console.log("[DEBUG] :: ", {
      count: formValues?.head_count.toString(),
    });

    const text = `${formValues?.head_count.toString()} orang`;
    console.log("[DEBUG] :: ", { text });

    return `${formValues?.head_count.toString()} orang`;
  };

  return (
    <Modal visible={visible} title="RSVP" onClose={onCloseModal}>
      <div style={{ padding: "10px 20px" }}>
        <TextField
          label="Nama"
          variant="outlined"
          fullWidth
          value={formValues?.name}
          style={{
            margin: "10px 0",
            backgroundColor: "#EEEEEE",
            borderRadius: 5,
            fontFamily: `Roboto Slab, sans-serif`,
          }}
          onChange={(event) => {
            setFormValues({ ...formValues, name: event.target.value });
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1 }}>
            <p className="rsvp-text bold">Kehadiran</p>
          </div>
          <div style={{ flex: 1 }}>
            <TextField
              placeholder="Please Select"
              select
              fullWidth
              variant="outlined"
              style={{
                margin: "10px 0",
                backgroundColor: "#EEEEEE",
                borderRadius: 5,
              }}
              value={formValues?.attend}
              onChange={(event) => {
                setFormValues({ ...formValues, attend: event.target.value });
              }}
            >
              {attendList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        {formValues?.attend && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flex: 1 }}>
              <p className="rsvp-text bold">Jumlah Bilangan</p>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <TextField
                placeholder="Please Select"
                select
                fullWidth
                variant="outlined"
                style={{
                  margin: "10px 0",
                  backgroundColor: "#EEEEEE",
                  borderRadius: 5,
                }}
                value={formValues?.head_count}
                onChange={(event) => {
                  setFormValues({
                    ...formValues,
                    head_count: event.target.value,
                  });
                }}
              >
                {headCountList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
        )}
        <div style={{ margin: "30px 0 0" }}>
          <Button
            text="Submit"
            onClick={onSubmitRSVP}
            loading={submitLoading}
            disabled={disableSubmit}
          />
        </div>
      </div>
    </Modal>
  );
};

export default RSVP;
