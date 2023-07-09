
import './App.css';
import { useState } from 'react';

function App() {
  /* state ile yapılacaklar listesini tutacağız. */
  const [text, setText] = useState('');
  console.log(text);
  /* yazılanları tutmak için state oluşturuyoruz. */
  const[messages, setMessages]=useState([]);
  /* değişiklikleri yakalayıp state'i güncelleyecek fonksiyonu yazıyoruz. */
const onChangeFunc=(e)=>{
 /*  değeri alıp state'i güncelliyoruz. */
setText(e.target.value);
}
const onClickMessages=()=>{
  /*  mesajları tutan state'e yeni mesajı ekliyoruz. */
  /* ...messages ile önceki mesajları alıyoruz.  */
  setMessages([...messages,text]);
  /*  input alanını temizliyoruz. */
  setText('');
}
console.log(messages);
  return (
    <>
    <div className="App">
     <input value={text} onChange={onChangeFunc} type="text" placeholder="Add a todo" />
      <button onClick={onClickMessages}> Add </button>
      {
        messages.map((message,index)=>(
         <h1 key={index}>{message}</h1>
  ))
      }
    </div>
    </>
  );
}

export default App;
