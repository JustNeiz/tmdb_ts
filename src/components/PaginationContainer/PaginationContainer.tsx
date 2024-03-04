
import css from './PaginationContainer.module.css'
import {useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";
import {FC} from "react";

interface Props {
    total_pages : number
}
const PaginationContainer : FC<Props>= ({total_pages}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    let count = total_pages;
    if(total_pages>500){
        count=500;
    }
    return (
        <div className={css.PaginationContainer} id={'pagi'}>
            <Pagination count={count}
                        onChange={(event, page) =>
                            setSearchParams(prev => {
                                prev.set('page', page.toString());
                                return prev;
                            })}
                        page={Number(searchParams?.get('page'))}
            />
        </div>
    );
};

export default PaginationContainer;