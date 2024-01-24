import { LinkIcon, LaunchIcon } from "@sanity/icons";
import { Bock, Box, Stack, Text, Tooltip } from "@sanity/ui";

const LinkRenderer = (props) => {
  console.log("LinkRenderer", props);
  return (
    <Tooltip
      content={
        <Stack>
          <Box padding={3}>
            <Text align="center" size={1}>
              {`${props.value?.href}` || "No url found"}
            </Text>
          </Box>
        </Stack>
      }
      // then we define the placement and other options
      placement="bottom"
      fallbackPlacements={["right", "left"]}
      portal
    >
      <span className="pl-[0.3em] pr-[0.2em]">
        <>{props.renderDefault(props)}</>
        <LaunchIcon className="pl-[0.2em]" />
      </span>
    </Tooltip>
  );
};

{/* <Tooltip>
  <span>
    {props.renderDefault(props)}
    <a contentEditable={false} href={props.value.href}>
      <LaunchIcon />
    </a>
  </span>
</Tooltip>; */}

export default LinkRenderer;
