import { ReactNode } from "react";
import styles from "./screens.module.scss";

type Props = {
  children: ReactNode;
};

export function DesktopScreen({ children }: Props) {
  return <div className={styles.desktop}>{children}</div>;
}

export function MobileScreen({ children }: Props) {
  return <div className={styles.mobile}>{children}</div>;
}
