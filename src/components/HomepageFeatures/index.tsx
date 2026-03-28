import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Android App",
    Svg: require("@site/static/img/app_poster.svg").default,
    description: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 16,
        }}
      >
        Let's you see your devices and send commands in real-time.
        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          <a
            href="https://f-droid.org/packages/app.onloc.android/"
            target="_blank"
          >
            <img src="/img/fdroid-badge.svg" height={60} />
          </a>
          <a
            href="https://github.com/onloc-app/onloc-android/releases/latest/"
            target="_blank"
          >
            <img src="/img/github-badge.svg" height={60} />
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Self-Hosted Servers",
    Svg: require("@site/static/img/servers_poster.svg").default,
    description: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 16,
        }}
      >
        Host your own server and control your data.
        <a
          href="/docs/self-host/installation"
          className="button button--primary"
        >
          Installation
        </a>
      </div>
    ),
  },
  {
    title: "",
    Svg: require("@site/static/img/path_poster.svg").default,
    description: (
      <>
        See your current location and an history of where you devices has been.
        Never lose track of your stuff.
      </>
    ),
  },
  {
    title: "Always in Control",
    Svg: require("@site/static/img/actions_poster.svg").default,
    description: (
      <>
        Send commands to your devices remotely. You can ring your phone in case
        you lost it nearby or lock it if it has been stolen.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
