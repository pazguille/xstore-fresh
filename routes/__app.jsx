/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }) {
  return (
    <>
      <Head>
        <title>APP</title>
      </Head>
      <Component />
    </>
  );
}
