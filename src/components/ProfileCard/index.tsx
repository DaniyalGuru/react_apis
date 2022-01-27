import React, { CSSProperties, useState } from "react";
import { User } from "../../types/user";
import { Card } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  LinkOutlined,
  HeartOutlined,
  HeartFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "./style.css";

type IProfileCardProps = {
  userData: User;
};

export default function ProfileCard({ userData }: IProfileCardProps) {
  const [isFav, setIsFav] = useState<boolean>(false);

  const customCardStyles: CSSProperties = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const toggleFav = () => {
    setIsFav((prev) => !prev);
  };

  // jsx ---
  return (
    <Card
      hoverable
      className="card"
      bodyStyle={{ padding: 0 }}
      style={customCardStyles}
      cover={
        <img
          className="card__coverImg"
          alt={userData.username}
          src={process.env.REACT_APP_AVATARS_API?.replace(
            "{{user_name}}",
            userData.username
          )}
        />
      }
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="card__content">
          <h2 className="card__heading"> {userData.name} </h2>
          <p>
            <MailOutlined />
            <a className="card__link" href={`mailto:${userData.email}`}>
              {userData.email}
            </a>
          </p>
          <p>
            <PhoneOutlined />
            <a className="card__link" href={`mailto:${userData.phone}`}>
              {userData.phone}
            </a>
          </p>
          <p>
            <LinkOutlined />
            <a
              className="card__link"
              href={`//${userData.website}`}
              target={"_blank"}
              rel="noreferrer"
            >
              {userData.website}
            </a>
          </p>
        </div>

        <div className="card__footer">
          <div
            className="card__footer__icon card__footer__icon--heart"
            onClick={toggleFav}
          >
            {isFav ? <HeartFilled /> : <HeartOutlined />}
          </div>
          <div className="card__footer__icon">
            <EditOutlined />
          </div>
          <div className="card__footer__icon">
            <DeleteOutlined />
          </div>
        </div>
      </div>
    </Card>
  );
}
