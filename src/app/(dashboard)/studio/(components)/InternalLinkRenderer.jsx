"use client";
import { Tooltip, Stack, Text } from "@sanity/ui";
import { LinkIcon,LaunchIcon } from "@sanity/icons";
import { useEffect, useState } from "react";
import { client } from "../../../../../sanity/lib/client";

const sleep = (ms) => {
  return new Promise(() => setTimeout(resolve, ms));
};

const InternalLinkRenderer = (props) => {
  const [reference, setReference] = useState({});
  let subscription;
  //
  useEffect(() => {
    const query = `*[_id == $rev]{title, 'slug': slug.current}[0]`;
    const params = { rev: props.value.reference?._ref };
    //
    const fetchReference = async (listening = false) => {
      listening && (await sleep(1500));
      await client
        .fetch(query, params)
        .then((res) => {
          setReference(res);
        })
        .catch((err) => {
          console.error(err.message);
        });
    };
    //
    const listen = () => {
      subscription = client
        .listen(query, params, { visibility: "query" })
        .subscribe(() => fetchReference(true));
    };
    fetchReference().then(listen)
    //
    return function cleanup() {
      if (subscription){
        subscription.unsubscribe();
      }
    }
    //
  }, []);
  //
  return (
    <Tooltip
      content={
        <Stack space={2} padding={3}>
          <Text align="center" size={1}>
            {`${reference.title}` || "No title or slug found"}
          </Text>
          <Text align="center" size={1} muted>
            {`Slug: post/${reference.slug}` || ""}
          </Text>
        </Stack>
      }
      fallbackPlacements={["right", "left"]}
      placement="bottom"
      portal
    >
      <span className="pl-[0.3em] pr-[0.2em]">
        <>{props.renderDefault(props)}</>
        <LaunchIcon className="pl-[0.2em]" />
      </span>
    </Tooltip>
  );
};

export default InternalLinkRenderer;
