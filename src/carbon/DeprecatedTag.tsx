import { Tag, Tooltip } from "@carbon/react";

const MESSAGE = "This app is not listed on the store anymore";

export function DeprecatedTag() {
  return (
    <Tooltip align="top" label={MESSAGE}>
      <button
        type="button"
        className="carbon-deprecated-tag-trigger"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <Tag type="red" size="sm">
          Deprecated
        </Tag>
      </button>
    </Tooltip>
  );
}
