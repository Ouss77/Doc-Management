/* eslint-disable react/prop-types */
import Pagination from "react-js-pagination";

function PaginationControl({ activePage, itemsCountPerPage, totalItemsCount, onChange }) {
    return (
        <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={5}
            onChange={onChange}
            itemClass="inline-block"
            linkClass="px-3 py-1 mx-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-900"
            activeLinkClass="px-3 py-1 mx-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            prevPageText="Previous"
            nextPageText="Next"
            firstPageText="First"
            lastPageText="Last"
        />
    );
}

export default PaginationControl;
