const[text,setText]=useState('');
 const[name,setName]=useState('');
 
  //VARIATION 1 ->Every render
  // useEffect( ()=>{
  // console.log("UI RENDREING DONE")
  // });

  // VARIATION 2 ->first render
  // useEffect(()=>{
  //   console.log("UI rendering")
  // },[]);

  //VARIATION 3 ->FIRST RENDER+whenever dependency chnages 
  // useEffect(()=>{
  //   console.log("change observed")
  // },[name]);

  //VARIATION 4->
  useEffect(()=>{
    console.log("event listner added");//second this line is runned
    return (
      console.log("event listner removed") //first this line is runned
    )
  })

  function changehandler(event){
    console.log(text);
    setText(event.target.value);
  }
 
  return (
    <div className='App'>
   <input type='text' onChange={changehandler} ></input>
    </div>
  )