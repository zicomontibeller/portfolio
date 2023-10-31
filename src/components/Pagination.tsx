import { useState } from "react";

interface IPaginationProps<T> extends React.HTMLAttributes<HTMLElement> {
  items: T[];
  onPageChange?: (page: number) => any;
  initialPage?: number;
}

export const ITEMS_PER_PAGE = 4;

export function Pagination(props: IPaginationProps<any>){
  const { items, initialPage, onPageChange, ...restProps } = props;
  const [currentPage, setCurrentPage] = useState(initialPage || 1);
  const pagesCount = Math.ceil(items.length / ITEMS_PER_PAGE);

  if (pagesCount <= 1) return null;

  const pages = Array.from(Array(pagesCount), (_, i) => i+1);

  function setPage(page:number) {
    if(currentPage != page) {
      setCurrentPage(page);
      onPageChange && onPageChange(page);
    } 
  }

  return (
    <div {...restProps}>
      <div className="flex justify-center my-10">
        <ul className="flex gap-4">
          {
            pages.map((page) => (
              <li
                className={`border p-2 px-4 ${page == currentPage ? "text-bold text-gray-200 bg-cyan-700" : "hover:cursor-pointer"}`}
                key={`page_${page}`}
                onClick={() => setPage(page)}>
                  {page}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )

}