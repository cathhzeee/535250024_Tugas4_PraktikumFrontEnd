import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  href: string;
  children: ReactNode;
};

export default function Button({ href, children }: Props) {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
}