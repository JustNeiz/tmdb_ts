import css from './OverviewTitle.module.css'
import {FC} from "react";

interface Props {
    text : string
}
const OverviewTitle : FC<Props> = ({text}) => {
    return (
        <div className={css.OverviewTitle}>
            <p>{text}</p>
        </div>
    );
};

export default OverviewTitle;