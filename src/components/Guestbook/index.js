import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  getFirestore,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import { app } from "../../firebase";
import Header from "../common/Header";

import "./styles.css";
import { Button, Input, Modal } from "../common";

const db = getFirestore(app);

const initialFormValues = {
  name: "",
  message: "",
  date: new Date(),
};

const Guestbook = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);

  const getGuestbookData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "guestbook"));
      if (!querySnapshot.empty) {
        const docs = querySnapshot.docs;
        const result = docs.map((doc) => doc?.data());
        setData(result);
      }
    } catch (err) {
      console.log("[ERROR] :: ", { err });
    }
  };

  const onCloseModal = () => {
    setFormValues(initialFormValues);
    setShowModal(false);
  };

  const onSubmitNewMessage = async () => {
    try {
      setSubmitLoading(true);
      const docRef = await addDoc(collection(db, "guestbook"), {
        ...formValues,
        date: new Date(),
      });
      if (docRef?.id) {
        onCloseModal();
      }
    } catch (err) {
      console.log("[ERROR] :: ", { err });
    } finally {
      setSubmitLoading(false);
    }
  };

  useEffect(() => {
    getGuestbookData();
  }, []);

  useEffect(() => {
    if (formValues?.name?.length > 0 && formValues?.message?.length > 0) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [formValues]);

  const renderModalContent = () => {
    return (
      <div>
        <p>Hello World</p>
      </div>
    );
  };

  const renderItem = (item, index) => {
    const lastItem = index === data?.length - 1;
    return (
      <div className="guestbook-item-wrapper">
        <p className="guestbook-item-name">{item?.name}</p>
        <p className="guestbook-item-message">{item?.message}</p>
        {!lastItem && <div className="guestbook-item-line" />}
      </div>
    );
  };

  return (
    <>
      <div
        tabIndex={3}
        className="home-section-countdown-container"
        data-aos="zoom-in"
      >
        <Header text="Guestbook" />

        <div className="guestbook-list-wrapper">
          {data?.length > 0 ? (
            <div className="guestbook-list">{data?.map(renderItem)}</div>
          ) : (
            <div
              style={{
                margin: "10px 0",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <p className="guestbook-item-message">-</p>
            </div>
          )}
        </div>
        <div style={{ margin: "10px 0" }}>
          <Button
            text="Tambah Mesej"
            onClick={() => {
              setShowModal(true);
            }}
          />
        </div>
      </div>
      <Modal visible={showModal} title="Tambah Mesej" onClose={onCloseModal}>
        <div style={{ padding: "10px 20px" }}>
          <TextField
            id="outlined-basic"
            label="Nama"
            variant="outlined"
            fullWidth
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
          <TextField
            id="outlined-basic"
            label="Mesej"
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            style={{
              margin: "10px 0",
              backgroundColor: "#EEEEEE",
              borderRadius: 5,
            }}
            onChange={(event) => {
              setFormValues({ ...formValues, message: event.target.value });
            }}
          />
          <div style={{ margin: "30px 0 0" }}>
            <Button
              text="Submit"
              onClick={onSubmitNewMessage}
              loading={submitLoading}
              disabled={disableSubmit}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Guestbook;
