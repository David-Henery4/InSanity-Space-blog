

const BlockComponent = (props) => {
  // console.log("Props # 1: ", props);
  // console.log("Props value # 1: ", props.value);
  // console.log("quote-two", props);
  // console.log(props);
  // console.log("node function", props.renderNode);
  // console.log("node", props.node);
  // console.log("C", props.children);
  // console.log("type: ", props.children[0]?.type);
  // if (props.children[0]?.type){
  //   props.children[0]?.type(props.children[0]?.props)
  // }
  //
  // console.log("Props value # 1: ",value)
  // console.log("markDefs: ", value?.markDefs);
  // console.log("C",children)
  return (
    <p key={props.index} className="first:mt-0 my-4">
      {/* {children[0].text.substring(0, 90) + "..."} */}
      {/* {children[0].text} */}
      {/* {props.renderNode()} */}
      {/* text */}
      {/* {props.children[0]?.type && props.children[0]?.type(props.children[0]?.props)} */}
      {/* {props.value.children.map((item) => {
        // console.log("marks: ", item.marks)
        return item.text;
      })} */}
      {props.children.map((item) => {
        return item?.type ?  item?.type(item?.props) :  item
      })}
      {/* {props?.renderNode(props?.node)} */}
    </p>
  );
};

export default BlockComponent