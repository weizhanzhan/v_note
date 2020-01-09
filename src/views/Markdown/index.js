import React,{useState,useEffect} from 'react';
import SimpleMarkdown from '../../components/markdown'
function Markdown (props) {
    // props.history.push('/note-info/123')
  const [note,setNote] = useState([])

  useEffect(()=>{
    
  },[])
  return (
    <div>
        <SimpleMarkdown/>
    </div>
  )
}

export default React.memo(Markdown);