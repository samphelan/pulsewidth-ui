import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./avatar.module.css";

interface AvatarProps {
  url?: string;
  text?: string;
}

export const Avatar = ({ url, text }: AvatarProps) => {
  if (url) {
    return <img src={url} />;
  }
  if (text) {
    return <div className={styles.wrapper}>{text}</div>;
  }
  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
};
