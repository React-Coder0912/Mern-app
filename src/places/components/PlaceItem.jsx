import React, { useState, useContext, Fragment } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import { AuthContext } from "../../shared/context/auth-context";

const PlaceItem = (props) => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("DELETING...");
  };

  return (
    <Fragment>
      {/* MAP MODAL */}
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="p-0"
        footerClass="text-right"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="w-full h-60">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>

      {/* DELETE CONFIRMATION MODAL */}
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="text-right"
        footer={
          <Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </Fragment>
        }
      >
        <p className="text-gray-700">
          Do you want to proceed and delete this place? Please note that it
          can&apos;t be undone thereafter.
        </p>
      </Modal>

      {/* PLACE ITEM */}
      <li className="my-4">
        <Card className="p-0 overflow-hidden">
          {/* IMAGE */}
          <div className="w-full h-52 md:h-80">
            <img
              src={props.image}
              alt={props.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* INFO */}
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold mb-2">
              {props.title}
            </h2>
            <h3 className="text-gray-500 mb-2">
              {props.address}
            </h3>
            <p className="text-gray-700">
              {props.description}
            </p>
          </div>

          {/* ACTIONS */}
          <div className="p-4 text-center border-t border-gray-300 space-x-2">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>

            {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}>
                EDIT
              </Button>
            )}

            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default PlaceItem;