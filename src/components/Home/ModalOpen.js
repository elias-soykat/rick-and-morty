import React, { useState } from "react";
import { Modal } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";

export default function ModalOpen({ name, status, species, location, image }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <h2 className="text-light hover-effect" onClick={showModal}>
        {name}
      </h2>
      <Modal
        title={<h4>{name}</h4>}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="px-3">
          <img width="30%" src={image} alt="" />
          <ul className="pt-3 ps-3">
            <li>{name}</li>
            <li>{location.name}</li>
            <li>{status}</li>
            <li>{species}</li>
          </ul>
        </div>
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  h2 {
    cursor: pointer;
    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }
  &:hover {
    text-decoration: underline;
  }

  .ant-modal-title {
    border: 2px solid yellow !important;
  }
`;
