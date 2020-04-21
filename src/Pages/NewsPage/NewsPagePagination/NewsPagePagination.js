import React from 'react';
import './NewsPagePagination.css';

class NewsPagePagination extends React.Component {
    constructor(props) {
        super(props);

        this.onPaginationClick = this.onPaginationClick.bind(this);
    }

    onPaginationClick(event) {
        this.props.paginationClick(event.target.value);
    }

    simplestPagination() {
        const { pages, currentPage } = this.props;

        return (
            <div className='pagination'>
                <button className='pagination-button' disabled={currentPage == 1} value={1} onClick={this.onPaginationClick}>
                    &laquo;
                </button>

                {pages.map((page) =>
                    <button className={`pagination-button ${page == currentPage ? 'active-pagination-button' : ''}`} key={page} disabled={page == currentPage} value={page} onClick={this.onPaginationClick}>
                        {page}
                    </button>
                )}

                <button className='pagination-button' disabled={currentPage == pages.length} value={pages.length} onClick={this.onPaginationClick}>
                    &raquo;
                </button>
            </div>
        );
    }

    // bigPagination() {
    //     const { pages, currentPage } = this.props;
    //     // paginationNumber - number to calculate where current page staying (start, mid, end)
    //     const paginationNumber = 6;

    //     const isPageOnStart = currentPage <= paginationNumber;
    //     const isPageOnMiddle = currentPage > paginationNumber && currentPage <= pages.length - paginationNumber;
    //     const isPageOnEnd = currentPage > pages.length - paginationNumber && currentPage <= pages.length;
    //     let buttons = [];

    //     switch (true) {
    //         case isPageOnStart:
    //             buttons = (
    //                 this.generateButtonsArray(1, paginationNumber + 2, currentPage)
    //             );

    //             buttons.push(
    //                 <button className='pagination-button' disabled={true} >
    //                     &hellip;
    //                 </button>
    //             )

    //             buttons.push(
    //                 <button className='pagination-button' onClick={this.onPaginationClick} value={pages.length}>
    //                     {pages.length}
    //                 </button>
    //             )

    //             break;
    //         case isPageOnMiddle: 
    //             buttons = (
    //                 this.generateButtonsArray(currentPage, paginationNumber + currentPage, currentPage)
    //             );

    //             buttons.unshift(
    //                 <button className='pagination-button' disabled={true} >
    //                     &hellip;
    //                 </button>
    //             )

    //             buttons.push(
    //                 <button className='pagination-button' onClick={this.onPaginationClick} value={pages.length}>
    //                     {pages.length}
    //                 </button>
    //             )
    //         default:
    //             return this.simplestPagination();
    //     } 

    //     return (
    //         <div className='pagination'>
    //             {buttons}
    //         </div>
    //     )
    // }

    generateButtonsArray(start, end, currentPage) {
        let result = [];

        for (let i = start; i < end; i++) {
            result.push(
                <button className='pagination-button' disabled={currentPage == i} value={i} onClick={this.onPaginationClick}>
                    {i}
                </button>
            )
        }

        return result;
    }

    render() {
        const { pages } = this.props;
        let result;

        // if (pages.length < 10) {
        //     result = this.simplestPagination();
        // } else {
        //     result = this.bigPagination();
        // }
    
        result = this.simplestPagination();


        return result;
    }
}

export default NewsPagePagination;