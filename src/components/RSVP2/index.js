import React, { useEffect, useState } from "react";
import { Button } from "../common";
import { MenuItem, Modal, TextField, Typography } from "@mui/material";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../../firebase";

import "./styles.css";
import moment from "moment";

const db = getFirestore(app);

const initialRSVPValues = {
  name: "",
  head_count: 1,
  mobile: "",
  attend: true,
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
  // {
  //   value: 3,
  //   label: "3",
  // },
  // {
  //   value: 4,
  //   label: "4",
  // },
  // {
  //   value: 5,
  //   label: "5",
  // },
];

const attendList = [
  { value: true, label: "Hadir" },
  { value: false, label: "Tidak Hadir" },
];

const initialValid = {
  name: null,
  mobile: null,
};

const RSVP2 = ({ visible, onClose }) => {
  const [formValues, setFormValues] = useState(initialRSVPValues);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [alert, setAlert] = useState(initialAlertValues);
  const [isValid, setIsValid] = useState(initialValid);

  const onCloseModal = () => {
    console.log("[DEBUG] - onCloseModal");
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

  const onConfirm = () => {
    if (window.confirm("Hantar?")) {
      onSubmitRSVP();
    }
  };

  useEffect(() => {
    setFormValues(initialRSVPValues);
    setIsValid(initialValid);
  }, [visible]);

  const validateName = (val) => {
    const isNameValid = val?.length > 0;
    setIsValid({ ...isValid, name: isNameValid });
  };

  const validateMobile = (val) => {
    const isLengthEnough = val > 8;
    const ifStartWithPlus = val?.slice(0, 1) === "+";
    const numbers = ifStartWithPlus ? val?.slice(1) : val;
    const isNumber = !isNaN(numbers);

    console.log("[DEBUG] :: ", {
      valid: isLengthEnough && isNumber,
    });

    setIsValid({
      ...isValid,
      mobile: isLengthEnough && isNumber,
    });
  };

  useEffect(() => {
    if (isValid?.name && isValid.mobile) {
      console.log("[DEBUG] == FORM VALID :: ");
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [isValid]);

  const getHeadCountValue = () => {
    console.log("[DEBUG] :: ", {
      count: formValues?.head_count.toString(),
    });

    const text = `${formValues?.head_count.toString()} orang`;
    console.log("[DEBUG] :: ", { text });

    return `${formValues?.head_count.toString()} orang`;
  };

  return (
    <Modal open>
      <div>
        <p style={{ color: "white" }}>Hello</p>
      </div>
    </Modal>
  );
};

export default RSVP2;
