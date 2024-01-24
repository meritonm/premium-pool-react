import PageNav from "../components/PageNav";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <>
        <PageNav />
      </>
    </div>
  );
}

export default AppLayout;
