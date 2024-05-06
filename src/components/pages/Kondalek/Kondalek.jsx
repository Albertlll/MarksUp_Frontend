import { Routes, Route } from 'react-router-dom'
import s from './Kondalek.module.css'
import LastMarksList from './components/LastMarksList/LastMarksList'
import MarksList from './components/MarksList/MarkList'
import Profile from './components/Profile/Profile'
export default function Kondalek()
{
    
    
    return(<div className={s.grid_wrapper}>
            <div className={s.main_grid}>

                <div className={s.card + ' ' + s.last_marks}>
                    <h2 className={s.label}>Последние оценки</h2>
                    <div className={s.last_marks_list_wrapper}>
                        <LastMarksList/>
                   </div>
                </div>

                <div className={s.card + ' ' + s.marks}>
                    <div className={s.marks_wrapper}>
                            <Routes>
                                <Route path='/' element={<MarksList/>}/>
                                <Route path='/second_part' element={<MarksList/>}/>
                                <Route path='/third_part' element={<MarksList/>}/>
                                <Route path='/fourth_part' element={<MarksList/>}/>
                            </Routes>
                    </div>
                </div>

                <div className={s.card + ' ' + s.profile_card}>
                    <Profile></Profile>
                </div>

            </div>

        </div>)
}