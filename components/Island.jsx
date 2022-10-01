import { serialize } from "https://deno.land/x/serialize_javascript/mod.ts";

export default function Island(props) {
  const { children } = props;
  const forward = { ...props, children: undefined };
  return (
    <n-island
      name={children.type.name}
      props={serialize(children.props, { isJSON: true })}
      whenIdle={ forward.whenVisible ? undefined : true }
      { ...forward }
    >
      {children}
    </n-island>
  );
}
