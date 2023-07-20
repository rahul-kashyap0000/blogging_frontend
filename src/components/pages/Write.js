import { React, useState } from 'react'
import { faqForm } from '../utils/forms/faq'
import { helpForm } from '../utils/forms/help'
export default function Write () {
  const [articleForm, setarticleForm] = useState({"form_type" : "FAQ" ,"form": faqForm})

  const handleChange = selectedOption => {
    if (selectedOption === 'FAQ') {
      setarticleForm({"form_type" : "FAQ" ,"form": faqForm})
    } else {
      setarticleForm({"form_type" : "Helper" ,"form": helpForm})
    }
  }

  const handleSubmit = () => {
    console.log('handleSubmit')
  }
  return (
    <>
      <h1>Write a new {articleForm.form_type} Article</h1>
      <label>Type of Article</label>
      <select
        onChange={e => {
          handleChange(e.target.value)
        }}
      >
        <option>FAQ</option>
        <option>Helper Article</option>
      </select>
      <br></br>
      {articleForm.form()}

      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}
