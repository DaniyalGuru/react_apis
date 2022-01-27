import React from "react";
import { User } from "../../types/user";
import { Row, Col } from "antd";
import ProfileCard from "../ProfileCard";
import "./style.css";

type IProfilesCardGridProps = {
  usersData: User[];
};

export default function ProfilesCardGrid({
  usersData,
}: IProfilesCardGridProps) {
  return (
    <div className="profileGrid__wrapper">
      <Row gutter={16}>
        {usersData?.length > 0 ? (
          usersData.map((user) => (
            <Col
              className="gutter-row"
              style={{
                marginBottom: "1rem",
              }}
              xs={24}
              md={12}
              lg={6}
            >
              <ProfileCard userData={user} />
            </Col>
          ))
        ) : (
          <Col lg={24}>
            <h3> No Data Found ! </h3>
          </Col>
        )}
      </Row>
    </div>
  );
}
