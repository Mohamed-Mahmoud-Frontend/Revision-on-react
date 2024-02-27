import { useState } from "react";

const initialFormData ={
userName :""
}
const FormNative = () => {
    const [formData, setFormData] = useState(initialFormData);
    const handleInputChange =(e)=>{
        setFormData({...formData , [e.target.name] : e.target.value})
    }
  return (
    <form className="formNative">
<div>
<label htmlFor="userName">userName</label>
<input type="text" placeholder="mohamed" name="userName" value={formData.userName} onChange={handleInputChange} />
</div>


    </form>
  )
}

export default FormNative