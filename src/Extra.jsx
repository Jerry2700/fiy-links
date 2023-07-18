<Card sx={{ maxWidth: 450 }} className="first-card" style={{marginLeft:'5vh',marginTop:'16vh',borderRadius:'2vh',boxShadow:' 7px 10px black'}} >
<CardMedia
  sx={{ height: 330 }}
  image={img}
  title="green iguana"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div"style={{textDecoration:'underline'}} >
  Social Media Information
  </Typography>
  <Typography variant="body2" color="text.secondary" style={{textDecoration:'underline'}}>
  <b> Link Your Social Medias </b>
  </Typography>
</CardContent>
{/* <TextField id="demo-helper-text-misaligned-no-helper" label="Social Media Url"  /> */}
<input
className="search-box"
list="data"
onChange={handleSocialMediaChange}
placeholder="Social Media Name"
value={val} style={{marginLeft:'12vh'}}
/>

<datalist id="data">
{data.map((op) => (
<option key={op}>{op}</option>
))}
</datalist>
<br /> <br />


<TextField fullWidth label="Social Media Url" id="fullWidth" 
onChange={(evt) =>
  setSelectedLink(evt.target.value)}/>
<br /> <br />


<CardActions>
  <Button size="large" style={{marginLeft:'17vh'}} onClick={handleAddButtonClick}>Add Icon</Button>

  

      

  
</CardActions>
<div className='links-container'>
{listOfLinks.map((link,index) =>(
<div key={index} className='links-div' >
  <div className='label-div'><label><b> {link.name} </b></label>
  <br />
  <label>{link.link}</label>
  </div>
  <div className='delete-div' onClick={()=>deleteLink(link.name,link.link)} >
   <MdDelete/>
  </div>
</div>

))}
</div>
</Card>


































<input type="file" onChange={handleImageChange}  />
<div style={{display:'flex'}}>

{selectedImage && <img src={selectedImage} alt="Selected"
style={{height:'9vh',width:'5vw' ,marginLeft:'2vw',borderRadius:'50%'}} />}  </div>