import React from "react";
import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import Title from "../../components/title";
import SubmitButton from "../../components/button/submit";
import Origamis from "../../components/origamis/index";

const ShareThoughtsPage = () => {
  return (
    <PageLayout>
      <Title title="Share your thoughts..." />
      <div className={styles.container}>
        <div>
          <textarea placeholder="Publication..."></textarea>
        </div>
        <div>
          <SubmitButton title="Post" />
        </div>
      </div>
      <Origamis countOrigamis={3} />
    </PageLayout>
  );
};

export default ShareThoughtsPage;
