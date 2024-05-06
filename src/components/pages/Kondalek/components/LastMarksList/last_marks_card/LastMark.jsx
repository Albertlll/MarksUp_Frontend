import s from './Last_marks.module.css'

export default function LastMarks(props){
    let mark = "";
    switch (props.mark){
        case "5":
            mark = s.mark_5;
            break;
            
        case "4":
            mark = s.mark_4;
            break;

        case "3":
            mark = s.mark_3;
            break;

        case "2":
            mark = s.mark_2;
            break;

        case "1":
            mark = s.mark_1;  
            break;
    }


    return (
        <div className={s.card + ' ' + mark}>
            <div className={s.text} >
                {props.text}
            </div>
        </div>
    )
}