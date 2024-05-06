import s from './MarkList.module.css'
import { NavLink } from 'react-router-dom';

export default function MarkList(props) {
    console.log(props)
    // const marks = {
        
    // }

    return (
        <div className={s.mark_list}>
            <div className={s.marks_header}>
                <h3>Четверть</h3>

                <div className={s.year_parts}>
                    <NavLink to='/'> 
                        1
                    </NavLink>

                    <NavLink to='/second_part'> 
                        2
                    </NavLink>

                    <NavLink to='/third_part'> 
                        3
                    </NavLink>
                </div>
            </div>

            <table>
                <col width='267px' />

                <thead>
                    <tr>
                        <td >Предмет</td>
                        <td>Оценки</td>
                    </tr>
                </thead>

                <tbody>
                    {}
                    <tr>
                        <td>Математика</td>
                        <td className={s.marks}></td>
                    </tr>
                    <tr>
                        <td>Физика</td>
                        <td className={s.marks}></td>
                    </tr>
                    <tr>
                        <td>Биология</td>
                        <td className={s.marks}></td>
                    </tr>

                </tbody>

            </table>

        </div>)
}