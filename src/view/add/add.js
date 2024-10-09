import React,{ useState} from 'react';
import './add.css'
import Homebutton from '../../component/homebutton/homebutton'
import EmojiPicker from 'emoji-picker-react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';


function Add() {
const [title, setTitle] = useState("xyz");
const [description ,setDescription ] = useState( "");
const [category ,setCategory] = useState("");
const [emoji,setEmoji] = useState( "");
const [openEmojiDialog, setOpenEmojiDialog] = useState(false);


const addNote=()=>{
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const noteObject ={
    title,
    description,
    category,
    emoji,
  };

  notes.push(noteObject);

  localStorage.setItem("notes",JSON.stringify(notes))

  toast.success("Note added successfully !");
  setTitle(" ");
  setDescription(" ");
  setCategory(" ");
  setEmoji(" ");
};
  return (
    <div>
      <h1 className=' text-center text-primary'>🖊️ Add Note</h1>
      
     
      <input
       type='text'
       value={title}
       placeholder='Title' 
       onChange={( e)=>{
       setTitle(e.target.value);
        }}
        className='user-input'
       />

<input
       type='text'
       value={description}
       placeholder='Description'
       onChange={( e)=>{
       setDescription(e.target.value);
        }}
        className='user-input'
       />
       <select value={category} onChange={(e)=> setCategory(e.target.value)} className='user-input user-input-select'>
       <option value="">Select category </option>
        <option value="shopping"> Shopping </option>
        <option value="work"> Work </option>
        <option value="learning"> Learning </option>
        <option value="personal"> Personal </option>
        <option value="health"> Health </option>
       </select>

<EmojiPicker 
       open={openEmojiDialog}
       height={"350px"}
       width={"400px" } 
       skinTonesDisabled={true}
       onEmojiClick={( emojiobject) =>{
      setEmoji(emojiobject.emoji);
      setOpenEmojiDialog(false)
       }}
       className='emoji-picker'
       />
       <div className='user-input user-input-emoji' onClick={()=>{setOpenEmojiDialog(true)}}  >
       {emoji ? emoji :"Select Emoji"}
       </div>
       <button 
       type='button' 
       className='btn btn-primary add-note-btn'
       onClick={addNote}>
       ➕ Add Note
      </button>
      <Toaster/>
      <Homebutton/> 
    </div>


  )
}

export default Add