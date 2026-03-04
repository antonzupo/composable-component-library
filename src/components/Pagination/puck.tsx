import { Pagination } from "@/components/Pagination/Pagination";
import type { Components } from "@/puck/types";

type PaginationProps = Components["Pagination"];

export const paginationPuckConfig = {
  Pagination: {
    label: "Pagination",
    fields: {
      pageCount: { type: "number", label: "Page count", min: 1 },
      currentPage: { type: "number", label: "Current page", min: 1 },
      showPreviousNext: {
        type: "select",
        label: "Show previous/next",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      showFirstLast: {
        type: "select",
        label: "Show first/last when not in range",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      siblingCount: { type: "number", label: "Sibling count (each side)", min: 0 },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      pageCount: 10,
      currentPage: 5,
      showPreviousNext: true,
      showFirstLast: true,
      siblingCount: 1,
      className: "",
      id: "",
    } satisfies PaginationProps,
    render: (props: PaginationProps) => <Pagination {...props} />,
  },
};
