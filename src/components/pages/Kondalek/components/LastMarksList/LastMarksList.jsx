import LastMarks from './last_marks_card/LastMark'

export default function LastMarksKist(){
    const marks = [
        {id: 1, text: 'Математика', mark: '4'},
        {id: 2, text: 'Русский', mark: '3'},
        {id: 3, text: 'Физика', mark: '5'},
        {id: 4, text: 'Информатика', mark: '5'}
     ];
  
     let res = marks.map(function(item) {
        return <LastMarks key={item.id} mark={item.mark} text={item.text}/>});

    return res;
}